
import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedLayout } from "./components/ProtectedLayout";
import { Login } from "./components/Login";

//-->-webkit-text-size-adjust: 100%;<-- index
function App() {

  return (

    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<ProtectedLayout>
            <h2>
              Olá esse é o componente profile
            </h2>
          </ProtectedLayout>} />

          <Route path="/login" element= {<Login/>}  >

          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  )

}

export default App;