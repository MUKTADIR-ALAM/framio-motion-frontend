import { Route, Routes } from "react-router";
import MainLayout from "./Layout/MainLayout";
import Hompage from "./Pages/Home/Hompage";
function App() {


 
  
  

  return (
    <>
      <Routes>

        <Route path='/' element={<MainLayout />}>
          <Route path="/" element={<Hompage/>}> </Route>
        </Route>
      </Routes>


      
    </>
  );
}

export default App;








