import React from 'react'
import './App.css'

const Document = () => {

    return(
        <div>
            <h2>The Template</h2>
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vSya7ga0pf52F3SN9My86VKph0CtJ5OX2tc8dtGIqEacV4zckk1LmkYIsNuKQOcSitwpkEc5ouF77y1/pub?embedded=true"
            style={{width:"100%"}}
            id="doc"
            >
            </iframe>
        </div>
    )
}

export default Document