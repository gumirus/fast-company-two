import React from "react";
import { useParams } from "react-router-dom";
import UsersPage from "../components/usersPage";
import UsersList from "../components/usersList";

const Users = () => {
  const params = useParams();
  const { userId } = params;
  return (
    <>{userId ? <UsersPage id={userId} /> : <UsersList Users={Users} />}</>
  );
};

export default Users;
