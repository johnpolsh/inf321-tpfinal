import sqlite3 from "sqlite3";
import { open } from "sqlite";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import express from "express";
import cors from "cors";

sqlite3.verbose();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const databaseDir = "./db";

const app = express();
app.use(cors());
const port = 3000;

const [db] = await Promise.all([
	open({
		filename: join(__dirname, databaseDir, "database.sqlite"),
		driver: sqlite3.cached.Database,
		callback: (e) => {
			console.error(`database opening error: ${e}`);
		},
	}),
]);

// TODO: close
async function closeDatabase(db) {
	await db.close();
}

db.on("connect", (data) => {
	console.info(`new db connection: ${data}`);
});

db.on("trace", (data) => {
	console.info(`new querty: ${data}`);
});

async function quertyProdList() {
	console.log("querty product list from db");
	return await db.all("SELECT * FROM prodList");
}

async function queryUsers() {
	console.log("query user list from db");
	return await db.all("SELECT * FROM users");
  }

app.get("/prodList", async (req, res) => {
	console.log(`requisition recived on '/prodList' from: ${req.socket.remoteAddress}`);
	await quertyProdList().then((result) => res.json(result));
});

app.get("/users", async (req, res) => {
	console.log(`requisition received on '/users' from: ${req.socket.remoteAddress}`);
	await queryUsers().then((result) => res.json(result));
  });

app.listen(port, () => {
	console.log(`Servidor rodando em http://localhost:${port}`);
});
