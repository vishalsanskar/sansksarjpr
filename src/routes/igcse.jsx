import React from 'react';
import Igcsedata from '../components/igcseData';
import { Link } from 'react-router-dom';

import '../css/tabresponsive.css';


import HorizontalTabs from '../components/HorizontalTabs';

function igcse() {

  const tabs = [
    { title: 'Cambridge Lower Secondary', content: () => <div>
    
    <div className='cam-lower-sec'>
    <h1 className='title'>Cambridge Lower Secondary</h1>
      <h5 className='cam-title-heading'>CHECKPOINT (GRADE VI –VIII)</h5>
      <p>Cambridge Lower Secondary is an international curriculum for grades VI to VIII for developing skills and understanding in English, Mathematics and Science. There is a curriculum framework for each subject – English, Mathematics and Science.</p>
      <p>Each curriculum framework is designed to engage learners in an active and creative learning journey.</p>
      <h5 className='cam-title-heading'>The following are the subject Choices for Classes VI to VIII:</h5>
      <div className='cam-lower-table'>
     
{/* <h1>table data baki ha abhi</h1> */}

<table>
  <thead>
    <tr>
     
      <th>Group 1 (Languages)</th>
      <th>Group 2 (Humanities & Social Sciences)</th>
      <th>Group 3 (Sciences)</th>
      <th>Group 4 (Mathematics)</th>
      <th>Group 5 (Creative, Technical & Vocational)</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>First Language English / A Second Language Hindi / A Foreign Language French</td>
      <td>Social Studies</td>
      <td>Science</td>
      <td>Mathematics</td>
      <td>Art/ ICT</td>
    </tr>
   </tbody>
        </table>
        </div> 
        <p>Cambridge Lower Secondary English enables learners to communicate confidently and effectively and to develop the skills to respond to a range of information, media and texts with understanding and enjoyment. Learners who follow this framework will develop a first language competency in English based on a curriculum designed to be successful in any culture and to promote cross-cultural understanding.</p>
        <p>The Mathematics curriculum framework explores six content areas: number, algebra, geometry, measure, handling data and problem solving. The first five content areas are all underpinned by problem solving, which provides a structure for the application of mathematical skills. Mental strategies are also an important part of the number content. The curriculum focusses on principles, patterns, systems, functions and relationships, so that learners apply their mathematical knowledge and develop a holistic understanding of the subject.</p>
        <p>This Science curriculum framework covers four content areas: Scientific enquiry, Biology, Chemistry and Physics. Scientific enquiry is about considering ideas, evaluating evidence, planning investigative work, and recording and analysing data. The scientific enquiry objectives underpin Biology, Chemistry and Physics, which are focussed on developing confidence and interest in scientific knowledge. Environmental awareness and some history of science are also part of the curriculum.</p>
        <p>Cambridge Checkpoint tests have been designed to assess learners at the end of Cambridge Lower Secondary in grade 8. They are available in English, Mathematics and Science, and give valuable feedback on learners’ strengths and weaknesses before they progress to the next stage of education</p>
        <p>The tests are marked in Cambridge and provide schools with an external international benchmark for learner performance. Each learner receives a statement of achievement and a diagnostic feedback report, giving schools detailed information and parents extra trust in the feedback they receive.</p>
          <h5 className='cam-title-heading'>The report on a learner gives:</h5>
        <ul>
          <li>A Cambridge Secondary 1 Checkpoint score for the whole subject</li>
          <li>A Cambridge Secondary 1 Checkpoint score for each main topic/skill</li>
          <li>A list of the questions (and the sub-topics/skills) where the candidate’s performance was particularly strong or particularly weak</li>
          <li>A statement of achievement</li>
        </ul>
        <p>For more information please visit at: <Link to="">www.cambridgeinternational.org</Link> </p>
    </div>



      
    </div> },
    { title: 'Cambridge Upper Secondary', content: () => <div>
      <div className='cam-lower-sec'>
      <h1 className='title'>Cambridge Upper Secondary</h1>
        <h5 className='cam-title-heading'>IGCSE (GRADE IX –X)</h5>
        <p>The IGCSE Programme is administered by the University of Cambridge International Examinations (CIE). The IGCSE Programme is firmly established and recognized world-wide; over 9000 schools in 160 countries offer the Cambridge qualifications. It has worldwide recognition and is equivalent to the Certificate of Secondary Education from Indian education boards, General Certificate of Secondary Education.</p>
        <p>IGCSE provides an ideal foundation for higher-level courses such as the International Baccalaureate Diploma Programme, 'A' Levels and the American Advanced Placement Test.</p>
        <p>The Cambridge IGCSE curriculum offers a variety of routes for learners starting from a foundation of Core level to extended level of subjects, making it suitable for a wide range of abilities.</p>
        <p>Encouraging learners to engage with a variety of subjects, and make connections between them, is fundamental to our approach.
        </p>
          <h5 className='cam-title-heading'>IGCSE develops learner knowledge, understanding and skills in:</h5>
        <ul>
          <li>Subject content</li>
          <li>Applying knowledge and understanding to new as well as unfamiliar situations</li>
          <li>Intellectual enquiry</li>
          <li>Flexibility and responsiveness to change</li>
          <li>Cultural awareness</li>
        </ul>
      </div>
    </div> },
    { title: 'The IGCSE Curriculum At Sanskar', content: () => <div>

      <div className='cam-lower-sec'>
        <h1 className='title'>The IGCSE Curriculum At Sanskar</h1>
        <p>Sanskar offers 18 subjects at the IGCSE level. These are offered under 5 groups for the ICE award. Students are required to choose seven subjects as follows. - Two languages, and one subject from each of the other subject groups: Humanities and Social sciences, Sciences, Mathematics and Business, Creative, Technical & Vocational. This accounts for 6 Subjects. The 7th subject may belong to any group from 2 to 5. A student can choose up to a maximum of 9 subjects.</p>
        <h5 className='cam-title-heading' >The IGCSE is a two-year course of study available to students at Sanskar in Classes IX and X. The following are the subject Choices for Classes IX and X:</h5>
    
        <div className='cam-lower-table'>
     
     {/* <h1>table data baki ha abhi</h1> */}
     
     <table>
       <thead>
         <tr>
          
           <th>Group 1 (Languages)</th>
           <th>Group 2 (Humanities & Social Sciences)</th>
           <th>Group 3 (Sciences)</th>
           <th>Group 4 (Mathematics)</th>
           <th>Group 5 (Creative, Technical & Vocational)</th>
           
         </tr>
       </thead>
       <tbody>
         <tr>
           <td>First Language English / A Second Language Hindi / A Foreign Language French</td>
           <td>English Literature / Economics / Political Science / Geography / Global Perspectives</td>
           <td>Physics / Chemistry / Biology / Combined Sciences</td>
           <td>International Mathematics / Extended Mathematics</td>
           <td>Art & Design / Business Studies / ICT / Computer Science</td>
         </tr>
        </tbody>
             </table>
             </div> 
        <h5 className='cam-title-heading' >The IGCSE Assessment</h5>
        <p>Cambridge IGCSE assessment takes place at the end of the course and includes written, oral, coursework and practical assessment. This broadens opportunities for students to demonstrate their learning.</p>
        <p>Grades are benchmarked using eight internationally recognized grades, A* to G ;( A*indicating highest performance and G the minimum satisfactory performance)</p>
        <p>Cambridge ICE Group Award stands for International Certificate of Education. At the IGCSE one needs to choose a minimum of 7 subjects and select at least one subject from each of the five groups to qualify for the ICE Award.</p>
          <h5 className='cam-title-heading' >The ICE may be awarded at one of the three levels:</h5>
        <ul>
          <li>Distinction to students who receive Grade A or above in 5 subjects and Grade C or above in two subjects;</li>
          <li>Merit to students who receive Grade B or above in 5 subjects and Grade G or above in two subjects;</li>
          <li>Pass to students who receive Grade G or above in 5 subjects</li>
        </ul>
        <p><b>For more information please visit at: </b><Link to='https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-upper-secondary/cambridge-igcse'>www.cambridgeinternational.org</Link></p>
      </div>


    </div> },
  
  ];

  
  return (
    <div>
      <div className='igcse-data'>
    
      {/* <Igcsedata/> */}
      <HorizontalTabs tabs={tabs} />


      </div>
   
    </div>
  )
}

export default igcse
