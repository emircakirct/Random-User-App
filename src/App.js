import './App.css';
import { useEffect, useState } from "react"
import axios from "axios";
import email from './email.svg'
import location from './location.svg'
import phone from './phone.svg'



function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    handleClick()
  }, [])

  function handleClick() {
    axios.get("https://randomuser.me/api/")
      .then(res => setData(res.data.results))
  }



  return (
    <div className='container'>


      {data.map(item => (
        <div className='wrapper'>
          <div className='row'>
            <img src={item?.picture?.large} alt="" className='pic' />
            <h3 className='text'>{item.name.title} {item.name.first} {item.name.last}</h3>
          </div>
          <div className='row'>
            <img src={email} alt="" className='icon' />
            <p className='text'>{item.email}</p>
          </div>
          <div className='row'>
            <img src={phone} alt="" className='icon'/>
            <p className='text'>{item.phone}</p>
          </div>
          <div className='row'>
            <img src={location} alt="" className='icon'/>
            <p className='text'>{item.location.city} - {item.location.country}</p>
          </div>
          <div className='bottom'>
            <p>Age: {item.dob.age}</p>
            <p>Registered Date: {item.registered.date}</p>
            <button className='button' onClick={handleClick}>New User </button>
      
          </div>
        </div>

      ))}

    </div>

  );
}

export default App;
