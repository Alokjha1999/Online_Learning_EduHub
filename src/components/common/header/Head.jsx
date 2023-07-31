import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>EduHub</h1>
            <span> Empowering the Future of Knowledge </span>
          </div>

          <div className='social'>
          <a href="https://www.facebook.com/alokkashyap1828" target="_blank" rel="noopener noreferrer">
            <i className='fab fa-facebook-f icon'></i></a>


            <a href="https://www.linkedin.com/in/ak28" target="_blank" rel="noopener noreferrer">
            <i className='fab fa-linkedin icon'></i></a>

            <a href="https://instagram.com/thenextgenboyo?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D" target="_blank" rel="noopener noreferrer">
            <i className='fab fa-instagram icon'></i></a>

            <a href="https://www.youtube.com/@Thenextgenboyo" target="_blank" rel="noopener noreferrer">
            <i className='fab fa-youtube icon'></i></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
