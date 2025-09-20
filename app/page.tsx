import Image from "next/image";
import PosterMovies from "./components/posterMovies";

// interface Icomments {
//   _id: string;
//   name: string;
//   email: string;
//   movie_id: string;
//   text: string;
//   date: string;
// }



// async function getComments(): Promise<Icomments[]> {
//   const res = await fetch(`http://localhost:3000/api/comments`, {
//     cache: "no-store", // Opsional, nonaktifkan cachae untuk data dinamis
//   });
//   if (!res.ok) throw new Error("Failed to fetch comments");
//   return res.json();
// }


export default async function Home() {
  // const comments = await getComments();
  return (
    <>
      <h1>INI DARI SAMPLE-MOVIES</h1>
      {/* {comments.map((c) => (
        <div key={c._id}>
          <h2>{c.name}</h2>
          <h3>{c.text}</h3>
        </div>
      ))} */}
      <PosterMovies/>
    </>
  );
}
