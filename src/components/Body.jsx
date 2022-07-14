import '../index.css'
import ArticleList from './ArticleList';
import SideBar from './SideBar';
function Body() {
  return <div className="container body">
    <ArticleList/>
    <SideBar/>
  </div>;
}

export default Body;
