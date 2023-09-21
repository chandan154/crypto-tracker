import React from "react";
import homeStore from "../stores/homeStore";
import {Link} from 'react-router-dom'

// export default: This line exports the Home function 
//as the default export of the module. In JavaScript, 
//you can have multiple named exports from a module, 
//but there can only be one default export. 
//Default exports are often used when you want to 
//export the main or most commonly used part of a module.
export default function Home() {
    const store = homeStore()

    React.useEffect(() => {
        store.fetchCoins()
    }, [])
    return (
        <div >
            {store.coins.map(coin =>{
                return (
                    <div key={coin.id}>
                        <Link to={`/${coin.id}`} >
                            {coin.name}    
                        </Link>  
                    </div>
                )
            })}
        </div>
    )
  }
  