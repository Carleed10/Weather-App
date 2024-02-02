import './App.css';
import image from './Images/Scarica_Un_sole_e_una_nuvola_gratuitamente-removebg-preview.png'
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate()
  const start = () =>{
    navigate('/weather')
  } 

  return (
    <>
        <div className='landing'>
          <div className="inner">
          <img style={{width: '500px'}} src={image} alt="" />
            
        <div className="text">
        <h1>WEATHER FORECAST</h1>
            <h6>Get necessary information about the weather of any country in the world</h6>
            <button onClick={start}>Get Started</button>
        </div>

          </div>

        </div>
    </>
  );
}

export default App;

