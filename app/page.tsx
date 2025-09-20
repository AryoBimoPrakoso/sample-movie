import Image from "next/image";

interface Icomments {
  _id: string;
  name: string;
  email: string;
  movie_id: string;
  text: string;
  date: string;
}

async function getComments(): Promise<Icomments[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`, {
    cache: "no-store", // Opsional, nonaktifkan cachae untuk data dinamis
  });
  if (!res.ok) throw new Error("Failed to fetch projects");
  return res.json();
}

export default async function Home() {
  const comments = await getComments();
  return (
    <>
      <h1>Coba nih</h1>
      {comments.map((c) => (
        <div key={c._id}>
          <h2>{c.name}</h2>
        </div>
      ))}
    </>
  );
}
