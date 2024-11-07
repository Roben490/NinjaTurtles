import { useState, useEffect } from 'react'

import './App.css'
import { Ninja } from './interface/Ninja';
import ToppyCard, { TopCard } from './ToppyCard';


function App() {
  const [data, setData] = useState<Ninja[]>([]);
  const [favorits, setFavorits] = useState<TopCard[]>([])

  useEffect(() => {
    fetch('/db.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
    }, []);

    const addToFavorits = (newF: TopCard)=>{
      console.log(4);
      const isBig: boolean | undefined = checkIfBigFromFive(favorits)
      const isKayam: boolean | undefined = checkIfKayam(newF, favorits)
      console.log(6);
      
      if (isBig && isKayam) {
        console.log(7);
        
        setFavorits([...favorits, newF]);
      }
}

const checkIfKayam = (newF: TopCard, favorits: TopCard[]) : boolean | undefined => {
  if (!favorits.includes(newF)) {
    console.log(5);
    return true
  }
}

const checkIfBigFromFive = (favorits: TopCard[]) : boolean | undefined => {
  if (favorits.length < 4) return true
}

  return (
    <>
    
    <div className='ninja-card-container'>
      {data.map((ninja) => 
      <div className='ninja-card'>
        <p>{ninja.name}</p>
        <img src={ninja.img}/>
        {ninja.pizzaToppings.map((pizzaTop) => 
          <button onClick={() => addToFavorits(pizzaTop)}>{pizzaTop.name}</button>
        )}
      </div>
  
)}
</div>
      <ToppyCard props={favorits} />
    </>
  )
}

export default App
