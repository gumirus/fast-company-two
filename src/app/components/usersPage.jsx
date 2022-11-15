import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import API from "../api";
import { useHistory } from "react-router-dom";

const UsersPage = ({ userId }) => {
  const history = useHistory();
  const [user, setUser] = useState();
  useEffect(() => {
    API.users.getById(userId).then((data) => setUser(data));
  }, []);
  const handleClick = () => {
    history.push(history.location.pathname + "/edit");
  };
  if (user) {
    return <button onClick={handleClick}>В список записей</button>;
  } else {
    return <h1>Loading</h1>;
  }
};

UsersPage.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default UsersPage;
