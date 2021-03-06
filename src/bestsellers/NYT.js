const API_KEY = "73b19491b83909c7e07016f4bb4644f9:2:60667290";
const QUERY_TYPE = "hardcover-fiction";
const API_STEM = "https://api.nytimes.com/svc/books/v3/lists";
const ENDPOINT = `${API_STEM}/${QUERY_TYPE}?response-format=json&api-key=${API_KEY}`;

function fetchBooks() {
  return fetch(ENDPOINT)
    .then(response => response.json())
    .then(responseJson => {
      return responseJson.results.books;
    })
    .catch(error => {
      console.error(error);
    });
}

export default { fetchBooks: fetchBooks };
