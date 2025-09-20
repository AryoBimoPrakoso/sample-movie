import clientPromise from "@/app/lib/data";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("sample_mflix");

    const movies = await db.collection("embedded_movies").find({ poster: { $exists: true } }).limit(20).toArray();

    // cek validasi poster
    const validMovies = [];
    for (const movie of movies) {
      try {
        const res = await fetch(movie.poster, { method: "HEAD" }); // HEAD lebih cepat dari GET
        if (res.ok) {
          validMovies.push(movie);
        }
      } catch (err) {
        // skip kalau error
      }
    }

    return new Response(JSON.stringify(validMovies.slice(0, 10)), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("MongoDB Error:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
