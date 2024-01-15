import React from 'react'

const memebody = () => {
    //const for each function
    const [allMemes, setAllMemes] = useState([]);
    const [memeImage, setMemeImage] = useState({
      topText: "",
      bottomText:"",
      image: "http://i.imgflip.com/1bij.jpg",
    });

    // fetch data 
    // loading stage
    // error stage
    // useeffect part



















    // --------------------
    // meme random generator as a function 
  function getMemeImage() {
    let meme1 = allMemes;
    meme1 = meme1[Math.floor(Math.random() * meme1.length)];
    meme1 = meme1.url;
    return meme1;
    // console.log(results);
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
    <div>memebody</div>
  )
}

export default memebody