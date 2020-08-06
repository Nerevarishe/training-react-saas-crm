import React, { useContext } from "react";
import { Context } from "../globalStore/store";

const withContext = (WrappedObject) => {
  return (props) => {
    // eslint-disable-next-line no-unused-vars
    const [state, dispatch] = useContext(Context);
    return (
      <WrappedObject {...props} state={state.appState}>
        {props.children}
      </WrappedObject>
    );
  };
};

export default withContext;
