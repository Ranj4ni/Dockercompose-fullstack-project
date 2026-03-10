# DevOps Full Stack Application using Docker Compose 🚀

## Project Overview

This project demonstrates how to run a **containerized full-stack application** using Docker and Docker Compose.  
The application consists of three services:

- **Frontend** – Web interface
- **Backend** – Node.js Express REST API
- **Database** – MongoDB

Each service runs in its own container and communicates through Docker networking.

---

# Architecture

User Browser  
↓  
Frontend Container (Port 3000)  
↓  
Backend API Container (Port 5000)  
↓  
MongoDB Container (Port 27017)

---

# Technologies Used

- Docker  
- Docker Compose  
- Node.js  
- Express.js  
- MongoDB  
- Git & GitHub  

---

# Project Structure

```
docker-compose-project
│
├── backend
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
│
├── frontend
│   ├── Dockerfile
│   ├── package.json
│   └── app.js
│
├── docker-compose.yml
└── README.md
```

---

# Prerequisites

Make sure the following are installed on your system:

- Docker
- Docker Compose
- Git

Check installation:

```bash
docker --version
docker compose version
```

---

# How to Run the Project

## 1 Clone the Repository

```bash
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name
```

---

## 2 Start the Application

Run the following command:

```bash
docker compose up -d
```

This command will:

- Build Docker images
- Create containers
- Start all services

---

## 3 Verify Containers

```bash
docker ps
```

You should see three running containers:

- frontend
- backend
- mongodb

---

# Access the Application

## Backend API

Open in browser:

```
http://localhost:5000
```

Output:

```
DevOps Full Stack Project Running 🚀
```

---

## API Endpoint

```
http://localhost:5000/tasks
```

Example response:

```json
[
 { "task": "Learn Docker" },
 { "task": "Learn Kubernetes" }
]
```

---

## Frontend

Open in browser:

```
http://localhost:3000
```

The frontend will communicate with the backend API.

---

# Useful Commands

### View running containers

```bash
docker ps
```

### View logs

```bash
docker logs <container-name>
```

### Stop containers

```bash
docker compose down
```

---

# Learning Outcomes

This project demonstrates:

- Containerizing applications with Docker
- Running multi-container applications using Docker Compose
- Backend API integration with MongoDB
- Docker networking between containers
- DevOps container deployment workflow

---

# Author

Ranjani  
DevOps Enthusiast | Docker | Kubernetes | CI/CD
