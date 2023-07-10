import useSWR from "swr";

async function fetcher(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export default function HomePage() {
  const { data, isLoading, error } = useSWR("/api/random-character", fetcher);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <h1>
      {data.firstName} {data.lastName} is a {data.profession}
    </h1>
  );
}
