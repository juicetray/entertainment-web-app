import React from "react"
import "../styles/Home.css"
import Button from "../components/Button"

const Home = () => {
  return (
    <div className="home-container">Welcome to the home page dude!
    <Button>Login</Button>
    <Button>Register</Button>
    </div>
  )
}

export default Home