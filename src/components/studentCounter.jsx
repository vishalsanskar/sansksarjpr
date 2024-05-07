
import React from 'react';

import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faBookOpenReader } from '@fortawesome/free-solid-svg-icons';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';

// import { faUserLarge } from '@fortawesome/free-regular-svg-icons'
// import { faUserLarge } from '@fortawesome/free-solid-svg-icons'

// import {faUserLarge} from '@fortawesome/free-regular-svg-icons'


const StudentCounter = () => {
  const [CounterOn, SetCounterOn] = useState(false);
  return (
    <ScrollTrigger onEnter={()=>SetCounterOn(true)} onExit={()=>SetCounterOn(false)}>
    <div>

    
    <div className='student-box'>
     <div className='box1'>
     <FontAwesomeIcon icon={faUser}/>  
      <div class="counter-container">
     <h1> {CounterOn && <CountUp start={0} end={150} duration={2} delay={0}/>}</h1>
     <h3>Certified Teachers</h3>
     </div>
     </div>

     <div className='box1'>
     <FontAwesomeIcon icon={faUsers}/>
     <div class="counter-container">
     <h1> {CounterOn && <CountUp start={0} end={282673} duration={2} delay={0}/>} </h1>
     <h3>  Students Enrolled </h3>
     </div>
     </div>
    
     <div className='box1'>
     <FontAwesomeIcon icon={faBookOpenReader}/>
     <div class="counter-container">
     <h1> {CounterOn && <CountUp start={0} end={599666} duration={2} delay={0}/>}</h1>
     <h3> Passing to School </h3> 
     </div>
     </div>

     <div className='box1'>
     <FontAwesomeIcon icon={faUserTie} />
     <div class="counter-container">
     <h1>{CounterOn && <CountUp start={0} end={1200} duration={2} delay={0}/>}</h1>
     <h3>Satisfied parents </h3>    
     </div>
     </div>

     </div>
     </div>


    </ScrollTrigger>
  );
};

export default StudentCounter;
