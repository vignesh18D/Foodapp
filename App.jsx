import{BrowserRouter,Route,Routes} from "react-router-dom"
import './App.css'
import Header from './components/Header';
import Home from "./components/Home";


function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <div className="container">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cart"  />

    </Routes></div>
    </BrowserRouter>
    </>

)}

export default App
