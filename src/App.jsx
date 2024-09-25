import { useState, useEffect, useRef } from 'react'
import './App.css'
import InputForm from './components/elements/input'
import Dropdown from './components/elements/input/dropdown'

function App() {
  const [count, setCount] = useState(0)
  const [time, setTime] = useState({})
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const dummyData = [
    { name: "Aceh" },
    { name: "Jakarta" },
    { name: "Bali" },
  ]

  useEffect(() => {
    fetch('https://api.myquran.com/v2/sholat/jadwal/1204/2024/09/24')
      .then((res) => res.json())
      .then((data) => setTime(data.data))
      .catch((error) => console.log(error))
  }, [])
  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const handleInputChange = async (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
    try {
      // const response = await axios.get(import.meta.env.VITE_SERVER + `/products/${inputValue}`);
      // setSuggestions(response.data);
      setSuggestions(dummyData);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  return (
    <>
      <div className='md:flex justify-center items-center space-x-5'>
        <div>
        <InputForm
          label="Kota"
          type="email"
          placeholder="Jakarta"
          name="email"
          ref={emailRef}
          onChange={handleInputChange}
        /> 
        {query.trim() !== '' && suggestions.length > 0 && (
          <ul className='absolute z-50 bg-white column is-8 border rounded-md w-80'>
            {suggestions.map((suggestion, index) => (
              <li className="hover:bg-gray-100 p-2" key={`${suggestion.id}-${index}`} onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion.name}
              </li>
            ))}
          </ul>
        )}
        </div>
        <Dropdown/>
      </div>

      <h1 className='text-white'>{time.jadwal?.subuh}
      </h1>
      <div className="card">
        <button className='bg-white' onClick={() => setCount((count) => count + 1)}>
        Generate
        </button>
      </div>
    </>
  )
}

export default App
