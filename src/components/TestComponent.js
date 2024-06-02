import { useState } from "react";



export default function TestComponent(){

    const[isOpened, setIsOpened] = useState(false);

    return(<>
    
    <h1>HI</h1>
    <button onClick={()=> {setIsOpened(!isOpened);}}>{isOpened? <h3>Close Game</h3>:<h3> open Game</h3>} </button>

    {isOpened? <Iframe/> : <h2>The Game will be opened here.</h2>}
   
    </>);

}



function Iframe(){

    return( <>
    
    <h1>LTUC</h1>
  <iframe src="https://marketjs.cdn.start.gg/9n3wz0fzx1hr/v27/index.html?msstart_sdk_init=eyJwYXJlbnRPcmlnaW4iOiJodHRwczovL3d3dy5tc24uY29tIiwiY2xpZW50SWQiOiIxQjVDRjA1OTkzRDk2ODk2MkM5NEU0NjA5MjBCNjlEQyIsImxvY2FsZSI6ImFyLWFlIiwiZW50cnlQb2ludElkIjoiIn0" width="800" height="600" frameborder="1"></iframe>
  </> );

    }