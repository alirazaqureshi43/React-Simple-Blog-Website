import articleData from "../data/articledata";
import '../index.css'
function SideBar() {
  return <div className="sideBar">
      {articleData.map((article) => (
          <ul>
              <li>{article.heading}</li>
          </ul>
      ))
    }
  </div>
}

export default SideBar;
