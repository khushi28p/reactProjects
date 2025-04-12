import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Map from './Map';

const IPAddress = () => {
    const [lat, setLat] = useState(22.5726);
    const [lon, setLon] = useState(88.3832);
    const [ipDetails, setIpDetails] = useState([]);

    useEffect(() => {
        axios.get('https://ipapi.co/json/').then((res) => {
            setIpDetails(res.data);
            setLat(res.data.latitude);
            setLon(res.data.longitude);
        });
    }, []);
    console.log(lat, lon);

  return (
    <div>
      <h1>IP Address Finder</h1>
      <div>
        <div>
            <h4>What is my IP Address?</h4>
            <h1>{ipDetails.ip}</h1>
            <h4>Approximate Location</h4>
            <p>{ipDetails.city}, {ipDetails.region}, {ipDetails.country_name}.</p>
            <h4>Internet Service Provider</h4>
            <p>{ipDetails.org}</p>
        </div>
        <Map lat={lat} long={lon} />
      </div>
    </div>
  )
}

export default IPAddress
