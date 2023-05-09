import { Link } from "react-router-dom";
import "./Home.scss"


const Home = () => {
  return (
    <div className='loading__screen'>
      <Link to="/Gallery">
       <div className='loading__info'>
        <img src="https://media3.giphy.com/media/3o7aD2d7hy9ktXNDP2/giphy.gif"   />
       </div>
      </Link>
    </div>
  )
}

export default Home