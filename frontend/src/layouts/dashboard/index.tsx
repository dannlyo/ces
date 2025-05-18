import { NavLink } from "react-router-dom";
import './styles.scss';
import { Toaster } from "react-hot-toast";
import { logout } from "../../apis/auth";
import { toast } from "react-hot-toast";

interface LayoutInterface {
    children: React.ReactNode,
    title: string
}

const DashboardLayout: React.FC<LayoutInterface> = ({ title, children }) => {
    const user = JSON.parse(localStorage.getItem('connect_user') || '{}')
    const handleLogout = async () => {
        try {
            await toast.promise(
                logout(),
                {
                    loading: 'Logging out...',
                    success: 'Successfully logged out',
                    error: 'Failed to logout'
                }
            );
            localStorage.removeItem('connect_token')
            localStorage.removeItem('connect_user')
            window.location.href = '/'
        } catch (error) {
            console.error('Error logging out:', error);
        }
    }
    return ( 
        <div className="dashboard">
            <Toaster />
            <div className="sidebar">
                <div className="logo">
                    <h1>Connect <span>Citizen</span></h1>
                </div>
                <NavLink to="/admin/dashboard" className={({ isActive }) => isActive ? 'link active' : 'link'}>
                    <svg viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.25 9C20.25 8.58579 19.9142 8.25 19.5 8.25C19.0858 8.25 18.75 8.58579 18.75 9L20.25 9ZM11.5 18.25C11.0858 18.25 10.75 18.5858 10.75 19C10.75 19.4142 11.0858 19.75 11.5 19.75V18.25ZM18.75 9C18.75 9.41421 19.0858 9.75 19.5 9.75C19.9142 9.75 20.25 9.41421 20.25 9L18.75 9ZM11.5 4.25C11.0858 4.25 10.75 4.58579 10.75 5C10.75 5.41421 11.0858 5.75 11.5 5.75V4.25ZM19.5 9.75C19.9142 9.75 20.25 9.41421 20.25 9C20.25 8.58579 19.9142 8.25 19.5 8.25V9.75ZM11.5 8.25C11.0858 8.25 10.75 8.58579 10.75 9C10.75 9.41421 11.0858 9.75 11.5 9.75V8.25ZM6.25 12C6.25 11.5858 5.91421 11.25 5.5 11.25C5.08579 11.25 4.75 11.5858 4.75 12H6.25ZM11.5 19.75C11.9142 19.75 12.25 19.4142 12.25 19C12.25 18.5858 11.9142 18.25 11.5 18.25V19.75ZM4.75 12C4.75 12.4142 5.08579 12.75 5.5 12.75C5.91421 12.75 6.25 12.4142 6.25 12H4.75ZM11.5 5.75C11.9142 5.75 12.25 5.41421 12.25 5C12.25 4.58579 11.9142 4.25 11.5 4.25V5.75ZM5.5 11.25C5.08579 11.25 4.75 11.5858 4.75 12C4.75 12.4142 5.08579 12.75 5.5 12.75L5.5 11.25ZM11.5 12.75C11.9142 12.75 12.25 12.4142 12.25 12C12.25 11.5858 11.9142 11.25 11.5 11.25V12.75ZM12.25 12C12.25 11.5858 11.9142 11.25 11.5 11.25C11.0858 11.25 10.75 11.5858 10.75 12H12.25ZM10.75 19C10.75 19.4142 11.0858 19.75 11.5 19.75C11.9142 19.75 12.25 19.4142 12.25 19H10.75ZM10.75 12C10.75 12.4142 11.0858 12.75 11.5 12.75C11.9142 12.75 12.25 12.4142 12.25 12H10.75ZM12.25 9C12.25 8.58579 11.9142 8.25 11.5 8.25C11.0858 8.25 10.75 8.58579 10.75 9H12.25ZM12.25 5C12.25 4.58579 11.9142 4.25 11.5 4.25C11.0858 4.25 10.75 4.58579 10.75 5H12.25ZM10.75 9C10.75 9.41421 11.0858 9.75 11.5 9.75C11.9142 9.75 12.25 9.41421 12.25 9H10.75ZM18.75 9V15H20.25V9L18.75 9ZM18.75 15C18.75 16.7949 17.2949 18.25 15.5 18.25V19.75C18.1234 19.75 20.25 17.6234 20.25 15H18.75ZM15.5 18.25H11.5V19.75H15.5V18.25ZM20.25 9C20.25 6.37665 18.1234 4.25 15.5 4.25L15.5 5.75C17.2949 5.75 18.75 7.20507 18.75 9L20.25 9ZM15.5 4.25H11.5V5.75H15.5L15.5 4.25ZM19.5 8.25H11.5V9.75H19.5V8.25ZM4.75 12V15H6.25V12H4.75ZM4.75 15C4.75 17.6234 6.87665 19.75 9.5 19.75V18.25C7.70507 18.25 6.25 16.7949 6.25 15H4.75ZM9.5 19.75H11.5V18.25H9.5V19.75ZM6.25 12L6.25 9H4.75L4.75 12H6.25ZM6.25 9C6.25 7.20507 7.70507 5.75 9.5 5.75V4.25C6.87665 4.25 4.75 6.37665 4.75 9H6.25ZM9.5 5.75H11.5V4.25H9.5V5.75ZM5.5 12.75H11.5V11.25H5.5L5.5 12.75ZM10.75 12V19H12.25V12H10.75ZM12.25 12V9H10.75V12H12.25ZM10.75 5V9H12.25V5H10.75Z"></path> </g></svg>
                    Dashboard
                </NavLink>
                <NavLink to="/admin/submissions" className={({ isActive }) => isActive ? 'link active' : 'link'}>
                    <svg fill="#000000" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs></defs><title>report--alt</title><rect x="10" y="18" width="8" height="2"></rect><rect x="10" y="13" width="12" height="2"></rect><rect x="10" y="23" width="5" height="2"></rect><path d="M25,5H22V4a2,2,0,0,0-2-2H12a2,2,0,0,0-2,2V5H7A2,2,0,0,0,5,7V28a2,2,0,0,0,2,2H25a2,2,0,0,0,2-2V7A2,2,0,0,0,25,5ZM12,4h8V8H12ZM25,28H7V7h3v3H22V7h3Z"></path><rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" style={{fill: 'none'}} width="32" height="32"></rect></g></svg>
                    Submissions
                </NavLink>
                <NavLink to="/admin/agencies" className={({ isActive }) => isActive ? 'link active' : 'link'}>
                    <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 351.158 351.158"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <rect x="148.029" y="38.755" width="15" height="24.563"></rect> <rect x="177.518" y="38.755" width="15" height="24.563"></rect> <rect x="207.006" y="38.755" width="15" height="24.563"></rect> <rect x="148.029" y="79.05" width="15" height="24.562"></rect> <rect x="177.518" y="79.05" width="15" height="24.562"></rect> <rect x="207.006" y="79.05" width="15" height="24.562"></rect> <rect x="26.595" y="221.104" width="15" height="24.563"></rect> <rect x="56.083" y="221.104" width="15" height="24.563"></rect> <rect x="85.572" y="221.104" width="15" height="24.563"></rect> <rect x="26.595" y="261.398" width="15" height="24.563"></rect> <rect x="56.083" y="261.398" width="15" height="24.563"></rect> <rect x="85.572" y="261.398" width="15" height="24.563"></rect> <path d="M351.158,192.106h-19.667c0.096-2.257,0.152-4.518,0.152-6.771c0-56.906-30.996-109.325-80.894-136.8 c-0.707-0.389-1.429-0.769-2.148-1.15V9.757H121.434v29.178c-29.493,10.908-54.755,30.25-73.078,55.99 c-18.868,26.506-28.842,57.77-28.842,90.411c0,2.252,0.056,4.513,0.152,6.771H0V325.27h106.429 c21.6,10.698,44.857,16.132,69.15,16.132c24.155,0,47.316-5.371,68.838-15.966l-0.082-0.166h106.823L351.158,192.106 L351.158,192.106z M136.434,24.757h97.168v103.162h-97.168V24.757z M15,207.106h97.167V310.27H15V207.106z M127.167,317.889 V192.106H34.675c-0.107-2.256-0.161-4.518-0.161-6.771c0-56.972,34.683-108.554,86.919-130.289v87.872h127.168V64.632 c42.112,25.519,68.042,71.23,68.042,120.703c0,2.252-0.054,4.515-0.16,6.771h-92.492v125.77 c-15.429,5.655-31.652,8.525-48.412,8.525C158.809,326.401,142.588,323.542,127.167,317.889z M336.158,310.27h-97.167V207.106 h97.167V310.27z"></path> <rect x="250.586" y="221.104" width="15" height="24.563"></rect> <rect x="280.074" y="221.104" width="15" height="24.563"></rect> <rect x="309.563" y="221.104" width="15" height="24.563"></rect> <rect x="250.586" y="261.398" width="15" height="24.563"></rect> <rect x="280.074" y="261.398" width="15" height="24.563"></rect> <rect x="309.563" y="261.398" width="15" height="24.563"></rect> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg>
                    Agencies
                </NavLink>
                {/* <NavLink to="/admin/settings" className={({ isActive }) => isActive ? 'link active' : 'link'}>
                    Settings
                </NavLink> */}
            </div>
            <div className="content">
                <div className="navbar">
                    <h1>{title}</h1>
                    <div className="profile">
                        <h3>{user.name}</h3>
                        <button onClick={handleLogout}>Log out</button>
                    </div>
                </div>
                {children}
            </div>
        </div>
     );
}

export default DashboardLayout;