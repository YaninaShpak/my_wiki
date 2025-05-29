import axios from "axios";

const COUCHDB_URL = process.env.COUCHDB_URL || "http://127.0.0.1:5984";
const COUCHDB_USERNAME = process.env.COUCHDB_USERNAME || "admin";
const COUCHDB_PASSWORD = process.env.COUCHDB_PASSWORD || "password";

export const couchdb = axios.create({
  baseURL: COUCHDB_URL,
  auth: {
    username: COUCHDB_USERNAME,
    password: COUCHDB_PASSWORD,
  },
});