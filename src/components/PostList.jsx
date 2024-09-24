import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import { useContext, useEffect, useState } from "react";
import WelcomeMess from "./WelcomeMess";
import LoadingSpinner from "./LoadingSpinner";
const PostList = () => {
  const { postList, addinitialPosts } = useContext(PostListContext);
  const [fetching, setfetching] = useState(false);

  useEffect(() => {
    if (postList.length === 0) {
      // Only fetch if the list is empty
      setfetching(true);
      const controller = new AbortController();
      const signal = controller.signal;

      fetch("https://dummyjson.com/posts", { signal })
        .then((res) => res.json())
        .then((data) => {
          addinitialPosts([...data.posts]); // Set fetched posts directly
          setfetching(false);
        });

      return () => {
        console.log("CleanUp has been called");
        controller.abort();
      };
    }
  }, [postList, addinitialPosts]); // Add postList as a dependency

  const handelClick = () => {};
  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && (
        <WelcomeMess onGetPostClick={handelClick} />
      )}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};
export default PostList;
