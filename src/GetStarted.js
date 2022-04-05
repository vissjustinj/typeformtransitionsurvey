import React from 'react'

const GetStarted = (props) => {

    const handleStart = () => {
        props.onStart()
    }

    return(
        <div>
            <div className="ui raised segment" id="getstarted" title="Automatically Write HS Transition Survey">
                <h1>Automatically Write HS Transition Survey</h1>
                <h3>Write your report while you're interviewing your students about their post-high school plans</h3>
                <h3>Here's how it works:</h3>
                <iframe width="500" height="400" id="getstartedvid"src="https://www.youtube.com/embed/6JL2htnXq2g" title="Automatically Write HS Transition Survey" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <button className="ui button" onClick={handleStart} style={{maxWidth:"150px",alignSelf:"center"}}>Get Started</button>
            </div>
            
        </div>
    )
}

export default GetStarted

