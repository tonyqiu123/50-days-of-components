
import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()


mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

async function getNotes() {
    const [rows] = await Pool.query("SELECT * FROM notes")
    return rows
}


const notes = await getNotes()
console.log(notes)