// app/api/projects/route.js
import clientPromise from "../../lib/data";

export async function GET() {
  try {
    console.log("Connecting to MongoDB...");
    const client = await clientPromise;
    const db = client.db("sample_mflix");
    
    console.log("Fetching comments...");
    const comments = await db.collection("comments").find({}).limit(10).toArray();
    
    console.log("Comments fetched:", comments.length);
    return new Response(JSON.stringify(comments), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("MongoDB Error:", error);
    return new Response(JSON.stringify({ 
      error: error.message,
      details: "Check server console for more info" 
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}