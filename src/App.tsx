import { useState } from 'react'
import './App.css'

type img = {
  id: number;
  xPosition: number;
}

function App() {
  const [count, setCount] = useState(0)
  const [images, setImages] = useState<img[]>([]);

  let snd = new Audio("Mika_Battle_Recovery_1.mp3")

  
  const handleReset = () => {
    setImages([]); // Clear all images
    setCount(0); // Reset count
  };

  const decreaseCount = () => {
    if (count === 0) return
    const updatedImages = images.slice(0, -1); // Remove the last image from the array
    setImages(updatedImages);
    setCount(count - 1);
  }

  const incrementClicked = () => {
    setCount(count + 1)

    const maxWidth = window.innerWidth - 100;
    const randomX = Math.random() * maxWidth;

    const newImage : img = {
      id: count, // Use the current count as a unique key
      xPosition: randomX
    };

    setImages([...images, newImage]); // Append new image to the array

    snd.play()
    snd.currentTime=0
  }

  return (
    <>
      <div className="image-container">
      <div className="mt-12 text-center">
        <h2 className="font-bold text-3xl">Mika has eaten</h2>
        <h1 className="font-bold text-20xl m-8">{count}</h1>
        <h2 className="font-bold text-3xl m-8">cakes</h2>
        <button 
          className="font-bold py-2 px-4 mx-2 rounded 
          bg-gradient-to-r from-pink-300 to-blue-200 hover:from-pink-400 hover:to-purple-300
          text-3xl w-14" 
          onClick={incrementClicked}>+</button>
        <button 
          className="font-bold py-2 px-4 mx-2 rounded 
          bg-gradient-to-r from-pink-300 to-blue-200 hover:from-pink-400 hover:to-purple-300
          text-3xl w-14" 
          onClick={decreaseCount}>-</button>
        <button 
          className="font-bold py-2 px-4 mx-2 rounded 
          bg-gradient-to-r from-pink-300 to-blue-200 hover:from-pink-400 hover:to-purple-300 
          text-3xl" 
          onClick={handleReset}>Reset</button>
      </div>
      {images.map((img) => (
        <img src="/mika-cake.png" alt="Cake" className="falling-image" 
        style={{ left: `${img.xPosition}px` }} />
      ))}
    </div>
    </>
  )
}

export default App
