import React from "react";
import PropTypes from "prop-types";
import { ViewUserStyled } from "./ViewUserStyled";
import { Avatar } from "./Avatar";
import { UserInfo } from "./UserInfo";
import { UserName } from "./UserName";
import { UserEmail } from "./UserEmail";

const ViewUser = (props) => {
  return (
    <ViewUserStyled>
      <Avatar as={props.styleAvatar} src={props.avatar} alt={props.name} />
      <UserInfo styles={props.styleUserInfo}>
        <UserName as={props.styleUserNameText} color={props.styleUserNameColor}>
          {props.name}
        </UserName>
        {props.email ? (
          <UserEmail
            as={props.styleUserEmailText}
            color={props.styleUserEmailColor}
          >
            {props.email}
          </UserEmail>
        ) : null}
      </UserInfo>
    </ViewUserStyled>
  );
};

ViewUser.propTypes = {
  styleAvatar: PropTypes.object.isRequired,
  styleUserInfo: PropTypes.object.isRequired,
  styleUserNameText: PropTypes.object.isRequired,
  styleUserNameColor: PropTypes.func.isRequired,
  styleUserEmailText: PropTypes.object,
  styleUserEmailColor: PropTypes.func,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
};

export default ViewUser;
