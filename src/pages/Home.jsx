import { FaLongArrowAltRight } from "react-icons/fa";

const Home = () => {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">
            Explore the werld, One Country at a Time. 
          </h1>
          <p className="paragraph">
            Discovr the history, culture, and beauty of every nation. Sort, Search and filter through countries to find the details you want.
           </p>
           <button className="btn btn-darken btn-inline bg-white-box">
            Start Exploring <FaLongArrowAltRight />
           </button>
        </div>
        <div className="hero-image">
          <img src="/images/world.png" alt="" className="banner-image" />
        </div>
      </div>
    </main>
  )
}

export default Home