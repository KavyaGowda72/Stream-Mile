
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import Header from './components/Header';
import WatchPage from '../src/components/WatchPage'
import './index.css'
import MainContainer from './components/MainContainer';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <div className=" " >
    <Header/>
    <Body/>
    
    
    </div>
  );
}

export const appRoute=createBrowserRouter([
  {
  patht:'/',
  element:<App/>,

  children:[
    {
      path:'/',
      element:<MainContainer/>
    },
    {
      path:'watch',
      element:<WatchPage/>
    },
    {
      path:'/results',
      element:<SearchResults/>
    }
    
     
  ]
}
])

export default App;
