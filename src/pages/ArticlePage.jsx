import Header from "../components/Header";
import Footer from "../components/Footer";
import Article from "../components/Article";
import { useParams } from "react-router-dom";
import {useState, useEffect} from 'react'
import ArticleList from "../components/ArticleList";
function ArticlePage({post, heading}) {

  const {id} = useParams()
  const [article,setArticle] = useState()

  useEffect(() => {
    let article = ArticleList.find ((article) = article.id === parseInt(id))

    if (article){
      setArticle(article)
    }
  },[])

  return (
      <>
      <Header/>
<Article/>
  <Footer/>
  </>
  );
}

export default ArticlePage;
