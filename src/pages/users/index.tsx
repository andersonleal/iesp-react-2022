import { useCallback, useEffect, useState } from "react";

import Layout from "../../components/layout";
import UserService from "../../services/UserService";

function Users() {
  const [users, setUsers] = useState([]);

  const fetch = useCallback(async () => {
    const response = await UserService.list();
    setUsers(response);
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <Layout>
      <ul>
        {users.map((item: any) => {
          return <li key={item.id}>{item.email}</li>;
        })}
      </ul>
    </Layout>
  );
}

export default Users;
