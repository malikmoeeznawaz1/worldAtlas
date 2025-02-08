import footerData from '../../api/footerApi.json'
import {IoCallSharp} from "react-icons/io5"
import {MdPlace} from "react-icons/md"
import {TbMailPlus} from "react-icons/tb"

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
  </footer>
}

export default Footers