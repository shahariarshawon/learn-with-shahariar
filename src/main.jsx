import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routes/router.jsx";
import { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import AuthProvider from "./context/AuthProvider.jsx";

AOS.init();
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 100, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false,
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster position="top-right" reverseOrder={false} />
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
);
