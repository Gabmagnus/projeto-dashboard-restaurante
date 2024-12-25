import { MainView } from "./pages/MainView"
import { AuthProvider } from "./store/hooks/AuthContext"
import { GlobalStyle } from "./styles/GlobalStyle"

function App() {
  return (
    <div>
      <GlobalStyle />
      <AuthProvider>
        <MainView />
      </AuthProvider>
    </div>
  )
}

export default App
