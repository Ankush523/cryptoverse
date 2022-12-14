import React from 'react'
import { Link } from 'react-router-dom'
import { TrendingDown, TrendingUp } from '../icons/icons'
import { currencyFormat } from '../utils'

const Coin = ({coin}) => {
  return (
    <Link to={`/coin/${coin.id}`}>
    <div className='grid grid-cols-3 sm:grid-cols-6 font-light mb-3 p-4 rounded border-gray-600 border-2 hover:border-blue-600'>
        <div className='flex items-center gap-1 w-full'>
            <img className='w-6' src={coin.image} alt={coin.name} />
            <p>{coin.name}</p>
            <span className='text-xs'>({coin.symbol})</span>
        </div>
        <span className='w-full'>{currencyFormat(coin.current_price)}</span>

            <span className={`flex gap-1 ${coin.price_change_percentage_1h_in_currency < 0 ? 'text-red-600' : 'text-green-500'}`}>
            {coin.price_change_percentage_1h_in_currency < 0 ? <TrendingDown/> : <TrendingUp/>}
            {coin.price_change_percentage_1h_in_currency.toFixed(2)}</span>
            
        <span className={`flex gap-1 ${coin.price_change_percentage_24h_in_currency < 0 ? 'text-red-600' : 'text-green-500'}`}>
            {coin.price_change_percentage_24h_in_currency < 0 ? <TrendingDown/> : <TrendingUp/>}
            {coin.price_change_percentage_24h_in_currency.toFixed(2)}</span>


            <span className={`flex gap-1 ${coin.price_change_percentage_7d_in_currency < 0 ? 'text-red-600' : 'text-green-500'}`}>
            {coin.price_change_percentage_7d_in_currency < 0 ? <TrendingDown/> : <TrendingUp/>}
            {coin.price_change_percentage_7d_in_currency.toFixed(2)}</span>
        <span>
          <div className='hidden sm:block'>
                <span>{currencyFormat(coin.market_cap)}</span>
          </div>
        </span>
    </div>
    </Link>
  )
}

export default Coin