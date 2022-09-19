import useAxios from "../hooks/useAxios"
import Skeleton from "./Skeleton";
import TrendingCoin from "./TrendingCoin";
import "../images/flames.png"
const Trending = () => {
  const { response, loading } = useAxios('search/trending');

  if(loading) {
    return (
      <div className="wrapper-container mt-8">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
      </div>
    )
  }

  return (
    <div className="mt-8 shadow-xl rounded-md p-5">
      <div className="flex flex-row items-center gap-2">
      <img src="https://s2.coinmarketcap.com/static/cloud/img/TrendingIcon.png?_=be74bf6"/>
      <h1 className="text-3xl ">Trending Tokens</h1>
      </div>
      <br/>
      {response && response.coins.map(coin => <TrendingCoin key={coin.item.coin_id} coin={coin.item} />)}
    </div>
  )
}

export default Trending