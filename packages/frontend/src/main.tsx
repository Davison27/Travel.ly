import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './app/app'
import Activities from './pages/Activities/Activities'
import Budget from './pages/Budget/Budget'
import SignIn from './pages/SignIn/SignIn'
import TravelsView from './pages/Travels/Travels'
import TravelsForm from './pages/TravelsForm/TravelsForms'
import User from './pages/User/User'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/" element={<SignIn />}>
          <Route index element={<TravelsView />} />
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
          <Route path="*" element={<TravelsView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
