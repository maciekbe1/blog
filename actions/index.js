import useSWR from "swr";
const fetcher = (url) => fetch(url).then((r) => r.json());

export const useGetPosts = (initialData) => {
  return useSWR(`/api/posts`, fetcher, { initialData });
};
