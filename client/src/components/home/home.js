import React from 'react'
import './home.css'

const Home = () => {
    return (
        <div className="homeBackground">
            <div>
                <h1 className="homeTitle">
                    "Countries Around the Globe"
                </h1>
            </div>
            <div>
                <form action="http://localhost:3000/countries/" className="formButton">
                    <input className="startButton" type="submit" value="Start" />
                </form>
            </div>
        </div>
    )
}

export default Home
