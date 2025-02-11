import footerData from '../../api/footerApi.json'
import {IoCallSharp} from "react-icons/io5"
import {MdPlace} from "react-icons/md"
import {TbMailPlus} from "react-icons/tb"

import { NavLink } from 'react-router-dom'

const Footers = () => {

  const footerIcon = {
    MdPlace: <MdPlace/>,
    TbMailPlus: <TbMailPlus/>,
    IoCallSharp: <IoCallSharp/>
  }

  return <footer className="footer-section">
    <div className="grid grid-three-cols container">
      {
        footerData.map((currData, index)=>{
          const {icon, title, details} = currData;
          return(
            <div className="footer-contact" key={index}>
              <div className="icon">{footerIcon[icon]}</div>
              <div className="footer-contact-text">
                <p>{title}</p>
                <p>{details}</p>
              </div>
            </div>
          )
        })
      }
    </div>

    <div className="copyright-area">
        <div className="container">
          <div className="grid grid-two-cols">
            <div className="copyright-text">
              <p>
                Copyright &copy; 2024, All Right Reserved
                <NavLink to="https://moeezsolutions.netlify.app/" target="_blank">
                  MoeezSolutions
                </NavLink>
              </p>
            </div>

            <div className="footer-menu">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>

                <li>
                  <NavLink
                    to="https://www.instagram.com/malikmoeeznawaz?igsh=ZXZxam43OWVraHVt"
                    target="_blank"
                  >
                    Social
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="https://github.com/malikmoeeznawaz1/worldAtlas"
                    target="_blank"
                  >
                    Source Code
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  </footer>
}

export default Footers