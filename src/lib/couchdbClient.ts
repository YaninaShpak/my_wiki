import axios from "axios";

const COUCHDB_URL = process.env.COUCHDB_URL as string;
const COUCHDB_USERNAME = process.env.COUCHDB_USERNAME as string;
const COUCHDB_PASSWORD = process.env.COUCHDB_PASSWORD as string;

export const couchdb = axios.create({
  baseURL: COUCHDB_URL,
  auth: {
    username: COUCHDB_USERNAME,
    password: COUCHDB_PASSWORD,
  },
});