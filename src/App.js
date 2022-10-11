import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Topics from './components/Topics/Topics';
import Quiz from './components/Quiz/Quiz';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';

function App() {
  const router = createBrowserRouter([
    {path:'/', element:<Main></Main>,
    children:[
      
      {path:'/' ,
      loader: ()=> fetch("https://openapi.programming-hero.com/api/quiz"),
      element:<Topics></Topics>},
      {path:'/topics' ,
      loader: ()=> fetch("https://openapi.programming-hero.com/api/quiz"),
      element:<Topics></Topics>},
      {path:'quiz/:quizId',
      loader: ({params})=>{
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
      },
      element:<Quiz></Quiz> },
      {path:'/statistics',
      loader: ()=> fetch(" https://openapi.programming-hero.com/api/quiz"),
      element:<Statistics></Statistics>},
      {path:'/blog' ,element:<Blog></Blog>}
    ]}
  ])
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
