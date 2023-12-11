import "../styles/Content.scss";
import { useState, useEffect } from "react"

function Content() {
    // create state for meme
    const [meme, setMeme] = useState({
        top: "",
        bottom: "",
        img: "/public/img/20180703190744-rollsafe-meme.webp"
    })


    // function that set state considering input user 
    function onInputText(event) {

        // event get input element
        setMeme(prevText => {
            return {
                // spread operator for get old values
                ...prevText,

                // use computed properties for set new value 
                [event.target.name]: event.target.value,
            }
        })
    }

    // img state

    const [memeImage, setMemeImage] = useState([])

    // use effect for api call and set image meme / avoid side effects with this hook cause of api call

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setMemeImage(data.data.memes))
    }, [])


    // function for get 1 single random image a setimage on meme state 

    function getMemeImage() {
        const imgArray = memeImage;

        // generate random number
        const randomNumber = Math.floor(Math.random() * imgArray.length);

        // use random number for get 1 img from array
        const url = imgArray[randomNumber].url

        // set select img as img for state
        setMeme(prevObj => {
            return {
                ...prevObj,
                img: url
            }
        })
    }

    return (
        <main className="flex-grow-1 my-2">

            <div className="container">
                <div className="form text-center pt-3">
                    <div className="input-container">
                        <label htmlFor="top-text">Top Text</label>
                        <input className="mx-2" type="text" id="top-text" name="top" onChange={onInputText} value={meme.top} />

                        <label htmlFor="bottom-text">Bottom Text</label>
                        <input type="text" className="mx-2" id="bottom-text" name="bottom" onChange={onInputText} value={meme.bottom} />
                    </div>
                    <button className="btn my-button mt-4" onClick={getMemeImage}>Generate Meme</button>
                </div>
                <div className="meme-container mt-5 text-center position-relative">
                    <img className="meme-img" src={meme.img} alt="" />
                    <p className="top">{meme.top}</p>
                    <p className="bottom">{meme.bottom}</p>
                </div>
            </div>
        </main>
    )
}

export default Content