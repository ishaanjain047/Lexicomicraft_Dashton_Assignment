import './App.css';
import React,{useState,useEffect} from 'react';
import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Comic } from './components/Comic';
import { v4 as uuid } from "uuid";

const unique_id = uuid();

const newPanelObj = [
  {
    id: unique_id,
    desc: "",
    imgsrc: "",
    loading: false,
  },
];

// get kar idhar local storage se 
let savedPanels = JSON.parse(
  localStorage.getItem('panels')
);
if(!savedPanels) savedPanels = newPanelObj;

function App() {
  const [panels, setPanels] = useState(savedPanels);
  

	useEffect(() => {
		const savedPanels = JSON.parse(
			localStorage.getItem('panels')
		);

		if (savedPanels) {
			setPanels(savedPanels);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'panels',
			JSON.stringify(panels)
		);
	}, [panels]);

  return (
    <div className="appWrapper">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage panels={panels} setPanels={setPanels}/>} />
          <Route path="/comic" element={<Comic panels={panels} setPanels={setPanels}  />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
