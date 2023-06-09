
import { Inter } from '@next/font/google'
import { useEffect, useState } from "react";
import Boards from "./board"
import Register from "./Register"
import Login from "./Login"

const inter = Inter({ subsets: ['latin'] })

function Home() {

  const [menu, setMenu] = useState(0);
  const [Auths, SetAuths] = useState([])
  const [display, setDisplay] = useState([])

  function Menu() {
    switch (menu) {
      // eslint-disable-next-line
      case 0: return <Login Auths = {Auths} setMenu = {setMenu}/>; break;
      // eslint-disable-next-line
      case 1: return <Register Auths={Auths} SetAuths={SetAuths} setMenu = {setMenu}/>; break;
      // eslint-disable-next-line
      case 2: return <Boards display = {display} setDisplay = {setDisplay} setMenu = {setMenu}/>; break;
      // eslint-disable-next-line
      default: return 'Error 404: Page not found'; console.log(menu);
    }
  }

  return (
<div className="bg-blue-100 h-screen" >
<div className='flex justify-center flex-col items-center content-center'>
  {Menu()}
</div> 
</div>
  )
}

export default Home;
