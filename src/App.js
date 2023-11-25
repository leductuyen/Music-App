import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Hotel from './pages/hotel/Hotel'
import List from './pages/list/List'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Car from './pages/car'
import 'bootstrap/dist/css/bootstrap.min.css'
import DetailRepair from './pages/car/Repair/DetailRepair'

function App() {
    const storedUser = localStorage.getItem('user')

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/hotels" element={<List />} />
                <Route path="/hotels/:id" element={<Hotel />} />

                <Route path="/login" element={<Login />} />

                <Route path="/" element={<Car />} />

                <Route path="/register" element={<Register />} />
                <Route path="/repair/:id" element={<DetailRepair />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
