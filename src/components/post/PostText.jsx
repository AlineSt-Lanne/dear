import "./styles/PostText.css";
import ButtonReturnGreen from "./ButtonReturnGreen";
import ButtonPublierPost from "./ButtonPublierPost";

function PostText() {
  return (
    <div className="div-post-texte">
      <div className="title-post-category">
        <ButtonReturnGreen />
        <h1>À quelle catégorie</h1>
        <h1>appartient ce post?</h1>
      </div>
      <div className="form-post-text">
        <select
          className="option-category-post"
          name="category"
          id="share-select"
          >
          <option value="0">--Choisir une catégorie--</option>
        </select>
      </div>
      <div className="bloc-texte-post">
        <h1 className="title-post-message"> Écrit ton message ici :</h1>
        <form className="form-post">
          <label className="postform" htmlFor="post">
            <textarea
              className="inputformpost"
              type="content"
              name="content"
              id="content"
              placeholder="Partagez un message, une question, une expérience, un doute... avec la communauté! La sexualité n'est plus un tabou! Ta publication est anonyme."
              />
          </label>
        </form>
      </div>
      <div className="button-publier-post">
        <ButtonPublierPost />
      </div>
    </div>
  );
}
export default PostText;
