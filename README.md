# Task Manager Web Application

A simple task management web application built with React, Vite, Tailwind CSS, and Material UI.
It connects to the Task Manager API and provides a clean, responsive interface for managing your daily tasks.

## ✨ Highlights

- 🔐 Secure login & registration (JWT-based, handled by backend)

- 📝 Manage tasks (create, edit, delete, filter)

- 🎨 Responsive UI with Tailwind + Material UI

- ⚡ Fast development with Vite

- 📡 API communication via Axios

## Tech Stack

- React
- Vite
- Tailwind CSS
- Material UI
- Axios
- uuid
- dayjs
- dotenv

## Screen Shots

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn
- A running instance of the Task Manager API()

### Installation

1. Clone the repository:

```
git clone 
cd 

```

2. Install dependencies:

```
npm install
# or
yarn install
```

3. Create a .env.development file in the root directory and add the following environment variable:

```
VITE_API_URL= the address of your backend API

```

4. Running the App

- Start the development server:

```
npm run dev
# or
yarn dev
```


The app will be available at:

```
http://localhost:5173
```

## 🗂 Project Structure

```
src/
  components/   # Reusable UI components
  context/        # Custom context to state management
  utils/        # authentication handling, task API handling
  App.jsx       # Main app component
  main.jsx      # Entry point
```

## 📄 Available Pages

- home — main page to view all tasks and manage them

- Register — Sign up for a new account

- Login — Authenticate to access your tasks

- Today Task — view and mange today tasks

- Search Task — search tasks by their title and due date

- Add Task — Add task


## 🔗 Backend Connection

- JWT is stored in cookies and automatically sent with requests.

- Errors (400, 401, 404, 500) are handled with user-friendly messages.