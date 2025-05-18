import { useEffect, useState } from 'react'
import Footer from '../../components/foot'
import '../../scss/index.scss'
import './styles.scss'
import toast, { Toaster } from 'react-hot-toast'
import { login } from '../../apis/auth'

function Login() {
    const [isLoading, setIsLoading] = useState(false)
    const [payload, setPayload] = useState({
      email: 'citizen@connect.com',
      password: 'connect'
    })
    const handleSubmit = (e: any) => {
      e.preventDefault()
      setIsLoading(true)
      toast.promise(
        login(payload),
        {
          loading: 'Submitting...',
          success: <p style={{ fontSize: '0.8rem', textAlign: 'center'}}>Login successful.</p>,
          error: <p style={{ fontSize: '0.8rem', textAlign: 'center'}}>Could not login.</p>,
        }
      )
      .then((res) => {
        console.log(res)
        setIsLoading(false)
        localStorage.setItem('connect_token', res.data.token)
        localStorage.setItem('connect_user', JSON.stringify(res.data.user))
        window.location.href = '/admin/dashboard'
        setPayload({
          email: '',
          password: ''
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
    const checkLoggedUser = () => {
      const token = localStorage.getItem('connect_token')
      const user = localStorage.getItem('connect_user')
      if(token && user){
        window.location.href = '/admin/dashboard'
      }
    }
    useEffect(() => {
      checkLoggedUser()
    }, [])
  return (
    <>
      <Toaster />
      <div className="main">
        <form className="submit" onSubmit={handleSubmit}>
          <div className="logo">Citizen <span>Connect</span></div>
          <h1>Login to your <span>Account</span></h1>
          <p>Login to your account to manage your submissions and agencies</p>

          <label>Email</label>
          <input 
            type="email"
            placeholder='Enter your email'
            required
            value={payload.email}
            onChange={(e) => setPayload((data) => ({...data, email: e.target.value}))}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder='Enter your password'
            required
            value={payload.password}
            onChange={(e) => setPayload((data) => ({...data, password: e.target.value}))}
          />
          <button disabled={isLoading}>{isLoading ? 'Submitting...' : 'Login'}</button>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default Login
