import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './app/app'
import Activities from './pages/Activities/Activities'
import Budget from './pages/Budget/Budget'
import Travels from './pages/Travels/Travels'
import TravelsForm from './pages/TravelsForm/TravelsForms'
import User from './pages/User/User'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Travels />} />
          <Route path="/user" element={<User />} />
          <Route path="/budget" element={<Budget />} />
          <Route
            path="/new-travel"
            element={
              <TravelsForm
                description={''}
                endDate={''}
                expenses={0}
                id={''}
                imageUrl={''}
                name={''}
                shared={false}
                startDate={''}
                travelers={0}
              />
            }
          />
          <Route path="/activities/:id" element={<Activities />} />
          <Route path="*" element={<Travels />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
