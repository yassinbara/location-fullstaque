import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'

import { carRoutes } from './pages/car/routes'

const App = () => {
  return (<Routes>
    <Route path='/' element={<Navigate to='/voitures' />} />
    {carRoutes}
  </Routes>
  )
}

export default App