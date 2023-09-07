import React,{lazy, Suspense} from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { createBrowserRouter, Outlet} from 'react-router-dom';
import Error from './components/Error';
import Contact from './components/Contact';
import Cart from './components/Cart';
import RestaurantMenu from './components/RestaurentMenu';
import Profile from './components/Profile';
import Shimmer from './components/Shimmer';
const InstaMart = lazy(() => import("./components/InstaMart"));
const About = lazy(() => import("./components/About"));


//import { IMG_CDN_URL } from './config';
//import { createBrowserRouter, RouterProvider} from 'react-router-dom';
//import InstaMart from './components/InstaMart';



function App() {
  return (
    <div>
       <Header />
       <Outlet />
       <Footer />
    </div>
  );
  
}

export const  appRouter = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement:<Error />,
    children:[
      {
        path:"about",
        element:(
                <Suspense fallback={<h1>Loading....</h1>}> 
                <About /> 
                 </Suspense>
                 ),
        children:[
          {
          path : "profile",
          element:<Profile />,
          },
        ],
      },


      {
        path:"/",
        element: <Body/>
      },
      {
        path:"/contact",
        element:<Contact />,
      },
      {
        path:"/cart",
        element:<Cart />,
      },
      {
        path:"/restaurantMenu/:id",
        element:<RestaurantMenu />,
      },
      {
        path:"/instamart",
        element:(
           <Suspense fallback={<Shimmer />}>
              <InstaMart />
           </Suspense>
               ),
      },

    ],
  },
]);


export default App;
/**const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
  </React.StrictMode>
);
<RouterProvider router={appRouter} />
reportWebVitals();
*/