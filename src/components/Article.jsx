import '../index.css'
function Article({post,heading,id}) {  
  return (
  <div className="singleArticle"> 
      <h1><a className= 'heading' href={`/Article/${id}`}>{heading}</a></h1>
      <p>{post}</p>
  </div>
  );
}

export default Article;