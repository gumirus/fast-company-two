import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import API from "../api";
import QualitiesList from "./qualitiesList";
import { useHistory } from "react-router-dom";

const UserPage = ({ userId }) => {
  const history = useHistory();
  const [user, setUser] = useState();

  useEffect(() => {
    API.users.getById(userId).then((data) => setUser(data));
  });

  const handleClick = () => {
    history.push(`/users`);
  };

  if (user) {
    return (
      <div>
        <h1>{user.name}</h1>
        <h2>Профессия:{user.profession.name}</h2>
        <QualitiesList qualities={user.qualities} />
        <h5>Встретился, раз:{user.completedMeetings}</h5>
        <h2>Rate:{user.rate}</h2>
        <button onClick={handleClick}>Все пользователи</button>
      </div>
    );
  } else {
    return <h3>Loading...</h3>;
  }
};

UserPage.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default UserPage;
