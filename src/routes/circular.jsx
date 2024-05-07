import React from 'react'

import HorizontalTabs from '../components/HorizontalTabs';
import { Link } from 'react-router-dom';

function circular() {
  const tabs = [
    { title: 'IBDP BOOK LIST 2024-25', content: () => <div>
    
    <div className='cam-lower-sec'>
    <h1 className='title'>IBDP Book List 2024-45</h1>
    </div>

    <div className='syllubus-data'>
      <div className='syllubs-list'>
      <Link to="">IBDP Book List</Link>
      </div>
    </div>
    </div> },
    { title: 'IBDP BOOK LIST 2021-22', content: () => <div>

<div className='cam-lower-sec'>
    <h1 className='title'>IBDP Book List 2021-22</h1>
    </div>

    <div className='syllubus-data'>
      <div className='syllubs-list'>
      <Link to="">IBDP Book List</Link>
      </div>
    </div>

    </div> },
    { title: 'IBDP BOOK LIST 2020-21', content: () => <div>

<div className='cam-lower-sec'>
    <h1 className='title'>Annual Syllabus 2020-21</h1>
    </div>

    <div className='syllubus-data'>
      <div className='syllubs-list'>
      <Link to="">IBDP Book List</Link>
      </div>
    </div>

    </div> },
    { title: 'CAMBRIDGE BOOK LIST', content: () => <div>

<div className='cam-lower-sec'>
    <h1 className='title'>Cambridge Book List</h1>
    </div>

    <div className='syllubus-data'>
      <div className='syllubs-list'>
      <Link to="">Cambridge Book List</Link>
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

export default circular
