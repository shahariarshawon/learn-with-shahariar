import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import CoursesPage from "../pages/CoursesPage";
import SuccessPage from "../pages/SuccessPage";
import BlogsPage from "../pages/BlogsPage";
import AboutUs from "../pages/AboutUs";
import AuthLayout from "../layouts/AuthLayout";
import AdminDashboard from "../pages/dashboard/AdminDashboard";
import StudentDashboard from "../pages/dashboard/StudentDashboard";
import TeacherDashboard from "../pages/dashboard/TeacherDashboard";
import ForgotPassword from "../components/ForgotPassword";
import DashboardLayout from "../layouts/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/courses",
        Component: CoursesPage,
      },
      {
        path: "/success",
        Component: SuccessPage,
      },
      {
        path: "/blogs",
        Component: BlogsPage,
      },
      {
        path: "/about",
        Component: AboutUs,
      },
      {
        path: "/reset",
        Component: ForgotPassword,
      },

      {
        path: "/*",
        element: <p>Tumi vuler dike acho</p>,
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: LoginPage,
      },
      {
        path: "signup",
        Component: SignUpPage,
      },
    ],
  },
  {
    path: "/",
    Component: DashboardLayout,
    children: [
      {
        path: "/dashboard/admin",
        Component: AdminDashboard,
      },
      {
        path: "/dashboard/student",
        Component: StudentDashboard,
      },
      {
        path: "/dashboard/teacher",
        Component: TeacherDashboard,
      },
    ],
  },
]);

export default router;
