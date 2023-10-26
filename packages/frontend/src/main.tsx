import { GoogleOAuthProvider } from '@react-oauth/google'
import { TokenPayload } from 'google-auth-library'
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode'
import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom'

import App from './app/app'
import Activities from './pages/Activities/Activities'
import Budget from './pages/Budget/Budget'
import SharedPage from './pages/Shared/Shared'
import SignIn from './pages/SignIn/SignIn'
import TravelsView from './pages/Travels/Travels'
import TravelsForm from './pages/TravelsForm/TravelsForms'
import User from './pages/User/User'
import { storage } from './utils/functions/storage'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const ProtectedRoute = () => {
  const token: string = storage.get('token')
  const decodedToken: TokenPayload = jwt_decode(token)

  if (
    !token ||
    token.length < 1209 ||
    decodedToken.exp < Date.now() / 1000 ||
    decodedToken.iss !== 'https://accounts.google.com'
  ) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}

root.render(
  <GoogleOAuthProvider clientId="">
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route index element={<SignIn />} />
          <Route path="/" element={<SignIn />} />
          <Route element={<ProtectedRoute />}>
            <Route element={<App />}>
              <Route index element={<TravelsView />} />
              <Route path="/travels" element={<TravelsView />} />
              <Route path="/user" element={<User />} />
              <Route
                path="/new-travel"
                element={
                  <TravelsForm
                    description={''}
                    endDate={new Date()}
                    budget={0}
                    id={''}
                    imageUrl={''}
                    name={''}
                    shared={false}
                    startDate={new Date()}
                    travelers={0}
                  />
                }
              />
              <Route path="/travel/:id" element={<Activities />} />

              <Route path="/budget/:id" element={<Budget />} />
            </Route>
          </Route>
          <Route path="/travel/shared/:id" element={<SharedPage />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </GoogleOAuthProvider>,
)
