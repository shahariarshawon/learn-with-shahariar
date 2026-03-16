import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h2>Homepage</h2>,
  },
  {
    path: "/courses",
    element: <h2>Courses Page</h2>,
  },
  {
    path:"/*",
    element:<h2>Tmi vul er dike acho baba</h2>
  }
]);

export default router;
