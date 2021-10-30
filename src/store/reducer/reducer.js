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

    // case actionTypes.ADD_TASK: return {...state,tasks:[...state.tasks,action.payload]};
    // case actionTypes.EDIT_TASK: return {...state,tasks:state.tasks.map((ele,idx)=>{
    //   if(idx===action.payload.id){
    //     let obj={...ele};
    //     obj.name=action.payload.name;
    //     obj.completed=action.payload.completed;
    //     return obj;
    //   }
    // })};
    // case actionTypes.DELETE_TASK: return {...state,tasks:state.tasks.filter((ele,idx)=>idx!==action.id)};

    default:
      return state;
  }
};

export default reducer;
