import React from 'react'
import HorizontalTabs from '../components/HorizontalTabs';
import { Link } from 'react-router-dom';
function ibdp() {
  const tabs = [
    { title: 'IB Diploma Programme', content: () => <div className='ibdp-pro-row'  >
    
    <div className='cam-lower-sec'>
    <h1 className='title'>IB Diploma Programme</h1>
      {/* <h5 className='cam-title-heading'>CHECKPOINT (GRADE VI –VIII)</h5> */}
      <p>The IB Diploma Programme is an academically challenging and balanced programme of education with final examinations that prepares students for success at university and life beyond. It has been designed to address the intellectual, social, emotional and physical well-being of students. The programme has gained recognition and respect from the world’s leading universities.</p>
      <h5 className='cam-title-heading'>The Diploma Programme prepares students for effective participation in a rapidly evolving and increasingly global society as they:</h5>
      <ul>
          <li>develop physically, intellectually, emotionally and ethically</li>
          <li>acquire breadth and depth of knowledge and understanding, studying courses from six subject groups</li>
          <li>develop the skills and a positive attitude towards learning that will prepare them for higher education</li>
          <li>Flexibility and responsiveness to change</li>
          <li>study at least two languages and increase understanding of cultures, including their own</li>
          <li>make connections across traditional academic disciplines and explore the nature of knowledge through the programme unique Theory of Knowledge course</li>
          <li>undertake in-depth research into an area of interest through the lens of one or more academic disciplines in the extended Essay</li>
          <li>enhance their personal and interpersonal development through Creativity, Action and Service</li>
        </ul>
      <h5 className='cam-title-heading'>Unique to the IB Programme are its Inquiry Cycle and a core comprising three components:</h5>
      <ul>
          <li>Theory of Knowledge, which explores the nature of knowledge</li>
          <li>CAS – Creativity, Activity and Service</li>
          <li>Extended Essay, which requires an Independent research work</li>
        </ul>
      <p>The core ensures that the approach to learning is interdisciplinary, which builds the capacity to engage with complex ideas. Students receive guidance on independent research, academic honesty and web literacy.</p>
      <p>A holistic approach to teaching and learning is important for developing well-rounded individuals. We encourage students to experience and appreciate other cultural contexts and broaden their world view.</p>
      <p>The students have many out-of-classroom activities and experiences such as theatre, photography, film appreciation, music, robotics, football, cricket, tennis, basketball, taekwondo, and many more. Community service encourages children to understand the challenges faced by the less-privileged and sensitises them to the importance of being compassionate.</p>
      <p>Being internationally minded, globally mobile, multilingual and interculturally aware, are key traits that benefit IB graduates in their university studies and career aspirations. The College Counselling Team guides and supports students in their university choices, based on their aptitude and aspirations.</p>
      
      <p>At Sanskar, the curriculum as well as many optional events, activities and trips are provided for students to support this learning.</p>

    
       
    
    </div>
     <div className='ibdp-pro-img'>
      <img src='../img/IBDPProgramme.jpg'/>
     </div>



      
    </div> },
    { title: 'Subjects Under IBDP', content: () => <div>
      <div className='cam-lower-sec'>
      <h1 className='title'>The IBDP Subjects offered at Sanskar are:</h1>
      {/* <h5 className='cam-title-heading'>IGCSE (GRADE IX –X)</h5> */}

        <div className='cam-lower-table'>
     
{/* <h1>table data baki ha abhi</h1> */}

<table>

  <tbody className='ibdp-table'>
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
            French ab initio (SL); French B (HL/SL); Hindi B (HL/SL)
          </td>
        </tr>
  <tr>
          <th scope="row">Group 3</th>
          <td><h4>Individuals and Societies</h4>
            <br></br>
            Business Management (HL/SL); Economics (HL/SL); Global Politics (HL/SL); ESS (SL)
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
    </div> },
    { title: 'IBDP Assessment', content: () => <div>

      <div className='cam-lower-sec'>
        <h1 className='title'>IBDP Assessment</h1>
        <p>In the DP, students receive grades ranging from 7 to 1, with 7 being highest. Students receive a grade for each DP course attempted.</p>
        {/* <h5 className='cam-title-heading' >The IGCSE is a two-year course of study available to students at Sanskar in Classes IX and X. The following are the subject Choices for Classes IX and X:</h5> */}
        <p>A student’s final Diploma result score is made up of the combined scores for each subject. The diploma is awarded to students who gain at least 24 points, subject to certain minimum levels of performance including successful completion of the three essential elements of the DP core.</p>
        <p>The Theory of Knowledge (TOK) and Extended Essay (EE) components are awarded individual grades and, collectively, can contribute up to 3 additional points towards the overall Diploma score.</p>
        <p>Creativity, Action, Service – the remaining element in the DP core – does not contribute to the points total but authenticated participation is a requirement for the award of the diploma.</p>
        
    

      </div>


    </div> },
    { title: 'Benefits of the IB Diploma Programme', content: () => <div>

      <div className='cam-lower-sec'>
        <h1 className='title'>Benefits of the IB Diploma Programme</h1>
        <p>IB Diploma Programme encourages students to think critically and develop international mindedness considering both local and global contexts. It provides a liberal combination of subjects. An IBDP student is recognized by universities as an intelligent, well-organized, hard-working, critical thinker with a global perspective.</p>
        <p>The learner profile and the IB DP core requirements of Theory of Knowledge (TOK), the Extended Essay and Creativity, Action, Service (CAS) broaden the educational experience and challenge students to apply their knowledge and understanding i n real-life contexts.</p>
        <p>For more information please visit at: <Link to='https://www.ibo.org/benefits/benefits-for-students/'><b>Benefits for universities</b></Link></p>
       
        {/* <h5 className='cam-title-heading' >The IGCSE is a two-year course of study available to students at Sanskar in Classes IX and X. The following are the subject Choices for Classes IX and X:</h5>
     */}


      </div>


    </div> },
    { title: 'University Recognition', content: () => <div>

      <div className='cam-lower-sec'>
        <h1 className='title'>University Recognition</h1>
        <p>The IB Diploma Programme is highly recognized by Universities across the world. However it is recommended that students check with universities before applying.</p>
        <p>For more information please visit at: <Link to='https://www.ibo.org/benefits/benefits-for-students/'><b>Benefits of IB for students</b></Link></p>
        <p>For more information please visit at: <Link to='https://www.ibo.org/programmes/diploma-programme/what-is-the-dp/pathway-to-university-and-employment'><b>Pathway to university and employment</b></Link></p>
        {/* <h5 className='cam-title-heading' >The IGCSE is a two-year course of study available to students at Sanskar in Classes IX and X. The following are the subject Choices for Classes IX and X:</h5> */}
    

      </div>


    </div> },
    { title: 'FAQs about IB in India', content: () => <div>

      <div className='cam-lower-sec'>
        <h1 className='title'>FAQs about IB in India</h1>
        <p>Yes. The Association of Indian Universities (AIU) recognizes the IB Diploma as equivalent to the Plus Two (10+2) Class of the Senior Secondary School, which is the eligibility criterion for admission to the undergraduate courses in India. The IB issues Indian equivalent percentages for the IBDP grades to those students who intend to apply to Indian universities. Admission to most university courses in India is based on the academic achievement in Class 12 or an entrance exam. Entry requirements vary between universities and courses. Upon release of their results, DP students can apply for an equivalence certificate from AIU or apply directly to the eligibility department of the university they wish to attend. As universities in India require a hard copy of the AIU document detailing percentage equivalency, the IB forwards these documents to the school’s DP Coordinator upon request. To request this service; students must notify their DP Coordinator of their intention to gain entrance into an Indian university.</p>
      
        <p>For more information please visit at: <Link to='https://sanskarjpr.com/images/FAQ_About_IB.pdf'>Frequently asked questions</Link></p>
      </div>


    </div> },
    { title: 'India Recognition Guide', content: () => <div>

      <div className='cam-lower-sec'>
        <h1 className='title'>India Recognition Guide</h1>
        <p>The IBDP curriculum certainly equips students with the skills and knowledge required in the entrance examinations, but at the same time demands the students to devote substantial time to their IBDP courses. Most of the professional institutes conduct entrance exams for selection between April - June, while the IBDP examinations are held in May. Also the students must be aware of the subject requirements for professional courses in India for Engineering and Medicine.</p>
        <p>For more information please visit at: <Link to='https://sanskarjpr.com/images/IB_India.pdf'>Frequently asked questions</Link></p>
 
  
  
      </div>


    </div> },

  
  ];
  return (
    <div>
      
      <div className='ibdp-data'>

 <HorizontalTabs tabs={tabs} />
    </div>
    </div>
  )
}

export default ibdp
