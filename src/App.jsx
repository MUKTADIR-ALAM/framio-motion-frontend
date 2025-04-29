import { Route, Routes } from "react-router";
import MainLayout from "./Layout/MainLayout";
import Hompage from "./Pages/Home/Hompage";
import WeddingVideoPage from "./Pages/Home/WeddingVideoPage";
import ReelsVideoPage from "./Pages/Home/ReelsVideoPage";

function App() {


 
  
  

  return (
    <>
      <Routes>

        <Route path='/' element={<MainLayout />}>
          <Route path="/" element={<Hompage/>}> </Route>
          <Route path="/wedding" element={<WeddingVideoPage/>}> </Route>
          <Route path="/reels" element={<ReelsVideoPage/>}> </Route>
        </Route>
      </Routes>


      
    </>
  );
}

export default App;








