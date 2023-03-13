// eslint-disable-next-line @typescript-eslint/no-unused-vars
import SignIn from '../pages/SignIn/SignIn'
import User from '../pages/User/User'
import Budget from '../pages/Budget/Budget';
import Travels from '../pages/Travels/Travels';
import { Routes, Route } from 'react-router-dom';


export function App() {
  return (
    <Routes>
      <Route path='/' element={<SignIn/>}></Route>
      <Route path='/travels' element={<Travels/>}></Route>
      <Route path='/user' element={<User/>}></Route>
      <Route path='/budget' element={<Budget/>}></Route>
    </Routes>
  );
}

export default App;
