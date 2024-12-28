import axios from "axios";
import * as fs from "fs";
import * as dotenv from "dotenv";

dotenv.config();

const API_TOKEN = process.env.WRIKE_API_TOKEN;
const API_URL = "https://www.wrike.com/api/v4/tasks";

if (!API_TOKEN) {
  console.error("Please provide a Wrike API token in the .env file.");
  process.exit(1);
}

interface WrikeTask {
  id: string;
  name: string;
  assignees: string[];
  status: string;
  collections: string[];
  created_at: string;
  updated_at: string;
  ticket_url: string;
}

async function fetchTasks(): Promise<void> {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
      
    });

    const tasks: WrikeTask[] = response.data.data.map((task: any) => ({
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
  } catch (error: any) {
    console.error("Error fetching tasks:", error.message || error);
  }
}

fetchTasks();
