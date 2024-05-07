import React from 'react'
import HorizontalTabs from '../components/HorizontalTabs';
import { Link } from 'react-router-dom';

function syllabus() {
  const tabs = [
    { title: 'Annual Syllabus 2021-22', content: () => <div>
    
    <div className='cam-lower-sec'>
    <h1 className='title'>Annual Syllabus 2021-22</h1>
    </div>

    <div className='syllubus-data'>
      <div className='syllubs-list'>
      <Link to="">Vatika</Link>
      </div>
      <div className='syllubs-list'>
      <Link to="">Praveshika </Link>
      </div>
      <div className='syllubs-list'>
      <Link to="">Grade I </Link>
      </div>
      <div className='syllubs-list'>
      <Link to="">Grade II </Link>
      </div>
      <div className='syllubs-list'>
      <Link to="">Grade III </Link>
      </div>
      <div className='syllubs-list'>
      <Link to="">Grade IV </Link>
      </div>
      <div className='syllubs-list'>
      <Link to="">Grade V </Link>
      </div>
      

    </div>


      
    </div> },
    { title: 'Annual Syllabus 2020-21', content: () => <div>

<div className='cam-lower-sec'>
    <h1 className='title'>Annual Syllabus 2020-21</h1>
    </div>

    <div className='syllubus-data'>
      <div className='syllubs-list'>
      <Link to="">Vatika</Link>
      </div>
      <div className='syllubs-list'>
      <Link to="">Praveshika </Link>
      </div>
      <div className='syllubs-list'>
      <Link to="">Grade I </Link>
      </div>
      <div className='syllubs-list'>
      <Link to="">Grade II </Link>
      </div>
      <div className='syllubs-list'>
      <Link to="">Grade III </Link>
      </div>
      <div className='syllubs-list'>
      <Link to="">Grade IV </Link>
      </div>
      <div className='syllubs-list'>
      <Link to="">Grade V </Link>
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

export default syllabus
