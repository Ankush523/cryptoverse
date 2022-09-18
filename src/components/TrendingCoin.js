import React from 'react'
import { Link } from 'react-router-dom'

const TrendingCoin = ({coin}) => {
  return (
    <Link to={`/coin/${coin.id}`}>
    <div className='font-light mb-2 p-2  rounded '>
        <div className='flex items-center gap-1'>
            <span className='font-semibold px-2'>{coin.score+1}.</span>
            <img className='w-6' src={coin.small} alt={coin.name }/>
            <p>{coin.name}</p>
            <small className='text-xs'>({coin.symbol})</small>
        </div>
    </div>
    </Link>
  )
}

export default TrendingCoin