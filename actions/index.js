import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export const getPosts = (url) => {
  return fetcher(url);
};

export const useGetPosts = ({ offset }, initialData) => {
  return useSWR(
    `
    /api/posts?offset=${offset || 0}`,
    fetcher,
    { initialData }
  );
};
