export function fetchNews() {
  return fetch("/api/news", {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((err) => err);
}
export function postNews(data) {
  console.log(data);

  return fetch("/api/news/", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => err);
}
