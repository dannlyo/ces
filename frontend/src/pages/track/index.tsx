import { useState } from 'react'
import Footer from '../../components/foot'
import Topbar from '../../components/topbar'
import '../../scss/index.scss'
import './styles.scss'

function Track() {
  const [search, setSearch] = useState('')
  const result = {
    title: "Blocked Road Due to Landslide locked Road Due to Landslide locked Road Due to Landslide",
    description: "There is a landslide that has blocked the main road to the city center. Urgent assistance is needed.",
    submissionDate: "May 17, 2025",
    respondedDate: "May 18, 2025",
    status: "Pending",
    submitterEmail: "jane.doe@example.com",
    agency: "Public Works Department",
    response: "Our team has been dispatched and the road is now cleared. Thank you for your report."
  };
  return (
    <>
      <Topbar />
      <div className="main">
        <div className="track">
          <div className="search">
            <input 
              type="text"
              placeholder='Enter the whole ID to track your submission'
              required
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button>
              Search
            </button>
          </div>
          <div className="submission-view">
            <div className="header">
              <h2>{result.title}</h2>
              <span className={`status ${result.status.toLowerCase()}`}>
                {result.status}
              </span>
            </div>

            <div className="meta">
              <div>
                <strong>Submitted:</strong> {result.submissionDate}
              </div>
              {result.respondedDate && (
                <div>
                  <strong>Responded:</strong> {result.respondedDate}
                </div>
              )}
            </div>

            <div className="section">
              <h4>Description</h4>
              <p>{result.description}</p>
            </div>

            <div className="section">
              <h4>Agency</h4>
              <p>{result.agency}</p>
            </div>

            <div className="section">
              <h4>Submitted By</h4>
              <p>{result.submitterEmail}</p>
            </div>

            {result.response && (
              <div className="response-section">
                <h4>Agency Response</h4>
                <div className="response-box">
                  {result.response}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Track