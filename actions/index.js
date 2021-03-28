import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export const getPosts = (url) => {
  return fetcher(url);
};

//Not used method
export const useGetPosts = ({ offset, sort }, initialData) => {
  return useSWR(
    `
    /api/posts?offset=${offset || 0}&date=${sort.asc ? "asc" : "desc"}`,
    fetcher,
    { initialData }
  );
};
