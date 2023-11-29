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
            console.log(e);
        },
    }),
]);

// TODO: close
async function closeDatabase(db) {
    await db.close();
}

db.on("connect", (data) => {
    console.log(data);
});

db.on("trace", (data) => {
    console.log(data);
});

async function quertyProdList( ) {
    return await db.all("SELECT * FROM prodList");
}

app.get("/prodList", async (req, res) => {
    console.log(`requisition recived on '/prodList' from: ${req}`);
    await quertyProdList().then(result => {
        console.log(`result ${result}`);
        res.json(result);
    });
});

app.listen(port, () => {
	console.log(`Servidor rodando em http://localhost:${port}`);
});