import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layouts/Main/Dashboard";
import MyProfile from "../Pages/Dashboard/MyProfile/MyProfile";
import CreateTask from "../Pages/Dashboard/CreateTask/CreateTask";
import PrivateRoute from "./PrivetRouter";
import About from "../Pages/About/About";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>
        }
      ]
    },
    {
      path: "/dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
          {
              path: '/dashboard',
              element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
          },
          {
            path:"/dashboard/cratetask",
            element: <PrivateRoute><CreateTask></CreateTask></PrivateRoute>
          }
      ]
  }
  ]);

export default router;