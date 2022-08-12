import React from "react"
import memes from "../components/memesData"

export default function Meme(){
    
    
    
    
    
    
    
    
    const [memesData, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setAllMemes] = React.useState(memesData)
    
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then( res =>res.json())
        .then (data=> setAllMemes(data.data.memes))
    
    }, [allMemes])
    
    
    
    
    
    
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    function handleChange(event){
        const{name,value } =event.target
        setMeme(prevMeme=> ({
            ...prevMeme,
            [name]:value

        }))
    }
    
    return(
        <main>
            <div className="form">
                <label for="toprow"></label>
                
                <input className="form--inputs" 
                type="text" 
                id="toprow" 
                name="topText" 
                value={memesData.topText}
                onChange={handleChange}
                />
                <label 
                for="botrow">
                </label>
                <input className="form--inputs" 
                    type="text" 
                    id="botrow" 
                    name="bottomText" 
                    value= {memesValue.bottomText}
                    onChange={handleChange}
                />
                <botton className="form--button"
                 onClick={getMemeImage}
                >Get new meme image 🖼
                </botton>
            </div>
            <div>
            <img src = {memes.randomImage}  className="meme--image"/>
            <h2 className="meme--text top">{memes.topText}</h2>
            <h2 className="meme--text bottom">{memes.bottomText}</h2>
            </div>
            
        </main>
    )
}