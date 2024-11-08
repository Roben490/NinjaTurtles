import React from 'react'

export interface TopCard {
    name: string | undefined,
    img: string | undefined
}

interface PropTopCard {
    props: TopCard[]
}



const ToppyCard = (props: PropTopCard): JSX.Element => {

    

  return (
    <div className='top-card' style={{background: props.props.length === 5 ? "red" : "yellow"}}>
    {props.props.map((topi) => 
    <div className='top-card-data'>
        <p>{topi.name}</p>
        <img src={topi.img} />
    </div>
    )}  
    </div>
  )
}

export default ToppyCard