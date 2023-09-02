import { createContext, useState } from "react"
import { useSearchParams } from "react-router-dom"


 const Loginstatus = createContext(false);
 const User = createContext({});
function GlobalData(props){
      const [checklogin , setchecklogin] = useState(false);
      const [userData , setuserData] = useState({});

    return(
        <Loginstatus.Provider value={[checklogin , setchecklogin]}>
            <User.Provider  value={[userData , setuserData]}>
              {props.children}
            </User.Provider>
            
        </Loginstatus.Provider>
    )
}
export default GlobalData
export {Loginstatus , User}