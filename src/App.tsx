import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './router'
import { LanguageProvider } from './contexts/LanguageContext'


function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <LanguageProvider>
        <AppRoutes />
      </LanguageProvider>
    </BrowserRouter>
  )
}

export default App