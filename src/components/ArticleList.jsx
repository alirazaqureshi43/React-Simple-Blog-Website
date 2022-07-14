import articleData from "../data/articledata";
import Article from "./Article";
import '../index.css'
function ArticleList() {

  return <div className="article" >
      {articleData.map((article) => (
         <Article id = {article.id}
          heading = {article.heading}
          post = {article.post}
          ></Article>
      )
      )}
  </div>;
}

export default ArticleList;
