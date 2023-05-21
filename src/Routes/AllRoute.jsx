import {Routes,Route} from "react-router-dom";
import Home from "../Components/Home";
import PrivateRoute from "./PrivateRoute";
import Login from '../Components/Login';

const AllRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={
                <PrivateRoute>
                    <Home/>
                </PrivateRoute>
            }/>
        </Routes>
    )
}

export default AllRoute