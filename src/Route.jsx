import Home from "./View/User/Home";
import Signin from "./components/Account/Signin";
const commonRoutes = [    
    {path:"/Home", element:<Home/>},
    {path:"/Signin", element: <Signin/>},
    
];
 export const routes={
    commonRoutes
 }    