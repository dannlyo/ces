// import { useState } from 'react'
import { useEffect, useState } from 'react'
import Footer from '../../components/foot'
import Topbar from '../../components/topbar'
import '../../scss/index.scss'
import './styles.scss'
import { submitComplaint } from '../../apis/submissions'
import toast, { Toaster } from 'react-hot-toast'
import { getAgencies } from '../../apis/agencies'
import { Link } from 'react-router-dom'
interface Agency {
  id: number
  name: string
}

function Submission() {
  const [isLoading, setIsLoading] = useState(false)
  const [submission, setSubmission] = useState({
    sid: '',
  })
  const [payload, setPayload] = useState({
    email: '',
    title: '',
    message: '',
    agency_id: ''
  })
  const [agencies, setAgencies] = useState<Agency[]>([])
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
      setSubmission({
        sid: res.data.sid,
      })
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
    .finally(() => {
      setIsLoading(false)
    })
  }
  const fetchAgencies = async () => {
    const res = await getAgencies()
    setAgencies(res.data)
  }
  useEffect(() => {
    fetchAgencies()
  }, [])
  return (
    <>
      <Topbar />
      <Toaster />
      <div className="main">
        <form className="submit" onSubmit={handleSubmit}>
          <h1>Submit Your <span>Complaint</span></h1>
          <p>Help us improve public services by sharing your experience or reporting an issue</p>

          {submission.sid && (
            <div className="submission-details">
              <p>Your submission ID is: <span>{submission.sid}</span></p>
              <p>Thank you for your feedback!</p>
              <Link to={`/track?sid=${submission.sid}`}> Click here to track your submission</Link>
            </div>
          )}

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
            {agencies.map((agency) => (
              <option value={agency.id} key={agency.id}>{agency.name}</option>
            ))}
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
