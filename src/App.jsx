import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./about-us";
import Home from "./home";
import Login from "./login";
import RegisterPage from "./register";




function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/home",
      element: <Home />
    },
    {
      path: "/about-us",
      element: <AboutUs />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <RegisterPage />
    },
    {
      path: "*",
      element: <div>Page Not Found</div>
    }


  ]);


  return (
    <>
      <RouterProvider router={router} />

    </>
  );
}

export default App;
