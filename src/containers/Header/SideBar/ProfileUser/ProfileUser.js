import React, {useState} from "react";
import PropTypes from "prop-types";
import ViewUser from "../../../../components/ViewUser";
import styles from "./ProfileUser.module.scss";

console.log(styles);

const ProfileUser = (props) => {

  return (
    <ViewUser avatar={props.avatar} email={props.email} name={props.name} type={"profile"}/>
  );
};

ProfileUser.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
};

export default ProfileUser;
