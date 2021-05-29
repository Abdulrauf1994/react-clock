import React, { useState } from "react";



function App() {
  let getTime = new Date().toLocaleTimeString();
  const [cTime , cuTime] = useState(getTime);
  
  const updateTime = () => {
    getTime = new Date().toLocaleTimeString();
    cuTime(getTime)
    
  }
  setInterval(updateTime ,1000)
  return (
    
    <>
    <h1>{cTime}</h1>
    </>
  );
}

export default App;
