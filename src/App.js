import React from "react";
import Header from "./containers/Header";
import Main from "./containers/Main";
import Theme from "./components/Theme/Theme";

function App() {
  return (
    <Theme>
      <Header />
      <Main />
    </Theme>
  );
}

export default App;
