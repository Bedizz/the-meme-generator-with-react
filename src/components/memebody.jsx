import React ,{ useEffect , useState } from 'react'

const memebody = () => {
    //const for each function
    // where we store the meme data
    const [meme, setMeme] = useState([])
    const [loading, setLoading] = useState(true)
    const [memeImage, setMemeImage] = useState({
      topText: "",
      bottomText:"",
      image: "http://i.imgflip.com/1bij.jpg",
    });

    // fetching data from the api
    //
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


  // meme random generator as a function 
    function getMemeImage() {
        if (meme.length === 0) {
            return "http://i.imgflip.com/1bij.jpg"; // default image if no memes are loaded
        }

        let meme1 = meme[Math.floor(Math.random() * meme.length)];
        return meme1.url;
    }

  // --------------------
    // a function to catch the inputs (2 inputs 1 for top text and 1 for bottom text)
    // a function to change the imgs (random meme button)

  function changeMeme(e) {
    const { name, value } = e.target;
    setMemeImage((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setMemeImage((prevState) => ({
      ...prevState,
      image: getMemeImage(),
    }));
  }




  return (
    <main>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input"
          placeholder="Meme top text"
          name="topText"
          value={memeImage.topText}
          onChange={changeMeme}
        />
        <input
          type="text"
          className="form-input"
          placeholder="Meme bottom text"
          name="bottomText"
          value={memeImage.bottomText}
          onChange={changeMeme}
        />
        <button className="form-button">Generate Meme</button>
      </form>
      <div className="meme">
        <img src={memeImage.image} alt="meme" className="meme--image" />
        <h1 className="meme--text top">{memeImage.topText}</h1>
        <h1 className="meme--text bottom">{memeImage.bottomText}</h1>
      </div>
    </main>
  );
}

export default memebody