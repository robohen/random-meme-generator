import React from "react"
import tf from "C:\Users\chick\Downloads\tf.png"

 export default function Header(){
    return(
        <div>
            <header><img src = {tf} className="trollface"/>
            <span className="header--title">React Course-Project 3</span></header>
            <span className="header--project">Meme Generator</span>
        </div>
    )
}
