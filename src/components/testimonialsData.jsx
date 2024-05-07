import React from 'react'
import Carousel from "react-multi-carousel";
import  "react-multi-carousel/lib/styles.css";




function testimonialsData() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          partialVisibilityGutter: 40,
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          partialVisibilityGutter: 40,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div>
    <Carousel responsive={responsive}
    
    itemClass="carousel-item-padding-40-px"
    transitionDuration={500}
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={1500}
    swipeable={true}
    >
    <div className='testimonilaBox'>
    <h5  className='parentsname' >Mother of Harsh Bareja,Class 4B</h5>
    
    <p className='parentstext'>The relationship between a teacher and his students is one of the most influential factors in a learning environment, A key element affecting students’ progress, Engagement of school and academic motivations!</p>
    </div>
    <div className='testimonilaBox'>
    <h5  className='parentsname'>Rashmi Dugar, Mother of Arohi Dugar, Grade 5</h5>
    <p className='parentstext'>Such a interactive and enthusiastic session! So happy that my child is in such wonderful hands… more power to teachers like you.</p>
    </div>
    <div className='testimonilaBox'>
    <h5  className='parentsname'>Sonu Jyanni, Mother of Aaryush Singh</h5>
    <p className='parentstext'>I want to thank you Ma’am. Aarush was very shy and was scared to speak his mind in front of others. But the way you communicate with him and make him speak his mind, he is improving. Now, I see a lot of change in his behaviour.</p>
    </div>
    <div className='testimonilaBox'>
    <h5  className='parentsname'>Mr. Ashok Sharma and Mrs. Ashita Sharma, Parents of Aryansh Sharma</h5>
    <p className='parentstext'>We’re extremely thankful for efforts made by the teachers and the way they are dealing with the children in the present situation.</p>
    <p className='parentstext'>As a parent, we’re eager to extend any support and happy to co-operate as much as we can.</p>
    </div>
    <div className='testimonilaBox'>
    <h5 className='parentsname'>Kiran Shekhawat, Mother of Kashika Rathore, Class 5A</h5>
    <p className='parentstext'>A special thanks to all the teachers at sanskarjaipur who are doing tremendous job of taking online classes, checking messages, responding to students queries 24/7. I myself specially attend maths classes by Poornima ma’am. She makes maths a lovable subject. Kashika has started enjoying maths classes.Thank you teaches.</p>
    </div>

  </Carousel>
    </div>
  )
}

export default testimonialsData
