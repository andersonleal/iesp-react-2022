const LOGIN_KEY = "access_token";

class AuthService {
  getToken() {
    return localStorage.getItem(LOGIN_KEY);
  }

  setToken(token: string) {
    localStorage.setItem(LOGIN_KEY, token);
  }
  logout() {
    localStorage.removeItem(LOGIN_KEY);
  }
}

export default new AuthService();
