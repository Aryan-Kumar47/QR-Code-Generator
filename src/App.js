import QRCode from 'react-qr-code';
import './App.css';
import { useState } from 'react';

function App() {
  const [form , setForm] = useState({
    text : '',
    bgColor : '#E2E8F0',
    fgColor : '#000',
    title : ''
  })

  const changeHandler = (e) => {
    setForm(prev => {
      return {
        ...prev , [e.target.name] : e.target.value
      }
    })
  }

  return (
    <div className="font-sans bg-slate-200 h-screen w-screen flex flex-col p-10">
      <h1 className='text-7xl text-center'>QR Code Generator</h1>
      <div className='flex sm:flex-row flex-col w-full h-full justify-around items-center'>
        <div className='flex flex-col w-[400px]'>
          <label htmlFor='text' >Enter Text/Url :</label>
          <input type='text' className='w-full mt-2 mb-4' placeholder='...' name='text' id='text' value={form.text} onChange={e => changeHandler(e)}/>

          <label htmlFor='bgColor'>Enter background for QR-Code :</label>
          {/* <input type='text' className='w-full mt-2 mb-4' placeholder='...' name='bgColor' id='bgColor' value={form.bgColor} onChange={e => changeHandler(e)}/> */}
          <input type='color' name='bgColor' value={form.bgColor} className='' onChange={e => changeHandler(e)}></input>

          <label htmlFor='fgColor'>Enter color for QR-Code :</label>
          {/* <input type='text' className='w-full mt-2 mb-4' placeholder='...' name='fgColor' id='fgColor' value={form.fgColor} onChange={e => changeHandler(e)}/> */}
          <input type='color' name='fgColor' value={form.fgColor} onChange={e => changeHandler(e)}></input>
        </div>
        <div className='p-10 border border-black'>
          <QRCode
          size={256}
          value={form.text === '' ? 'https://github.com/Aryan-Kumar47' : form.text}
          bgColor={form.bgColor === '' ? '#fff' : form.bgColor}
          fgColor={form.fgColor === '' ? '#000' : form.fgColor}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
