import React from 'react'

import HorizontalTabs from '../components/HorizontalTabs';
import { Link } from 'react-router-dom';


function policy() {

  const tabs = [
    { title: 'Admission Policy', content: () => <div>
    
    <div className='cam-lower-sec'>
    <h1 className='title'>Admission Policy</h1>
      <h5 className='cam-title-heading'>Sanskar School aims to:</h5>
      <ul>
          <li>equip its pupils with a <b>critical and global outlook </b>which will make them committed citizens of the world.</li>
          <li>recognize and channelize the potential of the pupil and develop thinking, communication, social, scientific and interpersonal skills.</li>
          <li>Foster <b>cognitive, affective and psychomotor development</b> and enable the pupil to make connections with the acquired knowledge in his/her everyday life.</li>
        </ul>
        <p>Sanskar School, being inclusively a day school, caters to students aged 3.5- 17 irrespective of their caste, colour, gender, religion or nationality.</p>
        <p>The Admissions Department provides help and guidance throughout all aspects of the admission procedure and will answer any queries about the school, its ambitions and the aspects of school life at Sanskar.</p>
        <p>Candidates are interacted with in a pleasant and comfortable environment, where they are asked simple questions to know more about their educational development, use of language, social skills, academic enthusiasm, and co-curricular interests. The idea of the interaction is to know more about what the candidates know, understand and enjoy. </p>
      <h5 className='cam-title-heading'><b>Admission Criterion</b></h5>
      <p>Various factors would lead to the selection of a candidate into the school, where the Principal
and the Admission Committee would play an important role in judgment. The factors which
would be taken into consideration are:
</p>
      <h5 className='cam-title-heading'><b>PYP Admissions</b></h5>
      <p><b>Admission in Pre-Primary</b>on the basis of “First come First Serve” basis.</p>
      <h5 className='cam-title-heading'><b>Admission from class I to V</b></h5>
      <ol className='admission-class'>
        <li>Progress Report of previous classes.</li>
        <li>Assessments done by the candidate in the previous class.</li>
        <li>The potential of the applicant to benefit from the programme(s) and educational services available.</li>
        <li>Proficiency in English.</li>
        <li>Categories for admission at the entry level are specified as follows:</li>

     
        
      </ol>
      <ul className='admission-categories'>
          <li><div className='list-name'>RTE</div><div className='list-persent'><span>-</span>25%</div></li>
          <li><div className='list-name'>Siblings of students studying in the school</div><div className='list-persent'><span>-</span>5%</div></li>
          <li><div className='list-name'>Teacher’s Wards</div><div className='list-persent'><span>-</span>5%</div></li>
          <li><div className='list-name'>Transferable cases</div><div className='list-persent'><span>-</span>5%</div></li>
          <li><div className='list-name'>Defence / Police wards</div><div className='list-persent'><span>-</span>10%</div></li>
          <li><div className='list-name'>General</div><div className='list-persent'><span>-</span>50%</div></li>
          {/* <li><div className='list-name'>Siblings of students studying in the school</div><div className='list-persent'><span>-</span><p>5%</p></div></li> */}
          
  </ul>
      <h5 className='cam-title-heading'><b>Admissions to Classes VI to IX and XI (CBSE & IGCSE)</b></h5>
      <h5 className='cam-title-heading'><b>Admission to class IX</b></h5>
      <ul>
          <li>The entrance exam is conducted for the following subjects: English, Hindi, Mathematics, Science and Social Science.</li>
          <li>The applicant is judged upon his capabilities to express ideas, thoughts and his/her understanding skills and his/her academic interests.</li>
          <li>Foster <b>cognitive, affective and psychomotor development</b> and enable the pupil to make connections with the acquired knowledge in his/her everyday life.</li>
        </ul>
  <h5 className='cam-title-heading'><b>Admissions to class XI (Year 2019-20)</b> would be made on the following eligibility criteria:</h5>
   <ul className='admission-xi'>
    <li><p>Science Stream </p> <span>    : 80 & above (Aggregate of Mathematics & Science)</span></li>
    <li><p>Commerce Stream </p> <span>   : 70 & above</span></li>
    <li><p>Humanities </p> <span>    : 70 & above </span></li>
   </ul>
   <ul>
      <li>The entrance test consists of Mathematics and English as a compulsory components and the subject of Sciences the student is opting for.</li>
      <li>The applicant is judged upon his capabilities to express ideas, thoughts and his/ her understanding skills and his/her academic interests.</li>
      <li>The applicant is subjected to Career Counselling if doubtful about his/her stream.</li>
   </ul>
   <h5 className='cam-title-heading'><b>Note:</b> Admission to <b>Classes X and XII</b> is as per CBSE norms.</h5>
   <br></br>
   <h5 className='cam-title-heading'><b>Students enrolling into the IBDP</b></h5>

   <ul>
          <li>To enroll into the Diploma Programme, a student should have completed Grade 10 successfully with a pass percentage of at least 70% from the CBSE or ICSE Board. At least grade C in IGCSE/MYP choice of subjects.</li>
          <li>Transfer candidates from other IB Schools are eligible to enrol to Grade 11.</li>
          <li>New candidates will take a placement test for English, Mathematics and the subject of Sciences the student is opting for followed by an interview with the DP coordinator, just to ensure that they have adequate knowledge, understanding and skills to cope with the demands of the DP as well as to assess which HL/ SL Courses they are to take.</li>
          <li>The parents of new applicants will be a given a detailed orientation about the philosophy, benefits and demands of IB DP in the school itself, to help them make an informed decision.</li>
          <li>The school will discuss the financial implications of the IBDP with the parent to ensure that they are able to support their ward throughout the IBDP at Sanskar School as no scholarships are available.</li>
  </ul>
   <h5 className='cam-title-heading'><b>Admission form requirements:</b></h5>
   <ul>
   <h5 className='cam-title-heading'><b>For students enrolling in Pre- Primary</b></h5>
   <li>Birth Certificate.</li>
   <li>2 passport size photographs.</li>
   </ul>
   <ul>
   <h5 className='cam-title-heading'><b>For students enrolling in classes I to XII</b></h5>
   <li>Birth Certificate.</li>
   <li>Original Transfer Certificate from the school last attended.</li>
   <li>4 passport size photographs.</li>
   <li>Report Card from previous successfully completed class.</li>
   <li>Photocopy of the scholastic achievements record from the school last attended.</li>
   <li>Any other information parents consider necessary for the school to know.</li>
   </ul>
   
   <h5 className='cam-title-heading'><b>NOTE:</b></h5>
   <ul>
    <li>Admission is on the basis of "First Come First Serve" for Pre- Primary.</li>
    <li>Admission in other classes is against vacancies only.</li>
    <li>If the number of applicants is more than the number of seats, the Lottery System will be followed.</li>
    <li>For students enrolling in classes IX and XI, it is mandatory to appear for the entrance test.</li>
   </ul>
   <h5 className='cam-title-heading'><b>Steering Committee</b></h5>
   <p>The Admission Policy Steering Committee acts as a channel of communication and discussion between the students, parents and teachers. It is the responsibility of the Principal to form a committee comprising the following to review the Admission Policy.</p>
   <ul>
    <li>Head of School</li>
    <li>Admission Team</li>
    <li>IBDP Coordinator</li>
    <li>IBPYP Coordinator</li>
    <li>IGCSE Coordinator</li>
    <li>Section Coordinators</li>
   </ul>
   <p>As with other policies and processes, this policy has been drafted with inputs from various sections of the school community and shall be reviewed and shared with all the stakeholders of the school.</p>
   <h5 className='cam-title-heading'><b>Admission Policy Review</b></h5>
   <p>Admission Policy will be reviewed by the Steering Committee at the beginning of every academic year.</p>
   <p>The effectiveness of the Admission Policy as a working document will be reviewed with the help of collaborative discussions and meetings</p>

   <h5 className='cam-title-heading'><b>Communicating the policy to various stake holders through:</b></h5>
   <p>1. The official school website.</p>
   <p>Approved by the school management in May, 2015.</p>
   <p>Revised by the school in May, 2016.</p>
   <p>Revised by the school in May, 2017.</p>
   <p>Revised by the school in April, 2018.</p>
   <p>Revised by the school in April, 2019.</p>
   <p>Revised by the school in January, 2020.</p>
   
 <br></br>
 <br></br>
 <br></br>
   <h5 className='cam-title-heading'><b>Subject Combination Form Class XI 2019-20</b></h5>
 <br></br>
   <p>1. Name of the Student: ___________________________________________________________________</p>
   <p>2. Father’s Name:   _______________________________________________________________________</p>
   <p>3. Mother’s Name:  ______________________________________________________________________</p>
   <p>4. Telephone Number:  (0) ___________________(R) __________________ (M) ___________________</p>
   <p>5. Last School Attended: _________________________________________________________________</p>
   <p>6.  Pre-Board Result in class 10th: English __________ Mathematics ___________Science _________ </p>
   <p>Social Science ________ Hindi/Sanskrit/French ___________________ </p>
   <p>7. Pre board Percentage in grade 10th: __________________________________________________</p>
   <p>8. Choice of Board in class XI: CBSE ( ) International Baccalaureate ( )</p>
 
   <h5 className='cam-title-heading'><b>Subjects to be offered:</b></h5>


   <div className='cam-lower-table'>
     
     {/* <h1>table data baki ha abhi</h1> */}
     
     <table>
       <thead>
        <tr >
          <th colspan="3">CBSE</th></tr>
         <tr>
           <th>Science Stream</th>
           <th>Commerce Stream </th>
           <th>Humanities Stream</th> 
         </tr>
       </thead>
       <tbody>
         <tr>
           <td>Physics</td>
           <td>Accountancy</td>
           <td>Geography</td>
         </tr>
         <tr>
           <td>Chemistry</td>
           <td>Business Studies</td>
           <td>Psychology/History</td>
         </tr>
         <tr>
           <td>Biology / Mathematics</td>
           <td>Economic</td>
           <td>Political Science / Economics
</td>
         </tr>
         <tr>
           <td>Mathematics / Psychology / Physical Education / Informatics Practices / Entrepreneurship / Commercial Art </td>
           <td>Mathematics / Psychology / Physical Education / Informatics Practices / Entrepreneurship / Commercial Art </td>
           <td>Mathematics / Psychology / Physical Education / Informatics Practices / Commercial Art/ Entrepreneurship</td>
         </tr>
       
     
        </tbody>
             </table>
             </div> 

    <div className='cam-lower-table'>
     
     {/* <h1>table data baki ha abhi</h1> */}
     
     <table>
     
       <tbody className='ibdp-table'>
       <tr >
          <th colspan="3">IBDP</th></tr>
    
       <tr>
               <th scope="row">Group 1</th>
               <td><h4>English A / Hindi A </h4>
                 <br></br>
                 Language and Literature (HL/SL)
               </td>
             </tr>
       <tr>
               <th scope="row">Group 2</th>
               <td><h4> Second Language </h4>
                 <br></br>
                 French ab initio (SL); French B (HL/SL); Hindi B (HL/SL); English B (HL/SL)
               </td>
             </tr>
       <tr>
               <th scope="row">Group 3</th>
               <td><h4>Individuals and Societies</h4>
                 <br></br>
                 Business Management (HL/SL); Economics (HL/SL); Psychology (HL/SL); ESS (SL); ITG (HL/SL)
               </td>
             </tr>
       <tr>
               <th scope="row">Group 4</th>
               <td><h4>Sciences</h4>
                 <br></br>
                 Biology (HL/SL); Chemistry (HL/SL); Computer Science (HL/SL); Physics (HL/SL); ESS (SL)
                
     
               </td>
             </tr>
       <tr>
               <th scope="row">Group 5</th>
               <td><h4>Mathematics</h4>
                 <br></br>
                 Mathematics Application and Interpretation (HL/SL)
                 Mathematics Analysis and Approaches (HL/SL)
                 
                
     
               </td>
             </tr>
       <tr>
               <th scope="row">Group 6</th>
               <td> <h4> The Arts</h4>
                 <br></br>
                Visual Arts (HL/SL)
                 
                
     
               </td>
             </tr>
        </tbody>
             </table>
             </div> 
 

    <h5 className='cam-title-heading'><b>Criteria:</b></h5>
    <ul className='admission-xi'>
    <li><p>Science Stream </p> <span>    : 80 & above (Aggregate of Mathematics & Science)</span></li>
    <li><p>Commerce Stream </p> <span>   : 70 & above</span></li>
    <li><p>Humanities </p> <span>    : 70 & above </span></li>
   </ul>
  
   <h5 className='cam-title-heading'><b>Note</b></h5>
   <ol className='admission-class'>
        <li>A candidate has to take four (4) Elective from any stream plus one (1) language i.e. English.</li>
        <li>Less than 5 students in a group, the school reserves the right to shift the student to a different subject.</li>
        <li>The student will be permitted to change the subject till 30th July of the same year.</li>
        <li>No application will be entertained after that.</li>
        <li>If a candidate is of IBDP then he/she has to choose one subject from each group (total 3 HL and 3 SL
subjects). If he/she does not choose Visual Arts from Group 6, then he/she can choose two subjects from
Group 3 or Group 4.</li>
  
      </ol>

<br></br>
<br></br>
<br></br>
      <p><b>Date: _________________ Signature of Parent: ______________ Signature of Student: ___________ </b></p>


    </div>



      
    </div> },
    { title: 'Assessment Policy', content: () => <div>
     <div className='cam-lower-sec'>
    <h1 className='title'>Assessment Policy</h1>
      <h5 className='cam-title-heading'>Sanskar School aims to:</h5>
      <ul>
          <li>equip its pupils with a <b>critical and global outlook </b>which will make them committed citizens of the world.</li>
          <li>recognize and channelize the potential of the pupil and develop thinking, communication, social, scientific and interpersonal skills.</li>
          <li>Foster <b>cognitive, affective and psychomotor development</b> and enable the pupil to make connections with the acquired knowledge in his/her everyday life.</li>
        </ul>
        <br></br>
        <p>Assessment is an integral part of the teaching learning process at Sanskar School. It allows
achievements to be recognized and helps both teachers and learners to reflect on and review
their performance and progress. It is the process that focuses on holistic development.</p>
<p>Assessment is a tool used by the teachers to continuously monitor students’ progress in anonthreatening, friendly and supportive environment. It involves regular descriptive feedback, a
chance for the students to reflect on their performance, take advice and improve.</p>
<p>In addition to this, assessment is totally stress free and enjoyable for the students at Sanskar
School, and also develops in them the spirit of competitiveness and self- assessment.</p>
<h5 className='cam-title-heading'>The objectives of assessment at Sanskar School are:</h5>
      <ul>
          <li>to support and enhance student learning.</li>
          <li>to be diagnostic, evaluative and remedial.</li>
          <li> to focus on all key areas of student learning and development i.e., Scholastic and Coscholastic as it helps to ascertain strengths and weaknesses of the learner.</li>
          <li>to have a variety of assessment tools catering to varying needs of a learner.</li>
          <li>to make assessments continuous as well as comprehensive.</li>
          <li>to help develop cognitive, psychomotor and affective skills.</li>
          <li>to use evaluation for the improvement of students’ achievement and teaching- learning strategies on the basis of regular diagnosis followed by remedial instructions.</li>
          <li>to give importance to each learner’s way of responding and learning and time it takes to do so.</li>
          <li>to report on a continuous basis and be sensitive to each learner’s response.</li>
          <li>to provide feedback that will lead to positive action and help the learner to do better.</li>
        </ul>
          <h5 className='cam-title-heading'>Assessment focuses on the learner’s ability to:</h5>
        <ul>
          <li>learn and acquire desired skills related to different subject areas.</li>
          <li>acquire a level of achievement in different subject areas in the requisite measure.</li>
          <li>develop individual skills, interest, attitude and motivation.</li>
          <li>respond to different situations and opportunities both in and out of school.</li>
          <li>apply what is learnt in a varied of environment, circumstances and situations.</li>
          <li>manifest academic honesty in all their internal and external assessment.</li>
          <li>work independently, collaboratively and harmoniously.</li>
          <li>reflect, analyze and evaluate and taking action.</li>
        </ul>
          <h5 className='cam-title-heading'>Evaluation System:</h5>
          <p>The system of evaluation followed at Sanskar School is a Continuous and Comprehensive Evaluation system which refers to a system of school based on the evaluation of a studentthat
covers all aspects of a student development in a continuous process rather than in anevent. It is built into the total teaching-learning process and spread over the entire span of the academic session.</p>

          <h5 className='cam-title-heading'>Examination Pattern and Grading (Assessment Criterion Being Used):For PYP – Pre Primary to Grade V.</h5>
          <h5 className='cam-title-heading'>Evaluation System:</h5>
          <p>The system of evaluation followed at Sanskar School is Continuous and Comprehensive
Evaluation system which refers to a system of school based evaluation of a student that
covers all aspects of a student development in a continuous process rather than an event,it
is built into the total teaching-learning process and spread over the entire span of
academic session.</p>
<p>Assessments are designed in order to assess the essential elements of PYP (knowledge,
concepts, ATL, attributes and action) and promote the acquisition of IB Learner profiles for
evolution of international mindedness.</p>
<p><b>Pre-Assessment</b> occurs before the beginning of new learning to uncover prior knowledge
and experiences.</p>
<p><b>Formative Assessment</b> is a tool used by the teachers to continuously monitor student
progress in a nonthreatening, supportive environment.
</p>
<p>Formative Assessment is carried out during a course of instruction for providing
continuous feedback to both the teachers and the learners. It is also carried out for taking
decisions regarding appropriate modifications in the transactional procedures and learning
activities.
</p>
<p><b>Summative Assessment</b> is carried out at the end of the course of learning. It measures or
‘sums-up’ how much student has learned from the course. Summative assessment is
assessment of conceptual understanding within the central idea.</p>
<h5 className='cam-title-heading'>Term-1 and Term-2 Assessment tools and strategies:</h5>
<p>The assessment of the development and learning of young students is an essential
component of the curriculum. Students are observed in the variety of situations and a
range of assessment strategies are implemented. Tools such as rubrics, exemplars,
checklist and anecdotal records and strategies such as observations, performance
assessments, selective responses and open-ended tasks are selected in order to provide a
balanced view of the students</p>
<h5 className='cam-title-heading'>Reporting Criteria (PYP)</h5>
<p>A four-point grading scale is followed with the description as follows:</p>

<p><b> Excelling (point -4):</b> Has achieved expected requirements and consistently provide
evidence of learning that is high in quality. Analyses situations and applies knowledge,
skills and understanding.</p>
<p><b>Achieving (point-3):</b>Has met the expected requirements and provide quality work
evidence most of the time. Demonstrates and applies knowledge, skills and
understanding</p>
<p><b>Developing (point-2):</b> Has partially achieved the requirements and provides some work
evidence. Needs help to apply knowledge, skills and understanding.</p>
<p><b>Beginning (point-1):</b> Is beginning to develop knowledge, skills and understanding. Is
unable to discuss independently, his /her learning in meaningful ways with others</p>

<h5 className='cam-title-heading'>Reporting:</h5>
<p>Regular reporting is done on a one to one basis to the parents during Open House Sessions
which are organised on a regular basis throughout the session.</p>
<p>Through two and three way of conference students share their learning process with the
parents and teachers.</p>
<p>Written reporting of the student’s progress is done twice a year, once at the end of each
semester/term. Parents collect their ward’s written report and feedback and remedial
measures are shared with the parents.</p>
<p>The performance of a student is graded, based on a 4-point scale with descriptive
indicators given at the end of the Performance Profile.</p>

<h5 className='cam-title-heading'>For classes VI to VIII (CBSE)</h5>
<ul>
  <li>Introduction of Periodic Test Evaluation in classes VI to VIII is spread in an academic
year. Each term has two Unit Test for the evaluation of Scholastic areas</li>
<li> The assessment structure and examination for classes VI to VIII is as follows: -</li>
</ul>

<div className='cam-lower-table policy'>
     
     {/* <h1>table data baki ha abhi</h1> */}
     
     <table>
       <thead>
        {/* <tr >
          <th colspan="3">CBSE</th>
          </tr> */}
         <tr>
           <th>Subjects</th>
           <th colSpan={2}>
            <p><b>TERM-1 (100 marks)</b></p>
            <p><b>(1st half of the session)</b></p>
            <p><b>20 marks Periodic Assessment+80
marks for Half Yearly Exam</b></p>


</th>
           <th colSpan={2}>
           <p><b>TERM-2 (100 marks)</b></p>
           <p><b>(2nd half of the session)</b></p>
           <p><b>20 marks Periodic Assessment +
80 marks for Yearly Exam</b></p>


  </th> 
         </tr>
       </thead>
       <tbody>
         <tr>
           <td>
            <p><b>English</b></p>
            <p><b>Hindi</b></p>
            <p><b>Sanskrit/French</b></p>
            <p><b>Mathematics</b></p>
            <p><b>Science</b></p>
            <p><b>Social Science</b></p>
            <p><b>Computer Science</b></p>
           </td>
           <td>
           <h5 className='cam-title-heading'>PA 20 marks</h5><br></br>
           <p>Periodic Test 10 marks with syllabus covered till announcement of test dates by school.</p><br></br>
           <p>Note Book Submission 5 marksat term end.</p><br></br>
           <p>Sub Enrichment 5 marks at term end.</p><br></br>
           </td>
           <td>
           <h5 className='cam-title-heading'>Half Yearly Exam</h5>

            <br></br>
            <p>Written exam for 80 marks with syllabus covered till announcement of Half Yearly exam dates by school.</p>

           </td>
           <td>
           <h5 className='cam-title-heading'>PA 20 marks</h5><br></br>
           <p>Periodic Test </p><br></br>
           <p>10 marks with syllabus covered till announcement of test dates by school </p><br></br>
           <p>Note Book submission 5 marks at term end</p><br></br>
           <p>Sub Enrichment 5 marks at term end</p><br></br>
        </td>
           
           
           <td>
           <h5 className='cam-title-heading'>Yearly Exam</h5><br></br>
           <p>Written exam for 80 marks with syllabus coverage as below: </p><br></br>
           <p>Class VI: 10% of1st term covering significant topics + entire syllabus of 2 nd term </p><br></br>
           <p>Class VII: 20% of 1 st term covering significant topics + entire syllabus of 2 nd term </p><br></br>
           <p>Class VIII: 30% of 1 st term covering significant topics + entire syllabus of 2 nd term </p><br></br>

           </td>
         </tr>
    
   
     
        </tbody>
             </table>
             </div> 

<p><b>Co-Scholastic Activities (Classes VI-VIII):</b> For the holistic development of the student, cocurricular activities in the following areas be carried out in CBSE affiliated schools by the
teachers and will be graded term-wise on a 3-point grading scale (A= Very Good, B=Goodand
C= Fair).The aspect of regularity, sincere participation, output and teamwork be the generic
criteria for grading in the following co-scholastic activities:</p>


      <ul>
          <li><b>Work Education-</b> Work Education refers to skill-based activities resulting in goodsor
services useful to the community
</li>
          <li><b>Art Education</b> (Visual & Performing Art)</li>
          <li><b>Health and Physical Education</b> (Sports/Martial Arts/Yoga/NCC etc.)</li>
       
        </ul>
        <br></br>
        <h5 className='cam-title-heading'><b>Scholastic grade points in VI to X:</b></h5>

        <div className='cam-lower-table marks'>
          <br></br>
     
     {/* <h1>table data baki ha abhi</h1> */}
     
     <table>
       <thead>
        {/* <tr >
          <th colspan="3">CBSE</th>
          </tr> */}
         <tr>
           <th>Marks Range</th>
           <th>Grade</th> 
         </tr>
       </thead>
       <tbody>
         <tr>
           <td>
           91-100
           </td>
           <td>
           A1
           </td>
         </tr>
         <tr>
           <td>
           81-90
           </td>
           <td>
           A2
           </td>
         </tr>
         <tr>
           <td>
           71-100
           </td>
           <td>
           B1
           </td>
         </tr>
         <tr>
           <td>
           61-70
           </td>
           <td>
           B2
           </td>
         </tr>
         <tr>
           <td>
           51-60
           </td>
           <td>
           C1
           </td>
         </tr>
         <tr>
           <td>
           51-60
           </td>
           <td>
           C1
           </td>
         </tr>
         <tr>
           <td>
           41-50
           </td>
           <td>
           C2
           </td>
         </tr>
         <tr>
           <td>
           33-40
           </td>
           <td>
          D
           </td>
         </tr>
         <tr>
           <td>
           32 & Below
           </td>
           <td>
          E
           </td>
         </tr>
    
   
     
        </tbody>
             </table>
             </div> 
             <br></br>
             <p><b>Discipline (Classes VI-VIII):</b>The students will be assessed for the discipline which will be
based on the factors like attendance, sincerity, behavior, values and tidiness, respectfulness for
rules and regulations, attitude towards society, nation and others. Grading on Discipline will
be done term-wise on a 3-point grading scale (A= Outstanding,B= Very Good and C= Fair)
</p>

<h5 className='cam-title-heading'>Assessment for Classes IX – X (CBSE)</h5>
<p>The assessment structure and examination for classes IX and X is as follows: -</p>

<div className='cam-lower-table'>
     
     {/* <h1>table data baki ha abhi</h1> */}
     
     <table>
     
       <tbody className='ibdp-table'>
       <tr >
          <th colspan="3">IBDP</th></tr>
    
       <tr>
               <th scope="row">Group 1</th>
               <td><h4>English A / Hindi A </h4>
                 <br></br>
                 Language and Literature (HL/SL)
               </td>
             </tr>
       <tr>
               <th scope="row">Group 2</th>
               <td><h4> Second Language </h4>
                 <br></br>
                 French ab initio (SL); French B (HL/SL); Hindi B (HL/SL); English B (HL/SL)
               </td>
             </tr>
       <tr>
               <th scope="row">Group 3</th>
               <td><h4>Individuals and Societies</h4>
                 <br></br>
                 Business Management (HL/SL); Economics (HL/SL); Psychology (HL/SL); ESS (SL); ITG (HL/SL)
               </td>
             </tr>
       <tr>
               <th scope="row">Group 4</th>
               <td><h4>Sciences</h4>
                 <br></br>
                 Biology (HL/SL); Chemistry (HL/SL); Computer Science (HL/SL); Physics (HL/SL); ESS (SL)
                
     
               </td>
             </tr>
       <tr>
               <th scope="row">Group 5</th>
               <td><h4>Mathematics</h4>
                 <br></br>
                 Mathematics Application and Interpretation (HL/SL)
                 Mathematics Analysis and Approaches (HL/SL)
                 
                
     
               </td>
             </tr>
       <tr>
               <th scope="row">Group 6</th>
               <td> <h4> The Arts</h4>
                 <br></br>
                Visual Arts (HL/SL)
                 
                
     
               </td>
             </tr>
        </tbody>
             </table>
             </div> 


      </div>








    </div>},
    { title: 'Academic Honesty Policy', content: () => <div>

<div className='cam-lower-sec'>
    <h1 className='title'>Academic Honesty</h1>
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
    { title: 'College Counselling Policy', content: () => <div>

      <div className='College CounsellingPolicy'>
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
    { title: 'Language Policy', content: () => <div>

      <div className='College CounsellingPolicy'>
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
    { title: 'Inclusive Education Policy', content: () => <div>

      <div className='College CounsellingPolicy'>
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
    { title: 'Information Technology Resources Policy', content: () => <div>

      <div className='College CounsellingPolicy'>
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
    { title: 'Laboratory Policy', content: () => <div>

      <div className='College CounsellingPolicy'>
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
      <div className='ib-policy'>
      <HorizontalTabs tabs={tabs} />
      </div>
    </div>
  )
}

export default policy
