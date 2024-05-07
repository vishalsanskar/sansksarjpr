import React, { useState, useEffect } from 'react';

const HorizontalTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const handleTabChange = (event) => {
    setActiveTab(parseInt(event.target.value, 10));
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Initial check

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="horizontal-tabs">
      {isMobile ? (
        <select value={activeTab} onChange={handleTabChange}>
          {tabs.map((tab, index) => (
            <option key={index} value={index}>
              {tab.title}
            </option>
          ))}
        </select>
      ) : (
        <div className="tab-list">
          <div className='tab-list-data'>
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`tab ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </div>
          ))}
          </div>
          <div className='school-detail-box'>
            <h1>Sanskar School</h1>
            <h5>International Curriculum</h5>
            <p>Flagship Campus of Pathways Schools. Consistently Ranked #1 Top International Day cum Boarding School in Delhi & Gurgaon.</p>
            <ul>
              <li>117-121, Vishwamitra Marg, Hanuman Nagar Ext., Sirsi Road, Jaipur - 302012</li>
              <li>info@sanskarjaipur.com</li>
              <li> +91-0141-2246189 / +91-0141-2357844 / +91-0141-2245602</li>

            </ul>



            </div>
        </div>
      )}
      <div className="tab-content">
        {tabs[activeTab].content()}
      </div>
    </div>
  );
};

export default HorizontalTabs;
