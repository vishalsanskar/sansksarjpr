import React from 'react'

import HorizontalTabs from '../components/HorizontalTabs';
import { Link } from 'react-router-dom';

function pyppoi() {
  const tabs = [
    { title: '2022-23', content: () => <div>
    
    <div className='cam-lower-sec'>
    <h1 className='title'>Art Curriculum 2020-21</h1>
    </div>

    <div className='syllubus-data'>
      <div className='syllubs-list'>
      <Link to="">PYP Visual Art</Link>
      </div>
      <div className='syllubs-list'>
      <Link to="">PYP Music</Link>
      </div>
      <div className='syllubs-list'>
      <Link to="">PYP Dance</Link>
      </div>
    </div>
    </div> },
    { title: '2020-21', content: () => <div>

<div className='cam-lower-sec'>
    <h1 className='title'>Language Curriculum 2020-21</h1>
    </div>

    <div className='syllubus-data'>
    <div className='syllubs-list'>
      <Link to="">EY Curriculum Language</Link>
      </div>
      <div className='syllubs-list'>
      <Link to="">PYP Curriculum Language</Link>
      </div>
    </div>

    </div> },

  ];
  return (
    <div>
    <div className='ib-syllabus  '>
        {/* <Igcsedata/> */}
        <HorizontalTabs tabs={tabs} />
      </div>
    </div>
  )
}

export default pyppoi
