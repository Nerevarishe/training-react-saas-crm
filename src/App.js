import React from "react";
import Header from "./containers/Header";
import Main from "./containers/Main";
import Theme from "./components/Theme/Theme";
import Store from "./globalStore/store";

function App() {
  return (
    <Store>
      <Theme>
        <Header />
        <Main />
      </Theme>
    </Store>
  );
}

export default App;
