import { useState } from "react"
import Header from "./components/Header"
import Button from "./components/Button"
import { formatMoney } from "./helpers";
function App() {
  const [qty, setQty] = useState(10000);

  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  function handleChange(e){
    setQty(Number(e.target.value));
  }
  function handleClickdecrease(){
    const value = qty - STEP;
    if(value < MIN){
      alert('Cantidad no válida');
      return;
    }
    setQty(value);
  }
  function handleClickIncrease() {
      const value = qty + STEP;
      if (value > MAX) {
        alert('Cantidad no válidad')
        return
      }
      setQty(value);
  }
  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header/>
      <div className="flex justify-between my-6">
        <Button
        	  operator='-'
            fn={handleClickdecrease}
        />
        <Button
          operator='+'
          fn={handleClickIncrease}
        />
      </div>
      <input 
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        onChange={handleChange}
        min={MIN}
        max={MAX}
        step={STEP}
        value={qty}
        />
        <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">
          {formatMoney(qty)}
        </p>
    </div>
  )
}

export default App
