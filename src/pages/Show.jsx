import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'
import showStore from "../stores/showStore";
import Header from "../components/Header";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];
export default function Show() {

    const store = showStore()
    console.log(store);
    // it is a way to get the parametr from the url
    const params = useParams()
    React.useEffect(() => {
        store.fetchData(params.id)
        return () => {
            store.reset();
        }
    }, [])

    if(!store.dataRes.data) return <> </>; 

    return (
        <div>
            <Header back/>
            {store.dataRes.data && (<> 
                <header className='show-header'>
                <img src={store.dataRes.data.image.large} />
                <h2> 
                    {store.dataRes.data.name} ({store.dataRes.data.symbol})
                </h2>
            </header>
            <div className='width'>
                <div className='show-graph'>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                    data={store.graphData}
                    margin={{
                        top: 10,
                        right: 40,
                        left: 20,
                        bottom: 20,
                    }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Date"/>
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="Price" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
                </ResponsiveContainer>
                </div>
            </div>
            <div className='show-details'>
                <div className='width'>
                <h2>Details of the coin</h2>
                <div  className='show-detail-data'>
                    <h3>Market cap data</h3>
                    <span>{store.dataRes.data.market_cap_rank}</span>
                </div>
                
                <div className='show-detail-data'>
                    <h3>24 hr high</h3>
                    <span>rs {store.dataRes.data.market_data.high_24h.inr}</span>
                </div>
                <div className='show-detail-data'>
                    <h3>24 hr low</h3>
                    <span>rs {store.dataRes.data.market_data.low_24h.inr}</span>
                </div>
                <div className='show-detail-data'>
                    <h3>circulating supply</h3>
                    <span>{store.dataRes.data.market_data.circulating_supply}</span>
                </div>
                <div className='show-detail-data'>
                    <h3>Current Price</h3>
                    <span>rs {store.dataRes.data.market_data.current_price.inr}</span>
                </div>
                <div className='show-detail-data'>
                    <h3>1 yr Change</h3>
                    <span>{store.dataRes.data.market_data.price_change_percentage_1y.toFixed(2)}%</span>
                </div>
                </div>
            </div>
            </>
            )}
            
        </div>
     );
}
