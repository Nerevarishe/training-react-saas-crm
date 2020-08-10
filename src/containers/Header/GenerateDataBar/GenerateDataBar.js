import React, { useContext, useState } from "react";
import GenerateDataBarStyled from "./GenerateDataBarStyled";
import AccentButton from "../../../components/buttons/AccentButton";
import { dropDB, generateData } from "./utils";
import { Context } from "../../../globalStore/store";
import {
  TOGGLE_LOADER,
  UPDATE_WIDGETS_AFTER_DATA_GENERATION,
} from "../../../globalStore/reducer";

const GenerateDataBar = () => {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [state, dispatch] = useContext(Context);

  const generateDataHandler = async () => {
    setBtnDisabled(true);
    dispatch({ type: TOGGLE_LOADER, data: true });
    const response = await generateData();
    if (response.status === 201) {
      dispatch({ type: UPDATE_WIDGETS_AFTER_DATA_GENERATION });
      dispatch({ type: TOGGLE_LOADER, data: false });
      setBtnDisabled(false);
    }
  };

  const dropDbHandler = async () => {
    setBtnDisabled(true);
    const response = await dropDB();
    if (response.status === 200) {
      dispatch({ type: UPDATE_WIDGETS_AFTER_DATA_GENERATION });
      setBtnDisabled(false);
    }
  };

  return (
    <GenerateDataBarStyled>
      <AccentButton onClick={generateDataHandler} disabled={btnDisabled}>
        Generate data
      </AccentButton>
      <AccentButton onClick={dropDbHandler} disabled={btnDisabled}>
        Drop DB
      </AccentButton>
    </GenerateDataBarStyled>
  );
};

export default GenerateDataBar;
