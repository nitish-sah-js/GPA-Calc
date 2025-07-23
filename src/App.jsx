import GpaCalc from "./GPA"
import LandingPage from "./LandingPage/LandingPage.jsx"
import Details from "./Details/Details.jsx"
import {createBrowserRouter, RouterProvider} from "react-router-dom"

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<LandingPage/>
    },
     {
      path:'/gpa-calc',
      element:<GpaCalc/>
    },
    {
      path:'/details',
      element:<Details/>
    },
  ])
  return (
    
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
