import { useNavigate } from 'react-router-dom'
import Footer from '../components/foot'
import Topbar from '../components/topbar/index'
import '../scss/index.scss'
import { useState } from 'react'
import { useEffect } from 'react'
import { getSiteInfo } from '../apis/site'

function App() {
    const navigate = useNavigate()
    const [siteInfo, setSiteInfo] = useState<any>({})
    const fetchSiteInfo = async () => {
        const res = await getSiteInfo()
        if (res.status === 'success') {
            setSiteInfo(res.data)
        }
    }
    useEffect(() => {
        fetchSiteInfo()
    }, [])
  return (
    <>
      <Topbar />
      <div className="main">
        <div className="hero">
            <h1>Your Voice <span>Matters</span></h1>
            <p>Submit feedback, report issues, and help improve public services in your community.</p>
            <div className="hero-buttons">
                <button className='primary' onClick={() => navigate('/submission')}>Submit Feedback</button>
                <button className='secondary' onClick={() => navigate('/track')}>Track your feedback</button>
            </div>
        </div>
        <div className="home-stats">
            <div className="stat-card">
                <div className="stat-card-icon">
                    <svg fill="#000000" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs></defs><title>report--alt</title><rect x="10" y="18" width="8" height="2"></rect><rect x="10" y="13" width="12" height="2"></rect><rect x="10" y="23" width="5" height="2"></rect><path d="M25,5H22V4a2,2,0,0,0-2-2H12a2,2,0,0,0-2,2V5H7A2,2,0,0,0,5,7V28a2,2,0,0,0,2,2H25a2,2,0,0,0,2-2V7A2,2,0,0,0,25,5ZM12,4h8V8H12ZM25,28H7V7h3v3H22V7h3Z"></path><rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" style={{fill: 'none'}} width="32" height="32"></rect></g></svg>
                </div>
                <h2>{siteInfo.submission_count || 0}+</h2>
                <p>Feedback Submissions</p>
            </div>
            <div className="stat-card">
                <div className="stat-card-icon">
                    <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#0fc50f"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>ic_fluent_comment_resolve_24_regular</title> <desc>Created with Sketch.</desc> <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="ic_fluent_comment_resolve_24_regular" fill="#0d980d" fill-rule="nonzero"> <path d="M12.0225923,2.99879075 C11.7257502,3.46221691 11.4861106,3.96580034 11.3136354,4.49957906 L5.25,4.5 C4.28350169,4.5 3.5,5.28350169 3.5,6.25 L3.5,14.75 C3.5,15.7164983 4.28350169,16.5 5.25,16.5 L7.49878573,16.5 L7.49985739,20.2505702 L12.5135149,16.5 L18.75,16.5 C19.7164983,16.5 20.5,15.7164983 20.5,14.75 L20.5010736,12.2672297 C21.0520148,11.9799518 21.5566422,11.6160435 22.0008195,11.1896412 L22,14.75 C22,16.5449254 20.5449254,18 18.75,18 L13.0124851,18 L7.99868152,21.7506795 C7.44585139,22.1641649 6.66249789,22.0512036 6.2490125,21.4983735 C6.08735764,21.2822409 6,21.0195912 6,20.7499063 L5.99921427,18 L5.25,18 C3.45507456,18 2,16.5449254 2,14.75 L2,6.25 C2,4.45507456 3.45507456,3 5.25,3 L12.0225923,2.99879075 Z M17.5,1 C20.5375661,1 23,3.46243388 23,6.5 C23,9.53756612 20.5375661,12 17.5,12 C14.4624339,12 12,9.53756612 12,6.5 C12,3.46243388 14.4624339,1 17.5,1 Z M20.1464558,4.14642633 L16.0541062,8.23877585 L14.9000091,6.69997972 C14.7343237,6.47906582 14.420923,6.4342943 14.2000091,6.59997972 C13.9790952,6.76566515 13.9343237,7.07906582 14.1000091,7.29997972 L15.6000091,9.29997972 C15.782574,9.54339946 16.1384079,9.5686878 16.3535625,9.35353311 L20.8535625,4.85353311 C21.0488247,4.65827097 21.0488247,4.34168848 20.8535625,4.14642633 C20.6583004,3.95116419 20.3417179,3.95116419 20.1464558,4.14642633 Z" id="🎨-Color"> </path> </g> </g> </g></svg>
                </div>
                <h2>{siteInfo.resolved_count || 0}</h2>
                <p>Resolved Issues</p>
            </div>
            <div className="stat-card">
                <div className="stat-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 22V14M5 14V4M5 14L7.47067 13.5059C9.1212 13.1758 10.8321 13.3328 12.3949 13.958C14.0885 14.6354 15.9524 14.7619 17.722 14.3195L17.8221 14.2945C18.4082 14.148 18.6861 13.4769 18.3753 12.9589L16.8147 10.3578C16.4732 9.78863 16.3024 9.50405 16.2619 9.19451C16.2451 9.06539 16.2451 8.93461 16.2619 8.80549C16.3024 8.49595 16.4732 8.21137 16.8147 7.64221L18.0932 5.51132C18.4278 4.9536 17.9211 4.26972 17.2901 4.42746C15.8013 4.79967 14.2331 4.69323 12.8082 4.12329L12.3949 3.95797C10.8321 3.33284 9.1212 3.17576 7.47067 3.50587L5 4M5 4V2" stroke="#047ac9" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                </div>
                <h2>{siteInfo.agency_count || 0}</h2>
                <p>Agencies</p>
            </div>
            
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

export default App
