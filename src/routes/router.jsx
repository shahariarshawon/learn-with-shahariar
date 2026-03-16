import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
        {
            index: true,
            Component: HomePage
        }
    ]
  },
  {
    path: "/courses",
    element: <h2>Courses Page</h2>,
  },
  {
    path:"/*",
    element:<h2>Tmi vul er dike acho baba</h2>
  },
  {
    path:"/login",
    Component: LoginPage,
  }
]);

export default router;
