import React from "react";
import "./App.css";
import Profile from "./profile/Profile";

const info = {
  fullname: "Ines",
  bio: "I'm a fullstack Js student in GMC",
  profession: "Bioengineer",
};

function App() {
  return (
    <div className="App">
      <Profile card={info}>
        {" "}
        <img
          src="https://i.insider.com/5c7988c1eb3ce830bc09bc43?width=750&format=jpeg&auto=webp"
          alt="jennifer anniston"
        ></img>
      </Profile>
    </div>
  );
}

export default App;
