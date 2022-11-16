import React from "react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  return (
    <form action="">
      <div>
        <label htmlFor="email">Email</label>
        <input
          placeholder="Email"
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          placeholder="Пароль"
          id="password"
          type="password"
          name="password"
        />
      </div>
      <div>
        <button type="submit">Отправить</button>
      </div>
    </form>
  );
};

export default Login;
