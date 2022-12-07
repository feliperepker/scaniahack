import './App.css'
import './styles/main.css'
import { Header } from './components/Header'
import { AppRoutes } from './routes/routes'
import { isAuthenticated } from './services/auth'

export function App() {
  return (
    <div>
      {isAuthenticated() ? <Header/> : ''}
      <AppRoutes/>
    </div>
  )
}

