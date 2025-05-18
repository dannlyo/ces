import { useState } from "react";
import { useEffect } from "react";
import DashboardLayout from "../../../layouts/dashboard";
import './styles.scss'
import { getDashboardData } from "../../../apis/dashboard";

function Dashboard() {
    const [dashboardData, setDashboardData] = useState<any>(null)
    const [isLoading, setIsLoading] = useState(false)
    const fetchDashboardData = async () => {
        setIsLoading(true)
        const res = await getDashboardData()
        setDashboardData(res.data)
        setIsLoading(false)
    }
    useEffect(() => {
        fetchDashboardData()
    }, [])
    return ( 
      <DashboardLayout title="Dashboard">
        <div className="dash-stats">
            <h1>General stats</h1>
            <div className="stats">
                <div className="stat-card">
                    <div className="stat-card-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 22V14M5 14V4M5 14L7.47067 13.5059C9.1212 13.1758 10.8321 13.3328 12.3949 13.958C14.0885 14.6354 15.9524 14.7619 17.722 14.3195L17.8221 14.2945C18.4082 14.148 18.6861 13.4769 18.3753 12.9589L16.8147 10.3578C16.4732 9.78863 16.3024 9.50405 16.2619 9.19451C16.2451 9.06539 16.2451 8.93461 16.2619 8.80549C16.3024 8.49595 16.4732 8.21137 16.8147 7.64221L18.0932 5.51132C18.4278 4.9536 17.9211 4.26972 17.2901 4.42746C15.8013 4.79967 14.2331 4.69323 12.8082 4.12329L12.3949 3.95797C10.8321 3.33284 9.1212 3.17576 7.47067 3.50587L5 4M5 4V2" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                    </div>
                    <h2>Total Agencies</h2>
                    <p>{dashboardData ? dashboardData.agencies : 0}</p>
                </div>
                <div className="stat-card">
                    <div className="stat-card-icon">
                        <svg fill="#000000" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs></defs><title>report--alt</title><rect x="10" y="18" width="8" height="2"></rect><rect x="10" y="13" width="12" height="2"></rect><rect x="10" y="23" width="5" height="2"></rect><path d="M25,5H22V4a2,2,0,0,0-2-2H12a2,2,0,0,0-2,2V5H7A2,2,0,0,0,5,7V28a2,2,0,0,0,2,2H25a2,2,0,0,0,2-2V7A2,2,0,0,0,25,5ZM12,4h8V8H12ZM25,28H7V7h3v3H22V7h3Z"></path><rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" style={{fill: 'none'}} width="32" height="32"></rect></g></svg>
                    </div>
                    <h2>Total Submissions</h2>
                    <p>{dashboardData ? dashboardData.submissions : 0}</p>
                </div>
                <div className="stat-card">
                    <div className="stat-card-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22C16.4183 22 20 18.4183 20 14C20 9.58172 16.4183 6 12 6C7.58172 6 4 9.58172 4 14C4 18.4183 7.58172 22 12 22Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 2H15" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15.24 10.76L12 14" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </div>
                    <h2>Pending</h2>
                    <p>{dashboardData ? dashboardData.pending_submissions : 0}</p>
                </div>
                <div className="stat-card">
                    <div className="stat-card-icon">
                        <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>ic_fluent_comment_resolve_24_regular</title> <desc>Created with Sketch.</desc> <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="ic_fluent_comment_resolve_24_regular" fill="#000000" fill-rule="nonzero"> <path d="M12.0225923,2.99879075 C11.7257502,3.46221691 11.4861106,3.96580034 11.3136354,4.49957906 L5.25,4.5 C4.28350169,4.5 3.5,5.28350169 3.5,6.25 L3.5,14.75 C3.5,15.7164983 4.28350169,16.5 5.25,16.5 L7.49878573,16.5 L7.49985739,20.2505702 L12.5135149,16.5 L18.75,16.5 C19.7164983,16.5 20.5,15.7164983 20.5,14.75 L20.5010736,12.2672297 C21.0520148,11.9799518 21.5566422,11.6160435 22.0008195,11.1896412 L22,14.75 C22,16.5449254 20.5449254,18 18.75,18 L13.0124851,18 L7.99868152,21.7506795 C7.44585139,22.1641649 6.66249789,22.0512036 6.2490125,21.4983735 C6.08735764,21.2822409 6,21.0195912 6,20.7499063 L5.99921427,18 L5.25,18 C3.45507456,18 2,16.5449254 2,14.75 L2,6.25 C2,4.45507456 3.45507456,3 5.25,3 L12.0225923,2.99879075 Z M17.5,1 C20.5375661,1 23,3.46243388 23,6.5 C23,9.53756612 20.5375661,12 17.5,12 C14.4624339,12 12,9.53756612 12,6.5 C12,3.46243388 14.4624339,1 17.5,1 Z M20.1464558,4.14642633 L16.0541062,8.23877585 L14.9000091,6.69997972 C14.7343237,6.47906582 14.420923,6.4342943 14.2000091,6.59997972 C13.9790952,6.76566515 13.9343237,7.07906582 14.1000091,7.29997972 L15.6000091,9.29997972 C15.782574,9.54339946 16.1384079,9.5686878 16.3535625,9.35353311 L20.8535625,4.85353311 C21.0488247,4.65827097 21.0488247,4.34168848 20.8535625,4.14642633 C20.6583004,3.95116419 20.3417179,3.95116419 20.1464558,4.14642633 Z" id="🎨-Color"> </path> </g> </g> </g></svg>
                    </div>
                    <h2>Resolved</h2>
                    <p>{dashboardData ? dashboardData.responded_submissions : 0}</p>
                </div>
            </div>
            <div className="top-agencies">
                <h1>Top Agencies</h1>
                <div className="top-agencies-list">
                    {dashboardData ? dashboardData.top_agencies.map((agency: any) => (
                        <div className="top-agency" key={agency.id}>
                            <p className="name">{agency.name}</p>
                            <p className="submissions">{agency.total_submissions}</p>
                        </div>
                    )) : null}
                </div>
            </div>
        </div>
      </DashboardLayout>  
    );
}

export default Dashboard;