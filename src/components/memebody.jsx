import React,{ useEffect, useState } from 'react'

const memebody = () => {
    //const for each function
    // where we store the meme data
    const [meme, setMeme] = useState([])
    // where we check if the data is loaded or not
    const [loading, setLoading] = useState(true)

    // where and how we store the inputs
    const [memeImage, setmemeImage] = useState({
        topText: "",
        bottomText: "",
        image: "http://i.imgflip.com/1bij.jpg",
      });
// --------------------------------------------------------------------------------------
    // fetching data from the api
    const getMemeAPI = async () => {
        try {
            setLoading(false) // loading stage
            const res = await fetch('https://api.imgflip.com/get_memes')
            const data = await res.json()
            setMeme(data.data.memes)
            console.log(data.data.memes)
            
        } catch (error) { //// error stage

            console.log("An error occured during fetching data",error)
            
        }
        

    }
    // we call the getMemeAPI function in the useEffect
    useEffect(() => {
        getMemeAPI()
    }, [])

    
    
    
    // --------------------
    // meme random generator as a function 
    // --------------------
    // a function to catch the inputs (2 inputs 1 for top text and 1 for bottom text)
    // a function to change the imgs (random meme button)



  return (
    <form >
        <div>
        <div className='input-container'>
        <p>Top Text<input type="text" className='input-text' name='top-input' placeholder='write your text here..' /></p>
        <p>Bottom Text<input type="text" className='input-text' ame='bottom-input' placeholder='write your text here..' /></p>
        </div>
        <div className='meme-container'>
            
        </div>
        </div>
    </form>
  )
}

export default memebody