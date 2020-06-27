import React from "react";
import PropTypes from "prop-types";
import ViewUser from "../../../../components/ViewUser";
import "./ProfileUser.scss";

const ProfileUser = (props) => {
  return (
    <ViewUser avatar={props.avatar} email={props.email} name={props.name} />
  );
};

ProfileUser.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
};

export default ProfileUser;
