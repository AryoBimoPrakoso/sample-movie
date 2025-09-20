import { MongoClient } from "mongodb";

let client;
let clientPromise;

if (!process.env.MONGODB_URL) {
  throw new Error("Please add your MongoDB URL to .env local");
}

if (process.env.NODE_ENV === "development") {
  // Mencegah multiple connetions di development
  if (!global._mongoClientPromise) {
    client =  new MongoClient(process.env.MONGODB_URL);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
    client = new MongoClient(process.env.MONGODB_URL);
    clientPromise = client.connect();
}

export default clientPromise;


