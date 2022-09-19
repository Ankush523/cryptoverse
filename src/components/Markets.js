import React from 'react'
import useAxios from '../hooks/useAxios'
import Coin from './Coin'
import Skeleton from './Skeleton'

const Markets = () => {

    const {response,loading} = useAxios('coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d')

    if(loading)
    {
        return (
            <div className='wrapper-constainer mt-8'>
                <Skeleton className="h-8 w-32"/>
                <Skeleton className="h-8 w-full mt-2 "/>
                <Skeleton className="h-8 w-full mt-2 "/>
                <Skeleton className="h-8 w-full mt-2 "/>
                <Skeleton className="h-8 w-full mt-2 "/>
            </div>
        )
    }

  return (
    <section className='mt-8 shadow-xl border-gray-200 border-2 rounded-md p-5'>
        <h1 className='text-3xl mb-2 pb-[30px]'>Today's Cryptocurrency Prices by Market Cap</h1>
        <div className='grid grid-cols-6 sm:grid-cols-6 mb-3 font-bold text-[15px] mb-1 px-[20px]'>
            <h1>Name</h1>
            <h1>Price</h1>
            <div className='flex flex-row ml-[30px]'>
            <h1>1h %</h1>
            </div>
            <div className='flex flex-row ml-[30px]'>
            <h1>24h %</h1>
            </div>
            <div className='flex flex-row ml-[30px]'>
            <h1>7d %</h1>
            </div>
            <h1>Market Cap</h1>
        </div>
        {response && response.map(coin => <Coin key={coin.id} coin={coin}/>)}
    </section>
  )
}

export default Markets