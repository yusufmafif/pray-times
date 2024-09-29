/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from 'react'
import './App.css'
import InputForm from './components/elements/input'
import Dropdown from './components/elements/input/dropdown'
import Navbar from './components/Fragments/Navbar'
import html2pdf from 'html2pdf.js';

function App() {
  
  const [count, setCount] = useState(0)
  const [options, setOptions] = useState('Month')
  const [selectedOption, setSelectedOption] = useState('');

  const [time, setTime] = useState({})
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [city, setCity] = useState('')

  const exportToPDF = () => {
    const element = document.getElementById('content-to-pdf');
    const options = {
      margin: 0.5,
      filename: 'export.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a3', orientation: 'portrait' }
    };
    html2pdf().from(element).set(options).save();
  };

  const dummyData = [
    { name: "Aceh" },
    { name: "Jakarta" },
    { name: "Bali" },
  ]

  useEffect(() => {
    fetch('https://api.myquran.com/v2/sholat/jadwal/1204/2024/09')
      .then((res) => res.json())
      .then((data) => setTime(data.data))
      .catch((error) => console.log(error))

  }, [])



  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);




  const handle = (a) => {
    setCity(a)
    setSuggestions([])
  }
  const handleInputChange = async (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
    setCity(inputValue);
    try {
      // const response = await axios.get(import.meta.env.VITE_SERVER + `/products/${inputValue}`);
      // setSuggestions(response.data);
      setSuggestions(dummyData);

    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };
  const extractTanggal = (tanggal) => {
    const [, tanggalString] = tanggal.split(", ");
    const [tgl] = tanggalString.split("/"); // Ambil elemen pertama

    return tgl; // Kembalikan tanggal
  };

  const handleDropdownSelect = (value) => {
    setSelectedOption(value);
  }
  return (
    < >
      <Navbar />
      <div className='md:flex justify-between gap-4'>
        <div className='flex justify-center'>
          <InputForm
            label="Kota"
            value={city}
            type="email"
            placeholder={city ? "" : "Aceh"}
            name="email"
            ref={emailRef}
            onChange={handleInputChange}
          />
          {query.trim() !== '' && suggestions.length > 0 && (
            <ul className='absolute z-50 mt-20 bg-white border rounded-md w-80'>
              {suggestions.map((suggestion, index) => (
                <li className="hover:bg-gray-100 p-2" key={`${suggestion.id}-${index}`} onClick={() => handle(suggestion.name)}>
                  {suggestion.name}

                </li>

              ))}
            </ul>

          )}
        </div>
        <div className='flex justify-center'>
          <Dropdown onSelect={handleDropdownSelect} />
        </div>
      </div>

      {/* <h1 className='text-white'>{time.jadwal?.subuh}
      </h1> */}
      <div className="card">
        <button className='bg-white' onClick={() => setCount((count) => count + 1)}>
          Generate
        </button>

      </div>

      <div className='flex flex-col items-center overflow-x-auto bg-white pb-4' id="content-to-pdf">
        <h2 className="text-2xl lg:text-4xl font-bold mt-8 mb-4">JADWAL SHOLAT</h2>
        <table className="text-black font-light w-full max-w-2xl min-w-full table-auto bg-white ">
          <thead>
            <tr>
              <th className="font-bold sm:text-lg text-sm pt-5">Tanggal</th>
              <th className="font-medium sm:text-lg text-sm pt-5">Imsak</th>
              <th className="font-medium sm:text-lg text-sm pt-5">Shubuh</th>
              <th className="font-medium sm:text-lg text-sm pt-5">Dzuhur</th>
              <th className="font-medium sm:text-lg text-sm pt-5">Ashar</th>
              <th className="font-medium sm:text-lg text-sm pt-5">Maghrib</th>
              <th className="font-medium sm:text-lg text-sm pt-5">Isya&apos;</th>
            </tr>
          </thead>
          <tbody>
            {time.jadwal && time.jadwal.map((jadwal, index) => (
                <tr key={index}>
                    <th className="font-medium sm:text-lg text-xs ">{extractTanggal(jadwal.tanggal.trim())}</th>
                    <th className="font-medium sm:text-lg text-xs">{jadwal.imsak}</th>
                    <th className="font-medium sm:text-lg text-xs">{jadwal.subuh}</th>
                    <th className="font-medium sm:text-lg text-xs">{jadwal.dzuhur}</th>
                    <th className="font-medium sm:text-lg text-xs">{jadwal.ashar}</th>
                    <th className="font-medium sm:text-lg text-xs">{jadwal.maghrib}</th>
                    <th className="font-medium sm:text-lg text-xs">{jadwal.isya}</th>
                </tr>
            ))}
        </tbody>
        </table>
      </div>

      <button className='bg-white' onClick={exportToPDF}>Export as PDF</button>
    </>
  )
}

export default App
