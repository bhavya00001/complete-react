function Button({colorr="olive", label="olive", btncolor="olive"}){ //in case parameters are missing we just gave them the alternate names
  return (
    <>           
      <button 
        className="outline-none px-4 rounded-xl text-black py-1" 
        style={{backgroundColor:btncolor}}
        onClick={()=> colorr(btncolor)}>
         {label}
      </button>      
    </>
  )
}

export default Button