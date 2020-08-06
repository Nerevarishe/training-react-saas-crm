export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";
export const DATE_SELECTOR_SET_DAY = "DATE_SELECTOR_SET_CURRENT_DAY";
export const DATE_SELECTOR_RESET = "DATE_SELECTOR_RESET";
export const TASKS_WIDGET_SET_PER_PAGE = "TASKS_WIDGET_SET_PER_PAGE";
export const TASKS_WIDGET_TASK_CARD_STATUS_CHANGED =
  "TASKS_WIDGET_TASK_CARD_STATUS_CHANGED";
export const TASKS_WIDGET_RESET = "TASKS_WIDGET_RESET";
export const UPDATE_WIDGETS_AFTER_DATA_GENERATION =
  "UPDATE_WIDGETS_AFTER_DATA_GENERATION";

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

    // Components
    // Data generation
    case UPDATE_WIDGETS_AFTER_DATA_GENERATION:
      return {
        ...state,
        tasksWidget: {
          ...state.tasksWidget,
          updateWidget: state.tasksWidget.updateWidget + 1,
        },
        dealsWidget: {
          ...state.dealsWidget,
          updateWidget: state.dealsWidget.updateWidget + 1,
        },
        tasksChartWidget: {
          ...state.tasksChartWidget,
          updateWidget: state.tasksChartWidget.updateWidget + 1,
        },
      };
    // TasksWidget
    case TASKS_WIDGET_SET_PER_PAGE:
      return {
        ...state,
        tasksWidget: {
          ...state.tasksWidget,
          tasksOnPage: action.data,
        },
      };

    case TASKS_WIDGET_TASK_CARD_STATUS_CHANGED:
      return {
        ...state,
        tasksWidget: {
          ...state.tasksWidget,
          updateWidget: state.tasksWidget.updateWidget + 1,
        },
      };

    case TASKS_WIDGET_RESET:
      return {
        ...state,
        tasksWidget: {
          ...state.tasksWidget,
          updateWidget: 0,
          tasksOnPage: 3,
        },
      };

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
