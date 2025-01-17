import { useState } from "react";
import Button from "./Button";


function ChangeColor(){

  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="bg-black h-screen w-full " style = {{backgroundColor: color}}>
          <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2" >
            <div className="flex flex-wrap justify-center gap-3 rounded-xl bg-white shadow-lg px-3 py-2">
              <Button colorr = {setColor} btncolor = "lemonchiffon" label = "lemon"/>  
              <Button colorr = {setColor} btncolor = "lavender" label = "lavender"/> 
              <Button colorr = {setColor} btncolor = "peachpuff" label = "peachpuff"/>     
              <Button colorr = {setColor} btncolor = "pink" label = "pink"/>
              <Button colorr = {setColor} btncolor = "tan" label = "Richtan"/>     

              <Button colorr = {setColor} btncolor = "darkseagreen" label = "green"/>     
              <Button colorr = {setColor} btncolor = "olive" label = "olive"/>   

              <Button colorr = {setColor} btncolor = "teal" label = "teal"/>     


            </div>
          </div> 
       </div>
    </>
  )
}

export default ChangeColor;