import React from 'react'
import HomeComponent from '../components/HomeComponent'
import { Link } from 'react-router-dom';

import StudentCounter from '../components/studentCounter'
import TestimonialsData from '../components/testimonialsData';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import '../css/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function home() {
  return (
    <div className='home-data'>

      <div className='hero-data'>
       <img src="../img/Sanskar-School-Red-Building-New.webp"/>
      </div>

      <div className='school-program'>
       <div className='school-program-img'>
        <div className='program-inner-img'>
        <img src="../img/british-council.webp"/>
        </div> 
        <div className='program-inner-img'>
        <img src="../img/ib-logo-new.webp"/>
        </div> 
        <div className='program-inner-img'>
        <img src="../img/pyp-programme-logo.webp"/>
        </div> 
        <div className='program-inner-img'>
        <img src="../img/cambridge-2.webp"/>
        </div> 
       </div>
       <div className='cbse-btn'>
       <Link to="https://www.sanskarjaipur.com"> For CBSE Curriculum</Link>
       </div>
      </div>

     <div className='school-welcome-box'>
      <div className='left-side-box'>
      <h3>Welcome to</h3>
      <h2>Sanskar School</h2>
      <p>Sanskar School imparts high quality education through its International Curriculum namely:</p>
      <ul>
        <li>The International Baccalaureate Primary Years Programme (IB PYP)</li>
        <li>The International Baccalaureate Diploma Programme (IBDP)</li>
        <li>The Cambridge Secondary I (Checkpoint)</li>
        <li>The Cambridge Secondary II (IGCSE)</li>
      </ul>
      <p>Sanskar is a well ordered, caring international school in which relationships are based on mutual respect, and rules are applied consistently and fairly.</p>
      <p>We value the pursuit of academic excellence, the achievement of the individuals’ potential and contributions made to the life of the wider community.</p>
      <p>We encourage our children to develop self-discipline and respect and value the achievements, values and beliefs of others. We help our children to understand themselves and others, and to seek significance and purpose in all their experiences.</p>
      <p>Our values are reflected in all our policies and in the attitudes and conduct of our staff.</p>
      <p>Sanskar is a modern, high-tech, air cooled school runs in three massive four storey buildings in the same campus. It has spacious Libraries, Auditorium, Students' Resource Centre, Physics, Chemistry, Biology, Geography, Psychology, Computer and Mathematics Laboratories. The huge classrooms and Activity Rooms are the children's pride. Art, Craft, Music, Dance, Computer rooms, Amphitheatre and the sprawling play fields for various games, sports activities have all necessary aids and facilities helpful in making learning joyful. The school has all the necessary modern amenities and latest teaching aids. Use of Digital boards in every classroom make the school techno savvy. Students love the multimedia teaching system which enhances their understanding of every concept however complex it may seem. Enveloped by trees, the school offers a desirable setting very close to nature, so necessary for the healthy growth of children.
      </p>
      </div>
      <div className='right-side-box'>
      <div className='video-box'>
      <video  loop="true" autoplay="autoplay" controls muted>
      <source src="../img/video1.mp4" type="video/mp4"/>
      </video>
      </div>
      </div>
     </div>

     <div className='principal-desk-sec'>
      <div className='left-side'>
      <div className='img-box'>
      <img src="../img/Girdhar-Kumari2.webp"/>
      </div>
      </div>
      <div className='right-side'>
      <div className='content-box'>
        <h2>Principal’s Desk</h2>
        <p>“At Sanskar, we believe that the true goal of education is to build knowledge as well as character of our students by enabling them to think intensively and critically.” </p>
      <h3>Ms. Girdhar Kumari</h3>
      <p></p>
        </div>
      </div>
     </div>

     <div className='newsfeeds-sec'>
      <div className='newsfeeds-heading'>
        <h3><span>TRENDING</span> @ Sanskar SCHOOL Jaipur</h3>
        <h1>NEWSFEED</h1>
        </div>

        <div className='newsfeeds-row'>
          <div className='news-left-box'>
          <div className='left-news-list'>
           <Link to='' >
            <img src='../img/news-ltter-img.jpeg'/>
            <div className='news-name'>
            <h5 className='news-heading'>Sanskar School students were a part of the 'Baghodaya' Conservation Conclave</h5>
            <p className='news-date'>04/09/2023</p>
            </div>
           
           </Link>
          </div>
          <div className='left-news-list'>
           <Link to='' >
            <img src='../img/we.jpeg'/>
            <div className='news-name'>
            <h5 className='news-heading'>Woman Entrepreneur of the year 2024' by Financial Express and Indusland Bank</h5>
            <p className='news-date'>21/03/2024</p>
            </div>
           </Link>
          </div>
          </div>
          
          <div className='news-right-box'>
          <div className='news-list'>
          {/*<div className='news'>*/}
          <div className='news-img'><img src='../img/Graduation-Ceremony.jpg'/></div>
          <div className='news-name'>
          <h5 className='news-heading'>Graduation Ceremony</h5>
            <p className='news-date'>03/02/2024</p>
          </div>
          </div>
         {/* </div> */}
          <div className='news-list'>
          {/*<div className='news'>*/}
          <div className='news-img'><img src='../img/Graduation-Ceremony.jpg'/></div>
          <div className='news-name'>
          <h5 className='news-heading'>Graduation Ceremony</h5>
            <p className='news-date'>03/02/2024</p>
          </div>
          </div>
          {/* </div> */}
          <div className='news-list'>
         {/*<div className='news'>*/}
          <div className='news-img'><img src='../img/Graduation-Ceremony.jpg'/></div>
          <div className='news-name'>
          <h5 className='news-heading'>Graduation Ceremony</h5>
            <p className='news-date'>03/02/2024</p>
          </div>
          </div>
          <div className='news-list'>
         {/*<div className='news'>*/}
          <div className='news-img'><img src='../img/Graduation-Ceremony.jpg'/></div>
          <div className='news-name'>
          <h5 className='news-heading'>Graduation Ceremony</h5>
            <p className='news-date'>03/02/2024</p>
          </div>
          </div>
          {/* </div> */}
         
         
        </div>
        </div>
        <div className='all-new-btn-box'>
        <Link to=""> view all</Link>
        </div>
     
     </div>

     <div className='student-data'>
     <StudentCounter/>
     </div>

    <div className='nextstep'>
      <div className='nextstep-innerbox'>
      <div className='leftside'>
      <div className='img-box'>
      <img src='../img/ttns.jpeg'/>
      
      </div>
      </div>
      <div className='rightside'>
      <div className='rigth-side-innerbox'>
      <Link to="">Enquiry <FontAwesomeIcon icon={faPaperPlane} /></Link>
      <Link to="">Admission <FontAwesomeIcon icon={faFile} /></Link>
      <Link to="">Get Direction <FontAwesomeIcon icon={faLocationDot}/> </Link>
      </div>
      </div>
    </div>
    </div>

    {/* <div className='open-admission'>
     <h2>Admission open for <span>for IBDP/IBCP 24-25</span></h2>
     <p>Get in touch with us to discuss:</p>
     <Link to="">+91 9876543210</Link>
  </div>*/}
     

     <div className='testimonials'>
     <h2>testimonials</h2>
     <TestimonialsData/>
     </div>



     {/*<HomeComponent/>*/  }

    </div>
  )
}

export default home
