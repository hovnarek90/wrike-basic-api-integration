"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();
const API_TOKEN = process.env.WRIKE_API_TOKEN;
const API_URL = "https://www.wrike.com/api/v4/tasks";
if (!API_TOKEN) {
    console.error("Please provide a Wrike API token in the .env file.");
    process.exit(1);
}
async function fetchTasks() {
    try {
        const response = await axios_1.default.get(API_URL, {
            headers: {
                Authorization: `Bearer ${API_TOKEN}`,
            },
        });
        const tasks = response.data.data.map((task) => ({
            id: task.id,
            name: task.title,
            assignees: task.responsibles,
            status: task.status,
            collections: task.parentIds,
            created_at: task.createdDate,
            updated_at: task.updatedDate,
            ticket_url: task.permalink,
        }));
        fs.writeFileSync("tasks.json", JSON.stringify(tasks, null, 2));
        console.log("Tasks saved to tasks.json");
    }
    catch (error) {
        console.error("Error fetching tasks:", error.message || error);
    }
}
fetchTasks();
