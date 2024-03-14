import React, { useState, useEffect } from 'react';
import './fetchData.css';
import axios from 'axios';

export default function FetchData1() {
    const [data, setData] = useState([]);
    //const [loading, setLoading] = useState(true);
    //const [error, setError] = useState(null);
    const [inrdata, setinrData] = useState([]);
    const [kaitcoin, setkaitcoin] = useState([]);
    const [usdt, setUsdt] = useState([]);


    useEffect(() => {



        coinList();
    }, []);

    async function coinList() {

        const datacoin = await axios.get("https://bxnzaopdi.kairaaexchange.com/api/v1/pair-list");

        const mydata = await datacoin.data;
        const inrdata1 = mydata.data.filter((data) => data.secondcurrency === 'inr');

        setinrData(inrdata1);




        const kaitcoin = mydata.data.filter((data) => data.secondcurrency === 'kaitcoin');
        setkaitcoin(kaitcoin);

        const usdt = mydata.data.filter((data) => data.secondcurrency === 'usdt')

        setUsdt(usdt);


    }



    {/*if (loading) {
    return <p>Loading...</p>;
     }

     if (error) {
     return <p>Error: {error.message}</p>;}   */}

    return (
        <>

            <div className='main'>
                <h1>Fetching INR Data from API</h1>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Low</th>
                            <th>High</th>
                            <th>Volume</th>
                            <th>Lastprice</th>
                            <th>FirstCurrency</th>
                            <th>SecondCurrency</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inrdata && inrdata.map((e) => (
                            <tr key={e.id}>
                                <td>{e.low}</td>
                                <td>{e.high}</td>

                                <td>{e.volume}</td>
                                <td>{e.lastprice}</td>
                                <td>{e.firstcurrency}</td>
                                <td>{e.secondcurrency}</td>
                            </tr>
                        ))}
                    </tbody>
                </table></div>
            <div>
                <h1>Fetching Kaitcoin Data from API</h1>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Low</th>
                            <th>High</th>
                            <th>Volume</th>
                            <th>Lastprice</th>
                            <th>FirstCurrency</th>
                            <th>SecondCurrency</th>
                        </tr>
                    </thead>
                    <tbody>
                        {kaitcoin && kaitcoin.map((e) => (
                            <tr key={e.id}>
                                <td>{e.low}</td>
                                <td>{e.high}</td>

                                <td>{e.volume}</td>
                                <td>{e.lastprice}</td>
                                <td>{e.firstcurrency}</td>
                                <td>{e.secondcurrency}</td>
                            </tr>
                        ))}
                    </tbody>
                </table></div>



            <div>
                <h1>Fetching USDT Data from API</h1>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Low</th>
                            <th>High</th>
                            <th>Volume</th>
                            <th>Lastprice</th>
                            <th>FirstCurrency</th>
                            <th>SecondCurrency</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usdt && usdt.map((e) => (
                            <tr key={e.id}>
                                <td>{e.low}</td>
                                <td>{e.high}</td>

                                <td>{e.volume}</td>
                                <td>{e.lastprice}</td>
                                <td>{e.firstcurrency}</td>
                                <td>{e.secondcurrency}</td>
                            </tr>
                        ))}
                    </tbody>
                </table></div>





        </>
    );
}


{/*

In App.js
---------

import FetchData from './fetchData1';

<>
<FetchData/>

</>
*/}

