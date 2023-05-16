import { Routes, Route, Navigate } from 'react-router-dom';
import './Body.css'
import Products from '../../Pages/Products/Products';
import ContactUs from '../../Pages/ContactUs/ContactUs';

const Body = ()=>{
    return(
        <div>
            <Routes>
                <Route index element={<Navigate to="products"></Navigate>}></Route>
                    <Route path="products" element={<Products></Products>}></Route>
                    <Route path="contactus" element={<ContactUs></ContactUs>}></Route>
                </Routes>
        </div>
    )
}

export default Body;