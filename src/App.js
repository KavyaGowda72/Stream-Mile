
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import Header from './components/Header';
import WatchPage from '../src/components/WatchPage'
import './index.css'
import MainContainer from './components/MainContainer';

function App() {
  return (
    <div className=" " >
    <Header/>
    <RouterProvider router={appRoute}/>
    
    </div>
  );
}

export const appRoute=createBrowserRouter([
  {
  patht:'/',
  element:<Body/>,

  children:[
    {
      path:'/',
      element:<MainContainer/>
    },
    {
      path:'watch',
      element:<WatchPage/>
    },
    
     
  ]
}
])

export default App;
