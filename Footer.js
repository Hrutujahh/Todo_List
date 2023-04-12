import React from 'react'

const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "10vh",
    width: "100%",
    border:"2px solid white"
  }
  return (
    <footer className='bg-dark text-light my-5' style={footerStyle}>
      <p className="text-center">
      Copyright &copy; MyTodosList.com
      </p>
    </footer>
  )
}

export default Footer
