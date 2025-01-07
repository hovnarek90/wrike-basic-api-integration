# Wrike Basic API Integration (Backend)

## Introduction

**Wrike Basic API Integration** is a backend solution to integrate with Wrike's API. It provides a lightweight and efficient way to interact with Wrike's resources, such as tasks, projects, and folders, through RESTful API calls. This project is designed for developers looking to build automation and programmatic workflows.

## Features

- OAuth2 authentication with Wrike.
- Endpoints for fetching and managing tasks, projects, and folders.
- Simple configuration for rapid backend integration.
- Scalable and customizable for advanced use cases.

---

## Wrike API Credentials

Set the following environment variables in your `.env` file or directly in your environment:

```plaintext
# Redirect URI configured in the Wrike Developer Portal
WRIKE_API_TOKEN=your-api-token
```

---

## Project Setup

This guide outlines the steps to set up and run the server for this project.

### Prerequisites

- Node.js (v14.x or higher)
- npm (v6.x or higher)

### Steps to Run the Server

1. **Clone the repository**:
   ```bash
   git clone https://github.com/hovnarek90/wrike-basic-api-integration
   cd wrike-basic-api-integration
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Navigate to the server directory**:
   ```bash
   cd server
   ```

4. **Build the project (if required)**:
   If the project uses TypeScript or another build tool, ensure you build the source code:
   ```bash
   npm run build
   ```

5. **Start the server**:
   ```bash
   node dist/index.js
   ```

### Notes

- Ensure the `dist/index.js` file exists. If it doesn't, verify that the build process has been completed successfully.
- If you encounter issues, check for environment-specific configurations or logs for more details.

---


