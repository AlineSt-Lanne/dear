import HeaderHome from "../components/home/HeaderHome";
import ModalHome from "../components/home/ModalHome";
import FooterHome from "../components/home/FooterHome";
import "./styles/Home.css";
import PostCard from "../components/post/CardPost/PostCard";
import PostCard2 from "../components/post/CardPost/PostCard2";
import PostCard3 from "../components/post/CardPost/PostCard3";
import FilterSearch from "../components/home/FilterSearch";

export default function Home() {
  return (
    <div className="Home-container">
      <HeaderHome />
      <div className="filtersearch-postList">
        <FilterSearch />
      </div>
      <div className="Home-PostCards">
        <PostCard/>
        <PostCard2/>
        <PostCard3/>
      </div>
      <div className="Home-Modal">
        <ModalHome />
      </div>
      <FooterHome />
    </div>
  );
}
