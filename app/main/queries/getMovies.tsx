export default async function getMovies(url: string) {
  const apiKey = process.env.NEXT_PUBLIC_ACCESS_KEY;
  const headers = {
    Authorization: `Bearer ${apiKey}`,
  };

  const res = await fetch(url, { headers });
  const data = await res.json();

  return data.results;
}
