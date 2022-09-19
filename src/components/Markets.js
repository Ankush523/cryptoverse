import React from 'react'
import useAxios from '../hooks/useAxios'
import Coin from './Coin'
import Skeleton from './Skeleton'

const Markets = () => {

    const {response,loading} = useAxios('coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')

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
    <section className='mt-8'>
        <h1 className='text-3xl mb-2 pb-[30px]'>Today's Cryptocurrency Prices by Market Cap</h1>
        <div className='grid grid-cols-3 sm:grid-cols-4 font-bold text-[15px] mb-1 px-[20px]'>
            <h1>Name</h1>
            <h1>Price</h1>
            <h1>24h Change</h1>
            <h1>Market Cap</h1>
        </div>
        {response && response.map(coin => <Coin key={coin.id} coin={coin}/>)}
    </section>
  )
}

export default Markets