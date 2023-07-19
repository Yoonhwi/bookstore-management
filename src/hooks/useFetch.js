const useFetch = (url, method) => {
  return fetch(url, {
    method,
  }).then((res) => res.json());
};
