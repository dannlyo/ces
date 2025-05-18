import { useEffect, useState } from 'react'
import Footer from '../../components/foot'
import Topbar from '../../components/topbar'
import '../../scss/index.scss'
import './styles.scss'
import { trackSubmission } from '../../apis/submissions'
import toast, { Toaster } from 'react-hot-toast'
import moment from 'moment'
import Loader from '../../components/loader'

interface Result {
  id: number
  sid: string
  email: string
  title: string
  agency: {
      name: string
  }
  message: string
  status: string
  created_at: string
  response: {
      response: string
      created_at: string
  }
}

function Track() {
  const [search, setSearch] = useState('')
  const [result, setResult] = useState<Result | null>(null)
  const [empty, setEmpty] = useState(false)
  const [loading, setLoading] = useState(false)

  const performSearch = async (searchId: string) => {
    if(!searchId){
      toast.error('Please enter an ID to track your submission')
      return
    }
    setEmpty(false)
    setResult(null)
    setLoading(true)
    const res = await trackSubmission(searchId)
    if(res.status == 'success'){
      setResult(res.data)
      toast.success('Submission found')
    } else {
      toast.error(res.message)
      setEmpty(true)
    }
    setLoading(false)
  }

  const handleSearch = () => performSearch(search)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const sid = params.get('sid')
    if(sid){
      setSearch(sid)
      performSearch(sid)
    }
  }, [])

  return (
    <>
      <Topbar />
      <Toaster />
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
            <button onClick={handleSearch}>
              Search
            </button>
          </div>
          { result && 
            <div className="submission-view">
              <div className="header">
                <h2>{result?.title}</h2>
                <span className={`status ${result?.status.toLowerCase()}`}>
                  {result?.status}
                </span>
              </div>

              <div className="meta-section">
                <div className="submitted-by">
                  <h4>Submitted By</h4>
                  <p>{result?.email}</p>
                </div>
                <div className="time">
                  <strong>Submitted:</strong> {moment(result?.created_at).fromNow()} ( {moment(result?.created_at).format('D MMM YYYY')} )
                </div>
              </div>


              <div className="section">
                <h4>Agency</h4>
                <p>{result?.agency?.name}</p>
              </div>

              <div className="section">
                <h4>Description</h4>
                <p>{result?.message}</p>
              </div>

              {result?.response && (
                <div className="response-section">
                  <h4>Agency Response</h4>
                  <div className="response-box">
                    {result?.response.response}
                    <div className="response-time">
                      <strong>Responded:</strong> {moment(result?.response.created_at).fromNow()} ( {moment(result?.response.created_at).format('D MMM YYYY')} )
                    </div>
                  </div>
                </div>
              )}
            </div>
          }
          {loading && <Loader />}
          { !result && empty &&
            <div className="empty">
              <svg viewBox="0 0 312 312" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="empty_inbox" data-name="empty inbox" transform="translate(-2956.982 -3048.416)"> <path id="Path_26" data-name="Path 26" d="M3268.982,3078.286a29.869,29.869,0,0,0-29.869-29.87H2986.851a29.869,29.869,0,0,0-29.869,29.87v252.259a29.87,29.87,0,0,0,29.869,29.871h252.262a29.87,29.87,0,0,0,29.869-29.871Zm-281.9-4.87H3239.3a5.378,5.378,0,0,1,5.684,5.268v141.732h-73.54a12.038,12.038,0,0,0-12.114,12.025,47.854,47.854,0,0,1-95.668,1.918,11.273,11.273,0,0,0,.162-1.906,12.049,12.049,0,0,0-12.116-12.037h-70.724V3078.684C2980.982,3075.574,2983.97,3073.416,2987.08,3073.416Zm252.218,263H2987.08c-3.11,0-6.1-2.4-6.1-5.514v-86.486h59.426a72.092,72.092,0,0,0,142.13,0h62.444V3330.9A5.577,5.577,0,0,1,3239.3,3336.416Z" fill="#000000"></path> </g> </g></svg>
              <h2>No submission found</h2>
              <p>Please check your ID and try again</p>
            </div>
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Track