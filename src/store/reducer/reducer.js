import * as actionTypes from "../action/actionTypes";

const initialState = {
  name: null,
  image: null,
  token: null,
  dashboardloading: false,
  taskLoading: false,
  dashboard: null,
  tasks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        name: action.payload.token.name,
        image: action.payload.image,
        token: action.payload.token.token,
      };
    case actionTypes.LOGOUT:
      return { ...state, token: null };
    case actionTypes.FETCH_DASHBOARD_START:
      return { ...state, dashboardloading: true };

    case actionTypes.FETCH_DASHBOARD_SUCCESS:
      return {
        ...state,
        dashboardloading: false,
        dashboard: action.dashboardData,
      };
    case actionTypes.FETCH_TASKS_START:
      return { ...state, taskloading: true };

    case actionTypes.FETCH_TASKS_SUCCESS:
      return { ...state, taskloading: false, tasks: action.taskData };

    default:
      return state;
  }
};

export default reducer;
