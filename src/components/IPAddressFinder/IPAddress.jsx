import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationMap from './LocationMap';

const IPAddress = () => {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [ipDetails, setIpDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://ipapi.co/json/')
      .then((res) => {
        setIpDetails(res.data);
        setLat(res.data.latitude);
        setLon(res.data.longitude);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching IP details:', err);
        setLoading(false);
      });
  }, []);


  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">IP Address Finder</h1>

      {loading ? <div className="p-4 text-center">Loading...</div> :
      <div className="bg-gray-100 p-4 rounded shadow mb-6">
        <h4 className="text-lg text-black font-semibold">What is my IP Address?</h4>
        <p className="text-xl text-black  mb-2">{ipDetails.ip}</p>

        <h4 className="text-lg text-black font-semibold">Approximate Location</h4>
        <p className="mb-2 text-black">{ipDetails.city}, {ipDetails.region}, {ipDetails.country_name}</p>

        <h4 className="text-lg text-black font-semibold">Internet Service Provider</h4>
        <p className='text-black'>{ipDetails.org}</p>
      </div>}

      {lat && lon && <LocationMap lat={lat} lon={lon} />}
    </div>
  );
};

export default IPAddress;
