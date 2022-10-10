import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Topics from './components/Topics/Topics';
import Quiz from './components/Quiz/Quiz';

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
      {path:'quiz/:quizId', element:<Quiz></Quiz> },
      {path:'/statistics' ,element:<h1>statistics page comming soon</h1>},
      {path:'/blog' ,element:<h1>blog page comming soon</h1>}
    ]}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
