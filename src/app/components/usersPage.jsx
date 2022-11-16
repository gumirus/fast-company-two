import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Quality from "./quality";
import API from "../api";
import { useHistory } from "react-router-dom";

const UsersPage = ({ id }) => {
  const [user, setUser] = useState();
  const history = useHistory();

  useEffect(() => {
    API.users.getById(id).then((user) => setUser(user));
  }, []);
  if (!user) return <h3>Loading...</h3>;
  const { name, qualities, profession, completedMeetings } = user;
  // if (user) {
  return (
    <div>
      <h2>{name}</h2>
      <h3>Профессия: {profession.name}</h3>
      <div>
        {qualities.map((quality) => (
          <Quality key={quality._id} {...quality} />
        ))}
      </div>
      <h5>Встретился, раз: {completedMeetings}</h5>

      <button
        onClick={() => {
          history.push(`/users`);
        }}
      >
        Все Пользователи
      </button>
    </div>
  );
  // } else {
  //   return <h1>Loading</h1>;
  // }
};

UsersPage.propTypes = {
  id: PropTypes.string.isRequired,
};

export default UsersPage;
