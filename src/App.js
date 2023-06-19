

import './App.css';
// import Login from './pages/Login';
import LoginComponent from './Practice/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./Practice/pages/Admin";
import Customer from "./Practice/pages/Customer";
import Engineer from "./Practice/pages/Engineer";

function App() {
  return (
    <BrowserRouter>

        <Routes>
               <Route path="/" 
               element={<LoginComponent />} />
        <Route path="/admin" 
               element={<Admin />} />
        <Route path="/customer"
               element={<Customer />} />
        <Route path="/engineer" 
               element={<Engineer />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;






// function App() {
//   return (
//     <div className="App">
//       <LoginComponent />
//     </div>
//   );
// }

// export default App;
