import React, { useContext, useState } from "react";
import GenerateDataBarStyled from "./GenerateDataBarStyled";
import AccentButton from "../../../components/buttons/AccentButton";
import { dropDB, generateData } from "./utils";
import { Context } from "../../../globalStore/store";
import { UPDATE_WIDGETS_AFTER_DATA_GENERATION } from "../../../globalStore/reducer";

const GenerateDataBar = () => {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [state, dispatch] = useContext(Context);

  const generateDataHandler = async () => {
    setBtnDisabled(true);
    const response = await generateData();
    if (response.status === 201) {
      console.log("GenerateDataBar: all data generated");
      // Dispatch event to re-render all components
      dispatch({ type: UPDATE_WIDGETS_AFTER_DATA_GENERATION });
      setBtnDisabled(false);
    }
  };

  const dropDbHandler = async () => {
    setBtnDisabled(true);
    const response = await dropDB();
    if (response.status === 200) {
      console.log("GenerateDataBar: all data deleted");
      // Dispatch event to re-render all components
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
