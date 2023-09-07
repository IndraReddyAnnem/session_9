import { useEffect, useState } from "react";
import Logo from "../assets/img/zygo.png"
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";


const Title =() => (
    <a href='/'>
  <img
  className='logo'
  alt='logo' 
  src={Logo} 
  />
  </a>
);

const Header = () =>{
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [title, setTitle] = useState("Zygo");

  const isOnline = useOnline();

    return(
    <div className='header'>
      <Title /> 
      <h1 className="header-txt">{title}</h1>
      <button className="header-btn" onClick={() =>{
            if(title == "Zygo"){
                setTitle("Food App");
            }else{
              setTitle("Zygo");
            }
             
          }}> Change Title </button> 

     <div className='nav-items'>
        <ul>
           
            <Link to="/" ><li>Home</li>  </Link>
           
            <Link to="/about"><li>About</li> </Link>
            
            <Link to="/contact"><li>Contact</li></Link>
            
            <Link to="/cart"><li>Cart</li></Link>

            <Link to="/instamart"><li>InstaMart</li></Link>
        </ul> 
        
     </div>
     <h1>{isOnline? "✅" :"🔴" }</h1>
        {isLoggedIn ?(
        <button onClick={() =>setIsLoggedIn(false)}>Logout</button>
        ) : (<button onClick={() =>setIsLoggedIn(true)}>Login</button>
        )}
    </div>
    );
  };

export default Header;

/**const [title, setTitle] = useState("Zygo");

  <h1>{title}</h1>

  <button className="header-btn" onClick={() => setTitle("Food App")}>Change Title</button>
          <button className="search-btn" onClick={() =>{
            if(title == "Zygo"){
                setTitle("Food App");
            }else{
                setSearchClicked("Zygo");
            }
             
          }}> search </button>
 useEffect(() =>{
   console.log("useEffect")
  },[])          
          
          */