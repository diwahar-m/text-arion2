import {Route,BrowserRouter,Routes} from "react-router-dom"
import Card from "./components/Card"
import Grid from "./components/Grid"
import Detail from "./components/Detail"
import './App.css';

function App() {

  return(

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Card/>}/>
        <Route path="/grid" element={<Grid/>} />
        <Route path="/detail" element={<Detail/>} />
      </Routes>
     
    </BrowserRouter>
  )

};


export default App;
