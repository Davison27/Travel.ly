import SignIn from '../pages/SignIn/SignIn';
import Travels from '../pages/Travels/Travels';
import User from '../pages/User/User';
import TravelsList from '../pages/TravelsList/TravelsList';
import Budget from '../pages/Budget/Budget';
import { Routes, Route } from 'react-router-dom';

<Routes>
  <Route path="/" element={<SignIn />} />
  <Route path="/travels" element={<Travels />} />
  <Route path="/user" element={<User />} />
  <Route path="/travelsList" element={<TravelsList />} />
  <Route path="/budget" element={<Budget />} />
</Routes>;
