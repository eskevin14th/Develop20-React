import React from 'react'
import './aboutMe.css'
import person from '../../images/kevin3.png'

function AboutMe() {
  return (
    <div className="about__container" id="about-me">
     <div>
      <img src={person} alt="person icon"/>
     </div>
     <div className="about__text">
       <h1>ABOUT ME</h1>
       <p>A little about myself Im originally from Los Angeles more specifically SouthGate to be exact. I grew up a huge sports fan rooting for all the LA teams. I moved out to Arizona when I was young about 8 years old. My hobbies include playing and watching sports cooking out with friends and family. And I have hopes of traveling all over the world. Also I just recently discoverd coding which im starting to enjoy more and more and I look forward to having a bright future in coding. And can't wait too see what career path and journey I begin on.</p>
     </div>
    </div>
  )
}

export default AboutMe
