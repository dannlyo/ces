// import { useState } from 'react'
import { useState } from 'react'
import Footer from '../../components/foot'
import Topbar from '../../components/topbar'
import '../../scss/index.scss'
import './styles.scss'
import { submitComplaint } from '../../apis/submissions'
import toast, { Toaster } from 'react-hot-toast'

function Submission() {
  const [isLoading, setIsLoading] = useState(false)
  const [payload, setPayload] = useState({
    email: '',
    title: '',
    message: '',
    agency_id: ''
  })
  const handleSubmit = (e: any) => {
    e.preventDefault()
    setIsLoading(true)
    toast.promise(
      submitComplaint(payload),
      {
        loading: 'Submitting...',
        success: <p style={{ fontSize: '0.8rem', textAlign: 'center'}}>Feedback submitted! Check your email to track it.</p>,
        error: <p style={{ fontSize: '0.8rem', textAlign: 'center'}}>Could not submit feedback.</p>,
      }
    )
    .then((res) => {
      console.log(res)
      setIsLoading(false)
      setPayload({
        email: '',
        title: '',
        message: '',
        agency_id: ''
      })
    })
    .catch((err) => {
      console.log(err)
      setIsLoading(false)
    })
  }
  return (
    <>
      <Topbar />
      <Toaster />
      <div className="main">
        <form className="submit" onSubmit={handleSubmit}>
          <h1>Submit Your <span>Complaint</span></h1>
          <p>Help us improve public services by sharing your experience or reporting an issue</p>

          <label>Email</label>
          <input 
            type="email"
            placeholder='Enter your email for updates'
            required
            value={payload.email}
            onChange={(e) => setPayload((data) => ({...data, email: e.target.value}))}
          />
          <label>Title / Subject</label>
          <input
            type="text"
            placeholder='Brief summary of your feedback'
            required
            value={payload.title}
            onChange={(e) => setPayload((data) => ({...data, title: e.target.value}))}
          />
          <label>Agency</label>
          <select
            value={payload.agency_id}
            required
            onChange={(e) => setPayload((data) => ({...data, agency_id: e.target.value}))}
          >
            <option value="">Select Agency</option>
            <option value="1">Public Works</option>
          </select>
          <label>Description</label>
          <textarea
            value={payload.message}
            required
            onChange={(e) => setPayload((data) => ({...data, message: e.target.value}))}
            rows={5}
            placeholder='Please provide details about your feddback/complait....'
          ></textarea>
          <button disabled={isLoading}>{isLoading ? 'Submitting...' : 'Submit Feedback'}</button>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default Submission
