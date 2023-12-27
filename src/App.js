import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './Header';
import Login from './login/Login';
import Signin from './login/Signin';
import HomePage from './pages/HomePage';
import Recipes from './pages/Recipes';
import Shopping from './pages/Shopping';
function App() {

  return (
    <div className="App">
      <Header prop={true}/>
      <hr/>
      <Header prop={false}/>

      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/homePage" element={<HomePage />}></Route>
        <Route path="/recipe" element={<Recipes />}></Route>
        <Route path="/shopping" element={<Shopping />}></Route>        
      </Routes>
      <h1>!!!!!!!!!!!אנחנו מתחילות את הפרוייקט בשעה טובה ומוצלחת</h1>
      <h2>בעזרת ה' ובס"ד אנחנו נעשה אותו בקלות ובשמחה ובהנאה מרובה</h2>
      <h3>מיליון הצלחות</h3>
    </div>
  );
}

export default App;
