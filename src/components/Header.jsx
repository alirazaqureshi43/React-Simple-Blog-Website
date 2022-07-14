import '../index.css'
function Header({title}) {
  return (
    <div>
    <div className="header">
    <ul>
     <li><a href='/'>{title}</a></li>
     <li><a href= '/Contact' >Contact</a></li>
     <li><a href='/About' >About</a></li>
   </ul> 
   </div>
   </div>

  )
}Header.defaultProps = {
  title: 'Guide Gem'
}
export default Header;
