const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./database.db')

db.serialize(() => {
  db.run("PRAGMA foreign_keys = ON");

  db.run(`
  CREATE TABLE IF NOT EXISTS account (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    money INTEGER,
    date TEXT
  )
`);

  db.run(`
    CREATE TABLE IF NOT EXISTS types (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      movement TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS transactions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      amount REAL,
      type_id INTEGER,
      date TEXT,
      FOREIGN KEY(type_id) REFERENCES types(id)
    )
  `);
})

db.close()