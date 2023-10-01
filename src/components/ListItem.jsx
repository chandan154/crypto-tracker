import React from 'react'
import { Link } from 'react-router-dom'

export default function ListItem({coin}) {
  return (
    <div className='home-crypto'>
        <Link to={`/${coin.id}`} >
            <span className='home-crypto-image'><img src={coin.image}/></span>
            <span className='home-crypto-name'>{coin.name} </span>
            {coin.priceBTC && (<span className='home-crypto-price'>
                <span className='home-crypto-btc'>
                    <img src="/bitcoin.webp"/>
                        {coin.priceBTC} BTC</span>  
                <span className='home-crypto-inr'>({coin.priceINR} INR)</span>
            </span>
            )}
        </Link>  
    </div>
  )
}
