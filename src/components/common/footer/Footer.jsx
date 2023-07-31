import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Don't miss out on the opportunity to join our community that is dedicated to continuous improvement and success.</h1>
            <span>Our mission is to unleash your full potential by providing you with the knowledge, tools, and motivation you need to thrive in every aspect of life</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className=' fafa-solid fa-envelope'></i> 
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>EduHub</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p>EduHub is an innovative and comprehensive online learning platform that aims to revolutionize the way people acquire knowledge and skills.</p>
            <a href="https://www.facebook.com/alokkashyap1828" target="_blank" rel="noopener noreferrer">
            <i className='fab fa-facebook-f icon'></i></a>


            <a href="https://www.linkedin.com/in/ak28" target="_blank" rel="noopener noreferrer">
            <i className='fab fa-linkedin icon'></i></a>

            <a href="https://instagram.com/aloktechnology?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer">
            <i className='fab fa-instagram icon'></i></a>

            <a href="https://github.com/alokjha1999" target="_blank" rel="noopener noreferrer">
            <i className='fab fa-github icon'></i></a>
          </div>
          <div className='box link'>
            <h3>Discover</h3>
            <ul>
              <li>About Us</li>
              <li>Our Services</li>
              <li>Explore Courses</li>
              <li>Insights & Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Helpful Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>View Pricing</li>
              <li>Terms & Privacy</li>
              <li>FAQs</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                Viman Nagar 411014,Pune, Maharshtra INDIA
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +91 8709 488 019
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                jhaalok305@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2023 All rights reserved |  <i className='fa fa-globe'></i> by Alok Technology
        </p>
      </div>
    </>
  )
}

export default Footer
