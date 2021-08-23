
import React,{Component} from "react";
import "./App.css";
import Nbar from "./components/navbar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// import FetchContent from "./components/pages/FetchContent";
class App extends Component {
  render(){  
  return (
      <div>
        <Nbar/>
      </div>
    );    
  }
}

export default App;
