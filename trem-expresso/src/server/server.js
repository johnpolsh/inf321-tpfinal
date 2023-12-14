import sqlite3 from "sqlite3";
import { open } from "sqlite";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import fs from "fs";
import express from "express";
import multer from "multer";
import cors from "cors";
import bodyParser from "body-parser";

sqlite3.verbose();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const databaseDir = "./db";

const app = express();
app.use(cors());
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "../assets");
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});

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

async function addUser({
	email,
	password,
	street,
	cep,
	complemento,
	number,
	cpf,
}) {
	console.log("Adding new user to db");
	const querty = `INSERT INTO users (email, password, adress, cep, complement, phone, cpf) VALUES ('${email}', ${password}, ${street}, ${cep}, ${complemento}, ${number}, ${cpf})`;
	const result = await db.run(querty);
	return result;
}

app.get("/prodList", async (req, res) => {
	console.log(
		`requisition recived on '/prodList' from: ${req.socket.remoteAddress}`
	);
	await quertyProdList().then((result) => res.json(result));
});

app.get("/users", async (req, res) => {
	console.log(
		`requisition received on '/users' from: ${req.socket.remoteAddress}`
	);
	await queryUsers().then((result) => res.json(result));
});

app.get("/img/:imagem", (req, res) => {
	const name = req.params.imagem;
	const path = join(__dirname, "../assets", name);
	console.log(
		`requisition received on '/img:${path}' from: ${req.socket.remoteAddress}`
	);
	if (fs.existsSync(path)) {
		const img = fs.readFileSync(path);
		res.writeHead(200, { "Content-Type": "image/jpeg" });
		res.end(img, "binary");
	} else {
		res.status(404).send("image not found");
	}
});

app.post("/addUser", (req, res) => {
	const data = req.body;
	console.log(
		`requisition received on '/addUser' from: ${req.socket.remoteAddress}`
	);
	addUser(data).catch((reason) => console.log(reason));
	res.redirect("back");
});

app.listen(port, () => {
	console.log(`Servidor rodando em http://localhost:${port}`);
});
