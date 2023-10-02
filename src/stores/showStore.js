import {create} from 'zustand'
import axios from 'axios'

const showStore = create((set) => ({
    graphData: [],
    dataRes: [],
    reset: () => {
        set({graphData: [], data: null});
    },
    fetchData: async (id) => {
        
        const [graphRes, dataRes,] = await Promise.all([
            axios.get(
                `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=inr&days=121&precision=1`
            ),
            axios.get(
                `https://api.coingecko.com/api/v3/coins/${id}?localization=false&market_data=true
                `),
        ]);
        
        
        
        const graphData = graphRes.data.prices.map((price) =>{
            const [timeSt, p] = price;
            const date = new Date(timeSt).toLocaleDateString('en-us');
            return {
                Date: date,
                Price: p,
            };
        });
        // console.log(dataRes);
        set({graphData});
        set({dataRes})
        console.log(dataRes);
        
    },
}));
export default showStore