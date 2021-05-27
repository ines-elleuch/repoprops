import React from "react";
import PropTypes from "prop-types";

function Profile({
  information: { fullname, bio, profession },
  handlname,
  children,
}) {
  return (
    <div>
      {children}
      <h1>{fullname}</h1>
      <h2>{bio}</h2>
      <h2>{profession}</h2>
      <button onClick={() => handlname(fullname)}>What's your name?</button>
    </div>
  );
}

Profile.defaultProps = {
  information: {
    fullname: "foulén",
    bio: "Unknown",
    profession: "Unknown",
  },
  myFunction: (a) => {
    alert(a);
  },
};

information: PropTypes.objectOf(PropTypes.string);

export default Profile;
