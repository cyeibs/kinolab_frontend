export async function fetchGenres({ variable, localization = "ru-RU" }) {
  const options = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTlkYjEyOGYwZjM0NzVjNDQ3YWE3OWM1OGRlNjJkMCIsInN1YiI6IjY2MjlmNDZlZDRkNTA5MDBiYmUxYmFiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3pBkwW0L5m8Cn1j94QwXwsiztDaj5G2IHYserYphesg",
    },
  };

  const response = await fetch(
    `https://api.themoviedb.org/3/genre${variable}/list?language=${localization}`,
    options
  );

  const json = await response.json();
  if (response.status !== 200) {
    throw json;
  }
  return json.genres;
}
