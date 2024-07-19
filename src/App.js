import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import downloadImage from './download3.png';
import DataItem from "./components/DataItem";
function App() {
  return (
    <div className="flexbox">
      <DataItem />
      <img  src = {downloadImage} alt="Logo" className='Logo'/>
      <Outlet />
    </div>
  );
}

export default App;