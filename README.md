# Full-Stack-Online-Code-IDE 🚀💻

Welcome to the **Full-Stack-Online-Code-IDE**! This project is a web-based Integrated Development Environment (IDE) for writing and executing HTML, CSS, and JavaScript code, built using the **MERN stack** (MongoDB, Express, React, Node.js). It's a perfect platform for developers to quickly test and run their front-end code in a live environment. 

## Features 🎉

- **Real-time HTML, CSS, and JS editor** ✨
- **Live code preview** 🌍
- **Save and load projects** 💾
- **MERN stack powered backend** ⚙️
- **Authentication** (Login, Sign-Up) 🔐
- **Responsive and user-friendly UI** 📱
- **Error handling and console output** 🛠️

## Tech Stack 🛠️

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Code Execution**: Custom backend logic to execute HTML, CSS, JS code and return live output.
- **Authentication**: JWT-based authentication for user login and registration.

## Installation 🖥️

### Prerequisites

Before running this project, ensure you have the following installed on your local machine:

- **Node.js** (v14 or higher)
- **MongoDB** (or use a cloud service like MongoDB Atlas)

### Steps to Run Locally

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/Full-Stack-Online-Code-IDE.git
    ```

2. **Install backend dependencies**:

    Navigate to the backend folder and install dependencies:

    ```bash
    cd backend
    npm install
    ```

3. **Install frontend dependencies**:

    Navigate to the frontend folder and install dependencies:

    ```bash
    cd frontend
    npm install
    ```

4. **Set up environment variables**:
   - Create a `.env` file in the `backend` folder and add your MongoDB URI and other necessary configurations like JWT secret.
   
   Example:
   
   ```env
   MONGO_URI=your-mongo-db-uri
   JWT_SECRET=your-jwt-secret
