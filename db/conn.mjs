import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

//create connection string
let connectionString = process.env.atlasURI || '';

//create client
const client = new MongoClient(connectionString);

//variable to hold connection info
let conn;

try {
    //try to connect to client
    conn = await client.connect();
    client.connect()
    console.log(`MongoDB is connected`);
} catch (err) {
    console.error(err);
}

//what goes in the '' is what database we are linking***
let db = conn.db('sample_training');

export default db;
