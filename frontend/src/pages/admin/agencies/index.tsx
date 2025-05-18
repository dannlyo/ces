import { useEffect, useState } from "react";
import DashboardLayout from "../../../layouts/dashboard";
import './styles.scss'
import { getAgencies } from "../../../apis/agencies";
import moment from "moment";
import Loader from "../../../components/loader";

function Agencies() {
    const [agencies, setAgencies] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(false)
    // const [search, setSearch] = useState('')
    // const [selectedAgency, setSelectedAgency] = useState<any>(null)
    // const [isModalOpen, setIsModalOpen] = useState(false)
    // const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    // const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

    const fetchAgencies = async () => {
        setIsLoading(true)
        const res = await getAgencies()
        if(res.status == 'success'){
            setAgencies(res.data)
        }
        setIsLoading(false)
    }

    useEffect(() => {
        fetchAgencies()
    }, [])
    
    return ( 
      <DashboardLayout title="Agencies">
        <div className="dash-subs">
            <div className="filters">
                <div className="search">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    <input type="text" placeholder="Search Agencies...." />
                </div>
            </div>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Registered Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {agencies.map((agency) => (
                            <tr key={agency.id}>
                                <td>{agency.name}</td>
                                <td>{moment(agency.created_at).fromNow()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {isLoading && <Loader />}
        </div>
      </DashboardLayout>  
    );
}

export default Agencies;