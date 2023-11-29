import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
//const databasePath = path.resolve("./db/database.sqlite");
// const db = new sqlite3.Database(databasePath, sqlite3.OPEN_READWRITE, (err)=>{
//     if(err) return console.error(err.message);
// })
//console.log(databasePath)
sqlite3.verbose();

// const path = require('path');
// const databasePath = path.join(__dirname, 'caminho/relativo/meu_banco_de_dados.db');


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const databasePath = join(__dirname, 'db', 'database.sqlite');

const [database] = await Promise.all([
	open({
		filename: databasePath,
		driver: sqlite3.cached.Database,
		callback: (e) => {
			console.log(e);
		},
	}),
]);

database.on("connect", (data) => {
	console.log(data);
});

database.on("trace", (data) => {
	console.log(data);
});

await database.exec("CREATE TABLE prodList (col NAME)");
await database.exec('INSERT INTO prodList VALUES ("expresso")');
