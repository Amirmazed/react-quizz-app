import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Topics from './components/Topics/Topics';
import Blogs from './components/Blogs/Blogs';
import Main from './components/Layouts/Main';
import Cards from './components/Cards/Cards';
import CardDetails from './components/CardDetails/CardDetails';
import Statistics from './components/Statistics/Statistics';




function App() {
  
  const router = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [
      {path: '/', element: <Home></Home>},
      {path: '/home', element: <Home></Home>},
      {path: 'about', element: <About></About>},
      {path: 'topics', element: <Topics></Topics>},
      {
        path: 'stats', 
        loader: async() => {
          return fetch('https://openapi.programming-hero.com/api/quiz')
        },
        element: <Statistics></Statistics>
      },
      {
        path: 'cards', 
        loader: async() => {
          return fetch('https://openapi.programming-hero.com/api/quiz')
        },
        element: <Cards></Cards>
      },
      {
        path: '/card/:cardId',
        loader: async ({params}) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.cardId}`)
        },
        element: <CardDetails></CardDetails>
      }
    ]},
    
    {path: 'blogs', element: <Blogs></Blogs>},
    {path: '*', element: <div>This route is not found, go back</div>}
  ])
  return (
    <div>
       <RouterProvider router = {router}>

       </RouterProvider>
       
    </div>
  )
}

export default App;
