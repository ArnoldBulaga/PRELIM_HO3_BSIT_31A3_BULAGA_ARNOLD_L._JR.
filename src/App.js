import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const AboutMeTodo = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("low");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task && dueDate) {
      const newTask = { task, dueDate, priority };
      setTasks([...tasks, newTask]);
      setTask("");
      setDueDate("");
      setPriority("low");
    } else {
      alert("Please fill in both the task and the due date.");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <header>
        <nav>
          <h1 className="logo"> NATOY </h1>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about"> About </a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>
      <section className="home">
        <div className="home-content">
          <h1>
            Hi, it's <span>Arnold</span>
          </h1>
          <h2>BSIT 32A3</h2>
          <p>
            "My academic interest is in pursuing a Bachelor of Science in
            Information Technology (BSIT) and my goal is to become a Network
            engineer or computer technician. I want to learn more about networks
            and troubleshooting computer systems."
          </p>
        </div>
      </section>
      <section id="about">
        <h2>About</h2>
        <p>
          <strong>Education:</strong>
          <br />
          - Elementary: Lantic Carmona Cavite
          <br />
          - High School: Carmona National High School
          <br />
          - Senior High School: Angelo Levardo Senior High School
          <br />- College: Lyceum of Alabang (BSIT 32A3)
        </p>
      </section>
      <section id="hobbies">
        <h2>Hobbies</h2>
        <p>I love listening to music and also playing Volleyball.</p>
      </section>
      <section className="container mt-5">
        <h1 className="text-center">To-Do List</h1>
        <div className="input-group mb-3">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="form-control"
            placeholder="Add a new task"
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="form-control ml-2"
          />
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="form-control ml-2"
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>
          <button className="btn btn-primary" onClick={addTask}>
            Add Task
          </button>
        </div>
        <ul className="list-group">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`list-group-item ${task.priority}-priority`}
            >
              <span>
                {task.task} (Due: {task.dueDate})
              </span>
              <button
                className="btn btn-danger btn-sm ml-2"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>Arnold L. Bulaga Jr.</p>
        <p>Email: Arnoldpogibulaga@gmail.com</p>
      </section>
      <footer>
        <p>&copy; Arnold L. Bulaga Jr. All rights reserved!</p>
      </footer>
    </div>
  );
};

export default AboutMeTodo;
