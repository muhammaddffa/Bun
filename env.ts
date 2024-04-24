import { password } from "bun";

const database = {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_user,
    password: process.env.DATABASE_password,
    name: process.env.DATABASE_NAME,
}

console.log(database)