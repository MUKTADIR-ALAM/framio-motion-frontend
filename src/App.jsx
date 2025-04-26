import { Route, Routes } from "react-router";
import MainLayout from "./Layout/MainLayout";
import Hompage from "./Pages/Home/Hompage";
import WeddingVideoPage from "./Pages/Home/WeddingVideoPage";

function App() {

  return (
    <>
      <Routes>

        <Route path='/' element={<MainLayout />}>
          <Route path="/" element={<Hompage/>}> </Route>
          <Route path="/wedding" element={<WeddingVideoPage/>}> </Route>
        </Route>

      </Routes>


      
    </>
  );
}

export default App;








