import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.scss";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            placeholder="Name"
            className="JoinInput"
            type="text"
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>
        <div>
          <input
            placeholder="Join"
            className="JoinInput mt-20"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          ></input>
        </div>
        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="button mt-20" type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
