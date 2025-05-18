import DashboardLayout from "../../../layouts/dashboard";
import './styles.scss'
import { getSubmissions } from '../../../apis/submissions'
import { useEffect, useState } from 'react'
import moment from "moment";
import Modal from "../../../components/modal";

interface Submission {
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
        message: string
        created_at: string
    }
}

function Submissions() {
    const [isLoading, setIsLoading] = useState(false)
    const [submissions, setSubmissions] = useState<Submission[]>([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null)
    const handleView = (submission: Submission) => {
        setSelectedSubmission(submission)
        setIsModalOpen(true)
    }
    const fetchSubmissions = async () => {
        setIsLoading(true)
        try {
            const res = await getSubmissions()
            if(res.status == 'success'){
                setSubmissions(res.data)
            } else {
                throw new Error(res.message)
            }
        } catch (error: any) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }
    // const [respondPayload, setRespondPayload] = useState({
    //     message: '',
    //     submission_id: ''
    // })
    // const handleRespond = async () => {
    //     const res = await respondSubmission(respondPayload)
    //     if(res.status == 'success'){
    //         toast.success('Submission responded successfully')
    //     } else {
    //         toast.error('Failed to respond to submission')
    //     }
    // }
    useEffect(() => {
        fetchSubmissions()
    }, [])
    return ( 
      <DashboardLayout title="Submissions">
        <div className="dash-subs">
            <div className="filters">
                <div className="search">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    <input type="text" placeholder="Search Submissions...." />
                </div>
                <select name="" id="">
                    <option value="">Select Agency</option>
                    <option value="">Public Works Department</option>
                    <option value="">City Utilities</option>
                    <option value="">Sanitation Department</option>
                </select>
                <select name="" id="">
                    <option value="">Select Status</option>
                    <option value="">Pending</option>
                    <option value="">Solved</option>
                </select>
            </div>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>from</th>
                            <th>Agency</th>
                            <th>Message</th>
                            <th>Status</th>
                            <th>Submission Time</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            submissions.map((submission: any) => (
                                <tr key={submission.id}>
                                    <td>{submission.id}</td>
                                    <td className="email">{submission.email}</td>
                                    <td className="agency">{submission.agency.name}</td>
                                    <td className="title">{submission.message}</td>
                                    <td><span className={submission.status}>{submission.status}</span></td>
                                    <td>{moment(submission.created_at).fromNow()}</td>
                                    <td>
                                        {submission.response && (
                                            <button className="view" onClick={() => handleView(submission)}>
                                                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"></path></g></svg>
                                                View
                                            </button>
                                        )}
                                        {submission.status == 'pending' && (
                                            <button className="respond" onClick={() => handleView(submission)}>
                                                <svg fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 469.411 469.411"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M397.305,207.826c-67.733-59.947-161.493-61.12-194.56-59.307V74.706c0-5.867-4.8-10.667-10.667-10.667 c-2.453,0-4.907,0.853-6.827,2.453L3.918,215.826c-4.587,3.733-5.227,10.453-1.493,15.04c0.427,0.533,0.96,0.96,1.493,1.493 l181.333,149.333c4.587,3.733,11.307,3.093,15.04-1.493c1.6-1.92,2.453-4.267,2.453-6.827v-77.013 c34.667-8,175.147-30.507,246.613,103.36c1.813,3.52,5.44,5.653,9.387,5.653c3.413,0,6.72-1.6,8.853-4.693 c1.28-1.813,1.813-4.053,1.813-6.293C469.305,312.999,445.091,250.279,397.305,207.826z M260.558,269.159 c-41.067,0-70.72,8.427-71.467,8.64c-4.587,1.28-7.68,5.44-7.68,10.24v62.72l-153.92-126.72l153.92-126.72v62.72 c0,5.867,4.8,10.667,10.667,10.667c0.427,0,0.853,0,1.28-0.107c1.173-0.107,115.2-12.907,189.76,53.227 c35.2,31.147,56.213,75.2,62.72,130.987C391.758,284.306,315.811,269.159,260.558,269.159z"></path> </g> </g> </g></svg>
                                                Respond
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            {
                isLoading && (
                    <div className="loading">
                        <div className="loading-spinner"></div>
                    </div>
                )
            }
        </div>
        {
            isModalOpen && selectedSubmission && (
            <Modal>
                <div className="modal-content">
                    <div className="modal-header">
                        <h1>Submission Details</h1>
                        <button onClick={() => setIsModalOpen(false)}>Close</button>
                    </div>
                    <div className="submission-view">
                        <div className="header">
                        <h2>{selectedSubmission.title}</h2>
                        <span className={`status ${selectedSubmission.status.toLowerCase()}`}>
                            {selectedSubmission.status}
                        </span>
                        </div>

                        <div className="meta">
                        <div>
                            <strong>Submitted:</strong> {moment(selectedSubmission.created_at).fromNow()} ( {moment(selectedSubmission.created_at).format('D MMM YYYY')} )
                        </div>
                        {selectedSubmission.response && (
                            <div>
                                <strong>Responded:</strong> {moment(selectedSubmission.response.created_at).fromNow()} ( {moment(selectedSubmission.response.created_at).format('D MMM YYYY')} )
                            </div>
                        )}
                        </div>

                        <div className="section">
                        <h4>Message</h4>
                        <p>{selectedSubmission.message}</p>
                        </div>

                        <div className="section">
                        <h4>Agency</h4>
                        <p>{selectedSubmission.agency.name}</p>
                        </div>

                        <div className="section">
                        <h4>Submitted By</h4>
                        <p>{selectedSubmission.email}</p>
                        </div>

                        {selectedSubmission.response && (
                        <div className="response-section">
                            <h4>Agency Response</h4>
                            <div className="response-box">
                            {selectedSubmission.response.message}
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </Modal>
        )}
      </DashboardLayout>  
    );
}

export default Submissions;