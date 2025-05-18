import { Link, useNavigate } from "react-router-dom";
import './styles.scss'
const Topbar = () => {
    const navigate = useNavigate()
    return ( 
        <div className="topbar">
            <Link to="/">Citizen <span>Connect</span></Link>
            <div className="links">
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
            </div>
            <div className="auth">
                <button onClick={() => navigate('/submission')}>Submit Feedback</button>
            </div>
        </div>
     );
}
 
export default Topbar;