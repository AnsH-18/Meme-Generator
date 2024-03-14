import React, { useEffect } from "react";


export default function Meme(){

    const [input, setInput] = React.useState({
        input1: "",
        input2: "",
        img : "https://i.imgflip.com/28j0te.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])

    console.log(input)
    function handleInput(e){
        const {name, value} = e.target
        setInput(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

     useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
     }, [])    
     console.log(allMemes)
    function getNewMeme(){
        const randomNum = Math.floor(Math.random() * 100)
        setInput(prev => {
            return {
                ...prev,
                img: allMemes[randomNum].url
            }
        })
    }

    return (
        <div className="container">
            <div className="meme-input-container">
                <div className="input-cont">
                    <input onChange={handleInput} name="input1" type="text" placeholder="First "/>
                    <input onChange={handleInput} name="input2" type="text" placeholder="Second"/>
                </div>
                <button onClick={getNewMeme}>Get A New Meme</button>
            </div>
            <div className="img-container">
                <h1 className="top-inp">{input.input1}</h1>
                <h1 className="bottom-inp">{input.input2}</h1>
                <img className="meme-img" src= {input.img}></img>

            </div>
        </div>
    )
}