import React from 'react'

const GetStarted = (props) => {

    const handleStart = () => {
        props.onStart()
    }

    return(
        <div>
            <div className="ui raised segment" id="getstarted">
                <h1>Automatically Write HS Transition Survey</h1>
                <h3></h3>
                <button className="ui button" onClick={handleStart} style={{maxWidth:"150px",alignSelf:"center"}}>Get Started</button>
            </div>
            
        </div>
    )
}

export default GetStarted

//<iframe width="500" height="400" id="getstartedvid"src="https://www.youtube.com/embed/fRHKOof9MwY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>