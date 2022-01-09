import React from "react";
import "./LoginForm.css";

function LoginForm() {
  return (
    <div>
      <form className="form">
        <label className="label" for="fname">
          Name
        </label>
        <input type="text" className="input" name="fname" />
        <label className="label" for="pass">
          Password
        </label>
        <input type="text" className="input" name="fname" />
      </form>
      <button className="submit">Sumbit</button>
    </div>
  );
}

export default LoginForm;
