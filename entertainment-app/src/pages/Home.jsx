import React from "react"
import "../styles/Home.css"
import Button from "../components/Button"
import SearchBar from "../components/SearchBar"
import { useNavigate } from "react-router-dom"

const Home = () => {

    const isLoggedIn = localStorage.getItem("authToken");

    const navigate = useNavigate();

    const loginRedirect = () => {
        navigate("/login")
    }

    const registerRedirect = () => {
        navigate("/signup")
    }
  return (
    <div className="home-container">
        {isLoggedIn ? (
            <div>
                <SearchBar />
                <h1>Welcome back!</h1>
            </div>
        ) : (
        <div>
            <h1>Welcome to the home page!</h1>
            <Button onClick={loginRedirect}>Login</Button>
            <Button onClick={registerRedirect}>Register</Button>
        </div>
        )}
        </div>   
  )
}

export default Home