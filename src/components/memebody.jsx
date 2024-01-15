import React,{ useEffect, useState } from 'react'

const memebody = () => {
    //const for each function
    const [meme, setMeme] = useState([])

    // fetching data from the api
    const getMemeAPI = async () => {
        try {
            const res = await fetch('https://api.imgflip.com/get_memes')
            const data = await res.json()
            setMeme(data.data.memes)
            console.log(data.data.memes)
            
        } catch (error) {
            console.log("An error occured during fetching data",error)
            
        }
        

    }
    // we call the getMemeAPI function in the useEffect
    useEffect(() => {
        getMemeAPI()
    }, [])

    // loading stage
    // error stage
    // useeffect part
    // --------------------
    // meme random generator as a function 
    // --------------------
    // a function to catch the inputs (2 inputs 1 for top text and 1 for bottom text)
    // a function to change the imgs (random meme button)



  return (
    <div>memebody</div>
  )
}

export default memebody