import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/action/action";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const token = useSelector((state) => state.reducer.token);
  const dispatch = useDispatch();
  let history = useHistory();
  useEffect(() => {
    if (window.sessionStorage.getItem("token")) {
      history.replace("/dashboard");
    }
  }, [history, token]);

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(actions.login(id, name));
  };

  return (
    <div className="Login">
      <Card
        style={{
          width: "18rem",
          borderRadius: "5%",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        }}
      >
        <Card.Body>
          <Form>
            <Form.Label>Login</Form.Label>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                placeholder="id"
                onChange={(e) => setId(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Button
              className="Login-button"
              variant="primary"
              type="submit"
              onClick={handleLogin}
            >
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
