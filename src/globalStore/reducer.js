export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";
export const DATE_SELECTOR_SET_DAY = "DATE_SELECTOR_SET_CURRENT_DAY";
export const DATE_SELECTOR_RESET = "DATE_SELECTOR_RESET";

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

    // Components:
    // DateSelector:
    case DATE_SELECTOR_SET_DAY:
      return {
        ...state,
        dateSelector: {
          ...state.dateSelector,
          selectedDate: action.data,
        },
      };

    case DATE_SELECTOR_RESET:
      return {
        ...state,
        dateSelector: {
          ...state.dateSelector,
          selectedDate: null,
        },
      };

    default:
      return state;
  }
};

export default Reducer;
