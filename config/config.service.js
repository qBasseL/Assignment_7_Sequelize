import { config } from "dotenv";
import {resolve} from 'node:path'

const NODE_ENV = process.env.NODE_ENV

const envPath = {
    development: '.env.development',
    production: '.env.production'
}

console.log({NODE_ENV, path: envPath[NODE_ENV]});
config({path: resolve(`./config/${envPath[NODE_ENV]}`)})

export const PORT = parseInt(process.env.PORT)
export const DB_NAME = process.env.DB_NAME
export const DB_HOST = process.env.DB_HOST
export const DB_PASSWORD = process.env.DB_PASSWORD
export const DB_PORT = parseInt(process.env.DB_PORT)
export const DB_USER = process.env.DB_USER

