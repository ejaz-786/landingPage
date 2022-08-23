import React from 'react'
import '../CSS/Second_landing_page.css'

const SecondLandingPage = () => {
  return (
    <>
     <div className='jumbotron'>
        <div id='logo'>

            <div><img src='https://university.adespresso.com/wp-content/themes/ae-brew-child/library/images/logo-university.png' alt='asfas' id='logo-img'/></div>
            <div>
                <button id='sub'>SUBSCRIBE</button> <span style={{color:"white",fontWeight:"bold",marginRight:"10px"}}>OR</span>
                <button id='login'>LOGIN</button>
            </div>

        </div>
        <div className='jumbotron-1'>

            <div id='left'>
                <h1>Want to make Face Advertising easy again ?</h1>
                <h3>Welcome Adespresso University !!</h3>
            </div>

            <div id='right'>
                <img src='https://university.adespresso.com/wp-content/themes/ae-brew-child/library/images/ico/dude-graduated.png' alt='sdfasf' id='logo-2'/>
            </div>

        </div>
     </div>

     <div className='image-div'>
        <div className='image-list'>
            <div>
                <img src={require('../CSS/pic01.png')}
                 alt='#alkj' id='img-list'/>
                 <h3 style={{color:"purple"}}>VIDEO COURSES</h3>
                 <p style={{color:"purple"}}>Watch full courses focused on specific topics and themes. unlock the knowledge you need when want to.</p>
            </div>
            <div>
              <img src={require('../CSS/pic02.png')}
                 alt='#alkj' id='img-list'/>
                 <h3 style={{color:"purple"}}>LIVE WEBINARS</h3>
                 <p style={{color:"purple"}}>Watch full courses focused on specific topics and themes. unlock the knowledge you need when want to.</p>
            </div>
            <div>
            <img src={require('../CSS/pic03.png')}
                 alt='#alkj' id='img-list'/>
                 <h3 style={{color:"purple"}}>AD GALLERY</h3>
                 <p style={{color:"purple"}}>Watch full courses focused on specific topics and themes. unlock the knowledge you need when want to.</p>
            </div>
           <div>
           <img src={require('../CSS/pic04.png')}
                 alt='#alkj' id='img-list'/>
                 <h3 style={{color:"purple"}}>EXPERIMENTS</h3>
                 <p style={{color:"purple"}}>Watch full courses focused on specific topics and themes. unlock the knowledge you need when want to.</p>
           </div>
        </div>

     </div>

     <div className='last-div'>
        <div id='last-div'>
        <p id='para'> Social marketin changes all the time :there are things hard to identify , things hard to learn , things hard to execute, That's why we created a premium space for you to be at the forefront of what's new and exciting. </p>
        </div>
     </div>
    </>
  )
}

export default SecondLandingPage
