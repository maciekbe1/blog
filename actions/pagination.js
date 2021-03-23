import { useSWRInfinite } from "swr";
import { getPosts } from "actions";

export const useGetPostsPages = () => {
  const result = useSWRInfinite((index, previousPageData) => {
    if (index === 0) {
      return `/api/posts`;
    }

    if (!previousPageData.length) {
      return null;
    }

    return `/api/posts?offset=${index * 3}
    }`;
  }, getPosts);

  let hitEnd = false;
  const { data } = result;

  if (data) {
    hitEnd = data[data.length - 1].length === 0;
  }

  return { ...result, hitEnd };
};
