const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./database.db')

db.serialize(() => {
  db.run(`
  CREATE TABLE account (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    money INTEGER
  )
`);
})

db.close()