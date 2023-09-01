import PostCard from "./PostCard";
import FilterSearch from "../../home/FilterSearch";
import "./styles/PostList.css";

export default function PostList() {
  return (
    <div className="containerpostList">
      <div className="filtersearch-postList">
        <FilterSearch />
      </div>
      <div className="postList">
        <div className="post-filter">
            <PostCard />
        </div>
      </div>
    </div>
  );
}
