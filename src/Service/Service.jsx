import React, { useEffect, useState } from 'react';
import servicecss from './Service.module.css';
import mern from './mern.png';
import wave from '../About_us/wave.png';
import axios from 'axios';

function Service() {
  const [contentArray, setContentArray] = useState([]);
  const [selectedBanner, setSelectedBanner] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://gtm-backend.onrender.com/api/service/get");
        setContentArray(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  
  const handleBannerClick = (bannerIndex) => {
    setSelectedBanner(bannerIndex);
  };

  return (
    <div className={servicecss.services}>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <div className={servicecss.service}>
            <img className={servicecss.serviceimage} src={contentArray[selectedBanner].avatar} alt="" />
            <h1 className={servicecss.servicetitle}>{contentArray[selectedBanner].name}</h1>
            <h3 className={servicecss.subtitle}>Home/Service</h3>
            <img className={servicecss.wave} src={wave} alt="" />
          </div>
          <div className={servicecss.type}>
            <h1 className={servicecss.motive}>Boost Your Business With <br/> The Power Of Our Best Service</h1>
            <h1 className={servicecss.defineservice}>{contentArray[selectedBanner].name}</h1>
            <h1 className={servicecss.types}>Services</h1>
            {contentArray.map((content, index) => (
              <div
                key={index}
                className={servicecss.banner}
                onClick={() => handleBannerClick(index)}
              >
                {content.name}
              </div>
            ))}
          </div>
          <div className={servicecss.content}>
            {selectedBanner !== null && (
              <div className={servicecss.bannerContent}>
                <h2>{contentArray[selectedBanner].name}</h2>
                <p>{contentArray[selectedBanner].description}</p>
                {/* Render other content properties as needed */}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Service;
