import React from "react";
import "./footer.css";

function Footer(){
 return ( <div className="footer">
     <div className="footer-left"> 
     <img className="footer-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />

     </div>
     <ul className="footer-right">
         <li> 
             <ul className="box">
                 <li><a href="/"> Voice Over and Subtitle  </a> </li>
                 <li><a href="/"> Media Center </a> </li>
                 <li><a href="/"> Privacy </a> </li>
                 <li><a href="/"> Contact us </a> </li>
                 
             </ul>
         </li>
         <li> 
             <ul className="box">
                 <li><a href="/"> Voice Description </a> </li>
                 <li><a href="/"> Investor Relations </a> </li>
                 <li><a href="/"> Legal Provision </a> </li>
                 
             </ul>
         </li>
         <li> 
             <ul className="box">
                 <li><a href="/"> Help center </a> </li>
                 <li><a href="/"> Job opportunities </a> </li>
                 <li><a href="/"> Cookie Preferences </a> </li>
                 
             </ul>
         </li>
         <li> 
             <ul className="box">
                 <li><a href="/"> Gift Cards </a> </li>
                 <li><a href="/"> Terms of Use </a> </li>
                 <li><a href="/"> Corporate Information </a> </li>
                 
             </ul>
         </li>
     </ul>
     <div className="footer-bottom" > <ul className="copyright">
         <li> &copy; 1997 - 2021 Netflix Inc.</li>
         </ul>
         <ul className="socials icons">
             <li>   
        <a href="/" ><i className="fa fa-facebook"></i> </a>
        <a href="/"><i className="fa fa-twitter"></i> </a>
        <a href="/"><i className="fa fa-vimeo-square"></i> </a>
        <a href="/"><i className="fa fa-youtube"></i> </a>
        </li>
         </ul> 
         <ul className="footer-dev-name"><li>Designed by  <a href="https://www.linkedin.com/in/ajmalnasumudeen/" target="blank">Ajmal Nasumudeen</a> </li></ul>
         </div>
 </div> )
}
export default Footer;