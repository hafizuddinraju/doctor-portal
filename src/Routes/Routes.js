import { createBrowserRouter } from "react-router-dom";
import AdminRoute from "../compontents/AdminRoute/AdminRoute";
import PrivateRoute from "../compontents/PrivateRoute/PrivateRoute";
import Main from "../layout/Main";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import AddDoctor from "../Pages/DashBoard/AddDoctor/AddDoctor";
import AllDoctor from "../Pages/DashBoard/AllDoctor/AllDoctor";
import AllUser from "../Pages/DashBoard/AllUser/AllUser";
import DashBoard from "../Pages/DashBoard/DashBoard";
import MyAppointment from "../Pages/DashBoard/MyAppointment/MyAppointment";
import Payment from "../Pages/DashBoard/Payment/Payment";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";

export const router = createBrowserRouter([
    {path:'/', element:<Main></Main>,

    children:[
        {path:'/', element: <Home></Home>},
        {path:'/home', element: <Home></Home>},
        {path:'/appointment', element: <Appointment></Appointment>},
        {path:'/login', element: <Login></Login>},
        {path:'/signup', element: <Signup></Signup>},
    ]

},
{
    path:'/dashboard', element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children:[
        {path:'/dashboard', element:<MyAppointment></MyAppointment>},
        {path:'/dashboard/alluser', element:<AdminRoute><AllUser></AllUser></AdminRoute>},
        {path:'/dashboard/adddoctor', element:<AdminRoute><AddDoctor></AddDoctor></AdminRoute>},
        {path:'/dashboard/alldoctor', element:<AdminRoute><AllDoctor></AllDoctor></AdminRoute>},
        {path:'/dashboard/payment/:id', element:<Payment></Payment>,
        loader: ({params}) => fetch(`https://server-doctor.vercel.app/bookings/${params.id}`)
    },

    ]

}

])