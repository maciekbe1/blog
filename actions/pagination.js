import { useSWRInfinite } from "swr";
import { getPosts } from "actions";

export const useGetPostsPages = ({ sort }) => {
  const result = useSWRInfinite(
    (index, previousPageData) => {
      if (index === 0) {
        return `/api/posts?date=${sort.asc ? "asc" : "desc"}`;
      }

      if (!previousPageData.length) {
        return null;
      }

      return `/api/posts?offset=${index * 4}&date=${sort.asc ? "asc" : "desc"}`;
    },
    getPosts,
    { persistSize: true }
  );

  let hitEnd = false;
  const { data } = result;

  if (data) {
    hitEnd = data[data.length - 1].length === 0;
  }

  return { ...result, hitEnd };
};
