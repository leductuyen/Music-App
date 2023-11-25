import axios from 'axios'
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import './login.css'
import CustomButton from '../../components/common/CustomButton'
const Login = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined
    })

    const { loading, error, dispatch } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleClick = async (e) => {
        e.preventDefault()
        dispatch({ type: 'LOGIN_START' })
        try {
            const res = await axios.post('/auth/login', credentials)
            dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.details })
            navigate('/car')
        } catch (err) {
            dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data })
        }
    }

    return (
        <div className="login .bg-primary-blue">
            {/* {showLoadingModal && <ModalLoading status="success" />} */}

            <div className="card">
                <div className="left">
                    <h1>Gara ô tô Phú Quang</h1>
                    <p>
                        Garo Ô tô Phú Quang - Địa chỉ uy tín cho mua bán xe ô tô
                        mới và đã qua sử dụng, cùng với dịch vụ sửa chữa chất
                        lượng.
                    </p>
                    <span>Bạn có muốn đăng ký tài khoản</span>
                    <Link to="/register">
                        <button>Đăng ký</button>
                    </Link>
                </div>
                <div className="right">
                    <form>
                        <label>Tài khoản</label>
                        <input
                            type="text"
                            placeholder="Tên đăng nhập ..."
                            id="username"
                            onChange={handleChange}
                            className="lInput account"
                        />

                        <label>Mật khẩu</label>
                        <input
                            type="password"
                            placeholder="Mật khẩu ..."
                            id="password"
                            onChange={handleChange}
                            className="lInput password"
                        />

                        <CustomButton
                            title=" Đăng nhập"
                            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
                            textStyles="text-white text-[14px] leading-[17px] font-bold"
                            handleClick={handleClick}
                        />
                    </form>
                    {error && <span>{error.message}</span>}
                </div>
            </div>
        </div>
    )
}

export default Login
