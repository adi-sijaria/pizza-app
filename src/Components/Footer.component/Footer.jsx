import React from 'react'
import "./Footer.scss"
const Footer = () => {
  return (
    <div className='footer-component'>
        <div className="footer">
            <h1 className='footer-headings'>About Us</h1>
            <ul className='footer-data'>
                <li >
                    Established: 20-03-2023

                    
                </li>

                <li>
                    Founder: Aditya Sijaria

                    
                </li>

                <li>
                    location india
                    
                </li>

            </ul>
            
        </div>
        <div className="footer">
        <h1 className='footer-headings'>outlets</h1>
            <ul className='footer-data'>
                <li>
                    72 vijay nagar,indore,indore

                    
                </li>

                <li>
                    72 gandhi nagar ,indore

                    
                </li>

                <li>
                    89 Airport road, indore
                    
                </li>

            </ul>
            
            
        </div>
        <div className="footer">
        <h1 className='footer-headings'>Contact-Us</h1>
            <ul className='footer-data'>
                <li>
                    
                     <email>p@yopmail.com</email>

                    
                </li>

                <li>
                    07313030

                    
                </li>

                <li>
                    comment
                    
                </li>

            </ul>
            
        </div>
        
      
    </div>
  )
}

export default Footer
