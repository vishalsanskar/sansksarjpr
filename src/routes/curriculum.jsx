import React from 'react'
import HorizontalTabs from '../components/HorizontalTabs';
import { Link } from 'react-router-dom';

function curriculum() {
  const tabs = [
    { title: 'Art', content: () => <div>
    
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
    { title: 'Language', content: () => <div>

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
    { title: 'Mathematics', content: () => <div>

<div className='cam-lower-sec'>
    <h1 className='title'>Mathematics Curriculum 2020-21</h1>
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
  
  { title: 'PSPE', content: () => <div>

<div className='cam-lower-sec'>
    <h1 className='title'>PSPE Curriculum 2020-21</h1>
    </div>

    <div className='syllubus-data'>
      <div className='syllubs-list'>
      <Link to="">EY Curriculum</Link>
      </div>

      <div className='syllubs-list'>
      <Link to="">PYP Curriculum</Link>
      </div>
    </div>

    </div> },

    { title: 'Science', content: () => <div>

<div className='cam-lower-sec'>
    <h1 className='title'>Science Curriculum 2020-21</h1>
    </div>

    <div className='syllubus-data'>
      <div className='syllubs-list'>
      <Link to="">EY Curriculum</Link>
      </div>

      <div className='syllubs-list'>
      <Link to="">PYP Curriculum</Link>
      </div>
    </div>

    </div> },
    { title: 'Social Studies', content: () => <div>

<div className='cam-lower-sec'>
    <h1 className='title'>Social Studies Curriculum 2020-21</h1>
    </div>

    <div className='syllubus-data'>
      <div className='syllubs-list'>
      <Link to="">EY Curriculum</Link>
      </div>

      <div className='syllubs-list'>
      <Link to="">PYP Curriculum</Link>
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

export default curriculum
