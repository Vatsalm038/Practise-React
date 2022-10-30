import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
    return(
        <div>
            <h1>This is the Home Page</h1>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
        </div>
    )
    
    



}
export default Home;