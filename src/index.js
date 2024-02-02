import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Weather from './Weather';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <BrowserRouter>
        <Routes>
          <Route path='/' element = {<App />}/>
          <Route path='/weather' element = {<Weather />}/>
        </Routes>
        
        </BrowserRouter>
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import React from 'react'
// import './weather.css'
// import { useState } from 'react'
// import axios from 'axios'

// const Weather = () => {
//   const [data, setdata] = useState({})
//   const [country, setcountry] = useState("")
//   const ApiKey = '3b04ff4f70043b14de64f0810de46965'

//   const check = () =>{
//     axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${ApiKey}`)
        
//     .then((res)=>{
//         console.log(res.data);
//         const khalid = res.data
//         console.log( "Country : ",khalid);
//         setdata(khalid)

//     }).catch((err)=>{
//         console.log(err);
//     })
//   }
//   // console.log(data);
//   return (
//     <>
//       <div className='all'>
//         <div className="">
//           <input type="text" onChange={((el)=>setcountry(el.target.value))} />
//           <button onClick={check}>CHECK</button>
//         </div>
//         <div>
//           {data ? (
//             <h2 style={{color:  "white"}}> Country Name : {data.name}</h2>
//           ) : (
//             <h2>Country Not Found</h2>
//           )}
//         </div>

//       </div>

      
  
    
//     </>
//   )
// }

// export default Weather