import React from "react";
import PropTypes from "prop-types";
import ViewUser from "../../../../components/ViewUser";
import { ProfileUserAvatar } from "./ProfileUserAvatar";
import { Medium11Font, Medium14Font } from "../../../../components/Fonts/Fonts";
import ProfileUserInfo from "./ProfileUserInfo";

const ProfileUser = (props) => {
  return (
    <ViewUser
      avatar={props.avatar}
      email={props.email}
      name={props.name}
      styleAvatar={ProfileUserAvatar}
      styleUserInfo={ProfileUserInfo}
      styleUserNameFont={Medium14Font}
      styleUserNameColor={(props) => props.theme.colors.blackColor}
      styleUserEmailFont={Medium11Font}
      styleUserEmailColor={(props) => props.theme.colors.grayColor}
    />
  );
};

ProfileUser.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
};

export default ProfileUser;
