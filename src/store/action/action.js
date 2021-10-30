import axios from "axios";

import * as actionTypes from "./actionTypes";

export const getDashboardStart = () => {
  return {
    type: actionTypes.FETCH_DASHBOARD_START,
  };
};

export const getDashboardSuccess = (orderData) => {
  return {
    type: actionTypes.FETCH_DASHBOARD_SUCCESS,
    dashboardData: orderData,
  };
};

export const getTasksStart = () => {
  return {
    type: actionTypes.FETCH_TASKS_START,
  };
};

export const getTasksSuccess = (taskData) => {
  return {
    type: actionTypes.FETCH_TASKS_SUCCESS,
    taskData: taskData.tasks,
  };
};

export const getDashboard = () => {
  const token = window.sessionStorage.getItem("token");
  return (dispatch) => {
    dispatch(getDashboardStart());
    axios
      .get("https://dev-dl.tdcx.com:3092/dashboard", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        dispatch(getDashboardSuccess(response.data));
      });
  };
};

export const getAllTasks = () => {
  const token = window.sessionStorage.getItem("token");
  return (dispatch) => {
    dispatch(getTasksStart());
    axios
      .get("https://dev-dl.tdcx.com:3092/tasks", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        dispatch(getTasksSuccess(response.data));
      });
  };
};

export const addNewTask = (name) => {
  let url = "https://dev-dl.tdcx.com:3092/tasks";
  const taskData = {
    name: name,
  };
  const token = window.sessionStorage.getItem("token");
  return (dispatch) => {
    axios
      .post(url, taskData, { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        dispatch(getDashboard());
        dispatch(getAllTasks());
      });
  };
};

export const completedTask = (task, completed) => {
  const data = {
    ...task,
    completed: completed,
  };
  const token = window.sessionStorage.getItem("token");
  const url = `https://dev-dl.tdcx.com:3092/tasks/${task._id}`;
  return (dispatch) => {
    axios
      .put(url, data, { headers: { Authorization: `Bearer ${token}` } })
      .then(() => {
        dispatch(getDashboard());
        dispatch(getAllTasks());
      });
  };
};

export const editTask = (task) => {
  const data = {
    ...task,
  };
  const token = window.sessionStorage.getItem("token");
  const url = `https://dev-dl.tdcx.com:3092/tasks/${task._id}`;
  return (dispatch) => {
    axios
      .put(url, data, { headers: { Authorization: `Bearer ${token}` } })
      .then(() => {
        dispatch(getDashboard());
        dispatch(getAllTasks());
      });
  };
};

export const loginAction = (data) => {
  return {
    type: actionTypes.LOGIN,
    payload: data,
  };
};

export const deleteTask = (id) => {
  const token = window.sessionStorage.getItem("token");
  const url = `https://dev-dl.tdcx.com:3092/tasks/${id}`;
  return (dispatch) => {
    axios
      .delete(url, { headers: { Authorization: `Bearer ${token}` } })
      .then(() => {
        dispatch(getDashboard());
        dispatch(getAllTasks());
      });
  };
};

export const logoutAction = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};

export const login = (id, name) => {
  const url = "https://dev-dl.tdcx.com:3092/login";
  const authData = {
    name: name,
    apiKey: "3bcf3285306a3172",
  };
  return (dispatch) => {
    axios.post(url, authData).then((response) => {
      window.sessionStorage.setItem("token", response.data.token.token);
      window.sessionStorage.setItem("name", response.data.token.name);
      dispatch(loginAction(response.data));
    });
  };
};
