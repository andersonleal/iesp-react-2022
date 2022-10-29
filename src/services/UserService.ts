import AuthService from "./AuthService";

export interface SignUpRequest {
  email: string;
  password: string;
}
export interface LoginRequest {
  email: string;
  password: string;
}

const LOGIN_KEY = "access_token";

class UserService {
  private basePath = "http://localhost:3000";
  private async fetch(path: string, init?: RequestInit) {
    const token = localStorage.getItem(LOGIN_KEY);
    const url = [this.basePath, path].join("/");

    const response = await fetch(url, {
      ...(init ?? {}),
      headers: {
        ...(token ? { authorization: `bearer ${token}` } : {}),
        "content-type": "application/json",
      },
    });

    if (response.ok) {
      return await response.json();
    }

    throw await response.json();
  }

  async login(body: LoginRequest) {
    const { accessToken } = await this.fetch("auth/login", {
      method: "post",
      body: JSON.stringify(body),
    });
    AuthService.setToken(accessToken);
  }

  async signup(body: SignUpRequest) {
    return await this.fetch("auth/signup", {
      method: "post",
      body: JSON.stringify(body),
    });
  }

  async list() {
    return await this.fetch("users");
  }
}

export default new UserService();
