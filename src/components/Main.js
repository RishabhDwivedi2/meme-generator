import React from "react";
import Data from "../Data";

export default function Main()
{
    // const [memeImage, setIsImportant] = React.useState();
    const [meme, mySet] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })
    const [allMemeImages, setAllMemeImages] = React.useState(Data)

    React.useEffect(() =>{
        console.log("helo there");
        fetch("https://i.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => console.log(data));
    })

    function clickMe()
    {
        const myArray = Data.data.memes
        const randomNumber = Math.floor(Math.random() * myArray.length)
        const url = myArray[randomNumber].url
        mySet(prevMeme => ({
            ...prevMeme, randomImage:url
        }))        
    }

    function handleChange(event)
    {
        const {name, value} = event.target
        mySet(prevState => ({
            ...prevState,
            [name]: value
        }))
 
    }

    function handleSubmit(event)
    {
        event.preventDefault()
    }

     return(
        <div className="form">
        <form onSubmit={handleSubmit}>
            <input name="topText" type="text" placeholder="Top text" value={meme.topText} onChange={handleChange}></input>
            <input name="bottomText" type="text" placeholder="Bottom text" value={meme.bottomText} onChange={handleChange}></input>
        <button onClick={clickMe}>Get your Meme Image</button>
        <div className="changes">
        <img src={meme.randomImage} className="meme-image"></img>
        <h2>{meme.topText}</h2>
        <h5>{meme.bottomText}</h5>
        </div>
        </form>

    </div>
    )
}