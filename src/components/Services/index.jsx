import React, { useEffect, useRef } from 'react'
import "./Services.css"
import { FaPaintBrush } from 'react-icons/fa'
import { BsCodeSquare } from 'react-icons/bs'
import { TfiWrite } from 'react-icons/tfi'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

const Services = () => {
  const container = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  useEffect(()=>{
    const el= container.current
    gsap.fromTo('.service__head',{
      opacity:0,
    },
    {
      opacity:1,
      scrollTrigger:{
        trigger:el,
      }
    }
  )

  gsap.fromTo(".service",{
    y:-50,
    opacity:0,
  },
  {
    y:0,
    opacity:1,
    duration:1,
    scrollTrigger:{
      trigger:el,
      start:"-100% bottom",
      end:"bottom 20%",
      scrub:true
    }
  }
  )
  },[])
  return (
    <section id='services' ref={container}>
       <div className="section__wrapper services__wrapper">
          <div className="section__header center">
            <h2 className="primary__title">Services</h2>
            <p className="text__muted description">
                I transform your ideas, and consequently your desires, into a 
               distinctive web project that both inspires you and captivates your customers.
            </p>
          </div>

          <div className="services__group">
            {/* End ui/ux */}
           
            <article className="service" style={{"--color-primary":"var(--color-success)"}}>
              <div className="service__top">
                <div className="icon__container">
                  <BsCodeSquare className="icon"/>
                </div>
                <h3 className="title">Web Development</h3>
              </div>
              <div className="service__middle">
                <p className="text__muted description">
                  Web development is the process of creating, building, and maintaining websites and web applications. It involves various aspects, including web design, programming, and database management. Web development is typically divided into frontend, backend, and full-stack development. 
                </p>
              </div>
              <div className="service__bottom">
                <button className="btn btn__primary">Read more</button>
              </div>
            </article>
            {/* End Web development */}


            <article className="service" style={{"--color-primary":"blueviolet"}}>
              <div className="service__top">
                <div className="icon__container">
                  <TfiWrite className="icon"/>
                </div>
                <h3 className="title">Content Creation</h3>
              </div>
              <div className="service__middle">
                <p className="text__muted description">
                Web development content creation encompasses the process of researching, creating, organizing, and editing information for a website, including text, images, video, and other digital assets. It's the crucial aspect of transforming a website's structure and design into engaging, informative, and functional pages for users. 
                </p>
              </div>
              <div className="service__bottom">
                <button className="btn btn__primary">Read more</button>
              </div>
            </article>
            
            {/* End content creation */}
          </div>
       </div>
    </section>
  )
}

export default Services
