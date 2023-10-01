import React from "react";
import homeStore from "../stores/homeStore";
import Header from "../components/Header";
import {Link} from 'react-router-dom'
import ListItem from "../components/ListItem";

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
            <Header/>
            <header className="home-search">
                <div className= "width"> 
                    <h2>search for a coin</h2>
                    <input type='text' value={store.query} onChange={store.setQuery}/>
                </div>
            </header>
            <div className="home-cryptos">
                <div className="width">
                    <h2>trending coins</h2>
                    <div className="home-cryptos-list">
                    {store.coins.map(coin =>{
                    return <ListItem key={coin.id} coin={coin}/>;  
                    })}
                    </div>
                </div>
            </div> 
        </div>
    );
  }
  