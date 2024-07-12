import {Route ,Routes   } from "react-router-dom";
import Allmeetuppage from "./pages/Allmeetup";
import Favouritepage from "./pages/Favourite";
import Newmeets from "./pages/Newmeetup";
import Header from "./components/Header";
function App() {
    return( 
        
    <div> 
        
        <Header/>
        <Routes>
        <Route path='/' exact element={ <Allmeetuppage/> }></Route>
        <Route path='/Newmeets' element={ <Newmeets/> }></Route>
        <Route path='/Favouritepage' element={<Favouritepage/> }></Route>
        </Routes>
    </div>
    );
}

export default App;
