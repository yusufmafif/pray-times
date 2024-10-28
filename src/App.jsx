/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from 'react'
import './App.css'
import InputForm from './components/elements/input'
import Dropdown from './components/elements/input/Dropdown'
import html2pdf from 'html2pdf.js';
import Layout from './pages/Layout'


function App() {
  const [isFetching, setIsFetching] = useState(false);
  const [cities, setCities] = useState([]);
  const [long, setLong] = useState(0);
  const [lat, setLat] = useState(0);
  const [options, setOptions] = useState('Month')
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedCityId, setSelectedCityId] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const isSuggestionClicked = useRef(false);
  const [cityName, setCityName] = useState('');

  const [time, setTime] = useState({
    jadwal: []
  });
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [city, setCity] = useState('')
  const exportToPDF = () => {
    const element = document.getElementById('content-to-pdf');
    const options = {
      margin: 0.5,
      filename: 'export.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 }, // adjust scale to fit better
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().from(element).set(options).save();
  };
  useEffect(() => {
    fetch('https://api.myquran.com/v2/sholat/kota/semua')
      .then((res) => res.json())
      .then((data) => setCities(data.data))
      .catch((error) => console.log(error));
  }, []);

  // const lastFetchTime = useRef(0);
  useEffect(() => {
    if (isSuggestionClicked.current) {
      isSuggestionClicked.current = false; // Reset flag setelah klik suggestion
      return; // Hentikan fetch ketika suggestion diklik
    }

    const fetchCityData = async () => {
      if (!city) return; // Jangan fetch jika input kosong

      setIsFetching(true);
      try {
        const formattedCity = encodeURIComponent(city);
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${formattedCity}&format=json&limit=2`
        );
        const data = await response.json();
        setSuggestions(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsFetching(false);
      }
    };

    const delayDebounceFn = setTimeout(() => {
      fetchCityData();
    }, 300);

    return () => clearTimeout(delayDebounceFn); // Bersihkan timeout
  }, [city]);

  const currentYear = new Date().getFullYear();
  const extractBulan = (selectedOption) => {
    if (selectedOption === 'Januari') {
      return '01';
    } else if (selectedOption === 'Februari') {
      return '02';
    }
    else if (selectedOption === 'Maret') {
      return '03';
    }
    else if (selectedOption === 'April') {
      return '04';
    }
    else if (selectedOption === 'Mei') {
      return '05';
    }
    else if (selectedOption === 'Juni') {
      return '06';
    }
    else if (selectedOption === 'Juli') {
      return '07';
    }
    else if (selectedOption === 'Agustus') {
      return '08';
    }
    else if (selectedOption === 'September') {
      return '09';
    }
    else if (selectedOption === 'Oktober') {
      return '10';
    }
    else if (selectedOption === 'November') {
      return '11';
    }
    else if (selectedOption === 'Desember') {
      return '12';
    }
  };

  const generateTime = () => {
    // fetch(`https://api.aladhan.com/v1/calendar/2024/${extractBulan(selectedOption)}?latitude=${lat}&longitude=${long}&method=20&month=10&year=2024`)
    fetch(`https://api.aladhan.com/v1/calendar/${currentYear}/${extractBulan(selectedOption)}?latitude=${lat}&longitude=${long}&method=20`)
      .then((res) => res.json())
      .then((data) => {
        setTime(data.data);
      })
      .catch((error) => console.log(error));


    // fetch(`https://api.myquran.com/v2/sholat/jadwal/${selectedCityId}/2024/${extractBulan(selectedOption)}`)
    //   .then((res) => res.json())
    //   .then((data) => setTime(data.data))
    //   .catch((error) => console.log(error))
  }

  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);


  const handleInputChange = (event) => {
    setCity(event.target.value); // Update state city
  };

  const handleSuggestionClick = (suggestion) => {
    setLong(suggestion.lon);
    setLat(suggestion.lat);
    setCity(suggestion.display_name.split(",")[0]);
setCityName(suggestion.display_name);
    // Tandai bahwa suggestion diklik
    isSuggestionClicked.current = true;
    setSuggestions([]); // Kosongkan suggestions
  };



  const handleDropdownSelect = (value) => {
    setSelectedOption(value);
  }


  useEffect(() => {
    if (city && selectedOption) {
      setIsDisabled(false);
    }
  }, [city, selectedOption]);

  return (
    <Layout>
      {/* <Navbar /> */}
      <div className='md:flex justify-between gap-4'>
        <div className='flex justify-center'>
          <InputForm
            label="Kota"
            value={city}
            type="text"
            placeholder={city ? "" : "Aceh"}
            name="city"
            ref={emailRef}
            onChange={handleInputChange}
            isLoading={isFetching}
          />

          {city.trim() !== '' && suggestions.length > 0 && (
            <ul className='absolute z-50 mt-20 bg-white border rounded-md w-80'>
              {suggestions.map((suggestion) => (
                <li
                  className="hover:bg-gray-100 p-2"
                  key={suggestion.place_id}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion?.display_name ? suggestion.display_name.split(",").slice(0, 3).join(", ") : ""}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className='flex justify-center'>
          <Dropdown onSelect={handleDropdownSelect} />
        </div>
      </div>

      <div className="card">
        {!isDisabled && (
          <button
            className=" px-4 py-2 text-black bg-white rounded-lg"
            onClick={generateTime}
          >
            Generate
          </button>
        )}

      </div>
      {time && time.length > 0 && (<div className='flex-grow w-full justify-center overflow-x-auto bg-white rounded-2xl px-5 py-5 sm:px-10 sm:py-10 m-0 '>
        <h2 className="text-2xl lg:text-2xl font-bold mb-0">JADWAL SHOLAT </h2>
        <h3 className="text-sm lg:text-sm font-regular mb-4">{cityName}</h3>
        <table className="text-black font-light w-full max-w-2xl min-w-full table-auto bg-white">
          <thead>
            <tr>
              <th className="borderfont-bold sm:text-sm pb-2 text-xs">Tanggal</th>
              <th className="font-medium sm:text-sm pb-2 text-xs">Imsak</th>
              <th className="font-medium sm:text-sm pb-2 text-xs">Shubuh</th>
              <th className="font-medium sm:text-sm pb-2 text-xs">Dzuhur</th>
              <th className="font-medium sm:text-sm pb-2 text-xs">Ashar</th>
              <th className="font-medium sm:text-sm pb-2 text-xs">Maghrib</th>
              <th className="font-medium sm:text-sm pb-2 text-xs">Isya&apos;</th>
            </tr>
          </thead>
          <tbody>
            {time && time.map((jadwal, index) => (
              <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}>
                <th className="table-cell font-medium text-tiny text-top align-top ">{jadwal.date.readable}</th>
                <td className="table-cell font-medium text-tiny text-top align-top ">{jadwal.timings.Imsak.split(" ")[0]}</td>
                <td className="table-cell font-medium text-tiny text-top align-top ">{jadwal.timings.Fajr.split(" ")[0]}</td>
                <td className="table-cell font-medium text-tiny text-top align-top ">{jadwal.timings.Dhuhr.split(" ")[0]}</td>
                <td className="table-cell font-medium text-tiny text-top align-top ">{jadwal.timings.Asr.split(" ")[0]}</td>
                <td className="table-cell font-medium text-tiny text-top align-top ">{jadwal.timings.Maghrib.split(" ")[0]}</td>
                <td className="table-cell font-medium text-tiny text-top align-top ">{jadwal.timings.Isha.split(" ")[0]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>)}


      {time && time.length > 0 && (<div className='hidden'> <div className='flex flex-col items-center overflow-x-auto bg-white pb-4 rounded-2xl px-10 py-10' id="content-to-pdf">
        <h2 className="text-2xl lg:text-2xl font-bold mb-4">JADWAL SHOLAT</h2>
        <h3 className="text-sm lg:text-sm font-regular mb-4">{cityName}</h3>
        <table className="text-black font-light w-full max-w-2xl min-w-full table-auto bg-white">
          <thead>
            <tr>
              <th className="borderfont-bold text-sm pb-2">Tanggal</th>
              <th className="font-medium text-sm pb-2">Imsak</th>
              <th className="font-medium text-sm pb-2">Shubuh</th>
              <th className="font-medium text-sm pb-2">Dzuhur</th>
              <th className="font-medium text-sm pb-2">Ashar</th>
              <th className="font-medium text-sm pb-2">Maghrib</th>
              <th className="font-medium text-sm pb-2">Isya&apos;</th>
            </tr>
          </thead>
          <tbody>
            {time && time.map((jadwal, index) => (
              <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}>
                <th className="table-cell font-medium text-tiny text-top align-top pt-0 pb-3">{jadwal.date.readable.split(" ")[0]}</th>
                <th className="table-cell font-medium text-tiny text-top align-top pt-0 pb-3">{jadwal.timings.Imsak.split(" ")[0]}</th>
                <th className="table-cell font-medium text-tiny text-top align-top pt-0 pb-3">{jadwal.timings.Fajr.split(" ")[0]}</th>
                <th className="table-cell font-medium text-tiny text-top align-top pt-0 pb-3">{jadwal.timings.Dhuhr.split(" ")[0]}</th>
                <th className="table-cell font-medium text-tiny text-top align-top pt-0 pb-3">{jadwal.timings.Asr.split(" ")[0]}</th>
                <th className="table-cell font-medium text-tiny text-top align-top pt-0 pb-3">{jadwal.timings.Maghrib.split(" ")[0]}</th>
                <th className="table-cell font-medium text-tiny text-top align-top pt-0 pb-3">{jadwal.timings.Isha.split(" ")[0]}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div></div>)}

      {time && time.length > 0 && (<div className='pt-5'>
        <button className='bg-white ' onClick={exportToPDF}>Export as PDF</button>
      </div>)}
    </Layout>
  )
}

export default App
