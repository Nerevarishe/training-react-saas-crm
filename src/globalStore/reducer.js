export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";

const Reducer = (state, action) => {
  switch (action.type) {
    // App states:
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        appState: {
          isSideBarPulledOut: !state.appState.isSideBarPulledOut,
        },
      };

    default:
      return state;
  }
};

export default Reducer;
