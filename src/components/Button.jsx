function Button({operator, fn}) {
    
  return (
     <button 
        type="button"
        onClick={fn} 
        className="h-10 w-10 flex items-center justify-center font-bold text-white text-2xl bg-lime-500 rounded-full hover:ring-offset-2 hover:ring-2 hover:outline-none hover:ring-lime-500">{operator}</button>
  )
}

export default Button