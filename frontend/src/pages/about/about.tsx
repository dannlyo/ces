import { useState } from 'react'
import Footer from '../../components/foot'
import Topbar from '../../components/topbar'
import '../../scss/index.scss'
import './styles.scss'

function About() {
  const [activeTab, setActiveTab] = useState('who-we-are')
  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
  }
  return (
    <>
      <Topbar />
      <div className="main">
        <div className="about-us">
          <h1>More <span>About Us</span></h1>
          <div className="tabs">
            <div className={`tab ${activeTab === 'who-we-are' ? 'active' : ''}`} onClick={() => handleTabClick('who-we-are')}>Who we are</div>
            <div className={`tab ${activeTab === 'our-mission' ? 'active' : ''}`} onClick={() => handleTabClick('our-mission')}>Our Mission</div>
            <div className={`tab ${activeTab === 'our-vision' ? 'active' : ''}`} onClick={() => handleTabClick('our-vision')}>Our Vision</div>
          </div>
          {activeTab === 'who-we-are' && <div className="tab-content">
            <p>We are a civic-minded tech initiative committed to transforming how citizens interact with public services. Our platform empowers individuals to voice their concerns, submit feedback, and track government responsiveness in real-time. By bridging the communication gap between citizens and agencies, we promote transparency, accountability, and more responsive governance. We believe that a well-connected society starts with empowered voices and an open government.</p>
          </div>}
          {activeTab === 'our-mission' && <div className="tab-content">
            <p>Our mission is to simplify and streamline citizen engagement with public institutions. We aim to provide a reliable and accessible platform where every complaint, suggestion, or compliment is heard, categorized, and routed to the right authority for prompt action. By doing so, we help government agencies understand community needs and respond more effectively.</p>
          </div>}
          {activeTab === 'our-vision' && <div className="tab-content">
            <p>We envision a future where citizen feedback plays a central role in shaping public services. Our goal is to foster a culture of open dialogue between governments and their communities—where every citizen feels heard, and every institution is empowered to improve. Through technology, we strive to make civic participation easy, impactful, and inclusive for all.</p>
          </div>}
        </div>
        <div className="how-it-works">
            <h2>How it works</h2>
            <div className="steps">
                <div className="step">
                    <div className="icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_15_829)"> <rect width="24" height="24" fill="white"></rect> <path d="M19.364 5.05026L3.10051 8.58579L10.8787 13.5355M19.364 5.05026L15.8284 21.3137L10.8787 13.5355M19.364 5.05026L10.8787 13.5355" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_15_829"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>
                    </div>
                    <h3>Submit feedback</h3>
                    <p>Share your thoughts and suggestions with the relevant agency</p>
                </div>
                <div className="arrow">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="none" stroke="#000000" stroke-width="2" d="M6,12.4 L18,12.4 M12.6,7 L18,12.4 L12.6,17.8"></path> </g></svg>
                </div>
                <div className="step">
                    <div className="icon">
                        <svg version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path className="linesandangles_een" style={{fill: '#000000'}} d="M16,8c-2.757,0-5,2.243-5,5s2.243,5,5,5s5-2.243,5-5S18.757,8,16,8z M16,16 c-1.654,0-3-1.346-3-3s1.346-3,3-3s3,1.346,3,3S17.654,16,16,16z M16,6c3.86,0,7,3.14,7,7c0,5.271-4.719,10.256-7.009,12.365 C13.299,22.889,9,17.901,9,13C9,9.14,12.14,6,16,6 M16,4c-4.971,0-9,4.029-9,9c0,8,9,15,9,15s9-6.984,9-15C25,8.029,20.971,4,16,4 L16,4z"></path> </g></svg>
                    </div>
                    <h3>Route</h3>
                    <p>Your submission is automatically routed to the appropriate government agency</p>
                </div>
                <div className="arrow">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="none" stroke="#000000" stroke-width="2" d="M6,12.4 L18,12.4 M12.6,7 L18,12.4 L12.6,17.8"></path> </g></svg>
                </div>
                <div className="step">
                    <div className="icon">
                        <svg version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path className="linesandangles_een" style={{fill: '#000000'}} d="M16,4C9.925,4,5,8.925,5,15v13h7V15c0-2.209,1.791-4,4-4s4,1.791,4,4v13h7V15 C27,8.925,22.075,4,16,4z M10,26H7v-2h3V26z M25,26h-3v-2h3V26z M25,22h-3v-7c0-3.308-2.692-6-6-6s-6,2.692-6,6v7H7v-7 c0-4.963,4.037-9,9-9s9,4.037,9,9V22z"></path> </g></svg>
                    </div>
                    <h3>Track your feedback</h3>
                    <p>Monitor the status of your submission and receive updates as it progresses</p>
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About
