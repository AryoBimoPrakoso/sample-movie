import React from "react";

interface Imovies {
  _id: string;
  title: string;
  plot: string;
  genres: string[];
  poster?: string;
}

async function getMovies(): Promise<Imovies[]> {
  const resMovie = await fetch("http://localhost:3000/api/movies", {
    cache: "no-store",
  });
  if (!resMovie.ok) throw new Error("Failed to fetch movies");
  return resMovie.json();
}

function shufflePoster(arr: any[]) {
  return arr.sort(() => Math.random() - 0.5);
}

export default async function posterMovies() {
  const movies = shufflePoster(await getMovies());
  return (
    <div className="grid grid-cols-5 grid-rows-2 gap-4">
      {movies
        .filter((m) => m.poster)
        .map((m) => (
          <div key={m._id} className="p-2 border rounded">
            <h1 className="font-bold text-sm py-2">{m.title}</h1>
            <img src={m.poster} alt={m.title} className="w-full h-56" />
            <div className="flex flex-wrap gap-1 mt-2 pb-4">
              {m.genres.map((genre, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-200 px-2 py-1 rounded"
                >
                  {genre}
                </span>
              ))}
            </div>
            <button className="py-1 px-4 border rounded-xl">More!</button>
          </div>
        ))}
    </div>
  );
}
