import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/action/action";
import AddTaskCard from "../component/AddTaskCard";
import AddTaskModal from "../component/AddTaskModal";
import AppHeader from "../component/AppHeader";
import "./Dashboard.css";
import { useHistory } from "react-router-dom";
import TaskCompletedCard from "../component/TaskCompletedCard";
import LastestTaskCard from "../component/LastestTaskCard";
import GraphCard from "../component/GraphCard";
import TaskTable from "../component/TaskTable";
import Button from "react-bootstrap/Button";
import EditTaskModal from "../component/EditTaskModal";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import lodash from "lodash";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Dashboard = () => {
  const [showaddcard, setShowaddcard] = useState(false);
  const [showeditcard, setShoweditcard] = useState(false);
  const [editId, setEditId] = useState();
  const dispatch = useDispatch();
  const dashboard = useSelector((state) => state.reducer.dashboard);
  const usrName = window.sessionStorage.getItem("name");
  const tasks = useSelector((state) => state.reducer.tasks);
  const allTasks = [...tasks];
  const [filterTasks, setFilterTasks] = useState();

  let history = useHistory();

  useEffect(() => {
    dispatch(actions.getDashboard());
    dispatch(actions.getAllTasks());
  }, [dispatch]);

  useEffect(() => {
    setFilterTasks(tasks);
  }, [tasks]);

  const openAddCard = () => {
    setShowaddcard(true);
  };

  const getApiResponse = (q) => {
    let filtered = allTasks.filter((ele) => {
      return ele.name.includes(q);
    });
    if (filtered) {
      setFilterTasks(filtered);
    } else {
      setFilterTasks(allTasks);
    }
  };

  const makecall = lodash.debounce((q) => getApiResponse(q), 300);
  const searchHandler = (e) => {
    makecall(e.target.value);
  };

  const openEditCard = (id) => {
    setEditId(id);
    setShoweditcard(true);
  };

  const addTask = (tname) => {
    if (tname) {
      dispatch(actions.addNewTask(tname));
      setShowaddcard(false);
    }
  };

  const editTask = (task) => {
    dispatch(actions.editTask(task));
    setShoweditcard(false);
  };

  const completed = (task, done) => {
    dispatch(actions.completedTask(task, done));
  };

  const deleteTask = (id) => {
    dispatch(actions.deleteTask(id));
    dispatch(actions.getDashboard());
  };

  const logout = () => {
    dispatch(actions.logoutAction());
    window.sessionStorage.removeItem("token");
    window.sessionStorage.removeItem("name");
    history.replace("/");
  };

  const getDashboardHtml = () => {
    return (
      <div style={{ margin: "20px" }}>
        <div className="cardsetting">
          <TaskCompletedCard
            taskCompleted={dashboard.tasksCompleted}
            totalTask={dashboard.totalTasks}
          />
          <LastestTaskCard lastestTasks={dashboard.latestTasks} />
          <GraphCard
            taskCompleted={dashboard.tasksCompleted}
            totalTask={dashboard.totalTasks}
          />
        </div>

        <Row className="search">
          <Col sm={9} xs={12}>
            <InputGroup className="mb-3 dashAddButton">
              <FormControl
                placeholder="Search by task name"
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
                onChange={searchHandler}
              />
            </InputGroup>
          </Col>
          <Col sm={3} xs={12}>
            <Button onClick={openAddCard} className="dashAddButton">
              + New Task
            </Button>
          </Col>
        </Row>

        {/* <div className="search">
        <InputGroup className="mb-3 searchText">
          <FormControl
            placeholder="Search by task name"
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            onChange={searchHandler}
          />
          
        </InputGroup>
        <Button className="dashAddButton" onClick={openAddCard}>
            + New Task
        </Button>
      </div> */}

        <div>
          {filterTasks && (
            <TaskTable
              tasks={filterTasks}
              deleteTask={deleteTask}
              completed={completed}
              edit={openEditCard}
            />
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="dashboardContainer">
      <AppHeader name={usrName} logout={logout} />
      {dashboard && dashboard.totalTasks === 0 && (
        <AddTaskCard addTask={openAddCard} />
      )}
      {
        <AddTaskModal
          show={showaddcard}
          onHide={() => setShowaddcard(false)}
          addTask={addTask}
        />
      }
      {tasks && (
        <EditTaskModal
          show={showeditcard}
          onHide={() => setShoweditcard(false)}
          editTask={editTask}
          task={tasks.find((ele) => ele._id === editId)}
        />
      )}
      {dashboard && dashboard.totalTasks > 0 && getDashboardHtml()}
    </div>
  );
};

export default Dashboard;
