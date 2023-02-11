import {useContext, useEffect} from "react";
import ShowEmail from "./info/ShowEmail";
import ShowUserName from "./info/ShowUserName";
import ShowName from "./info/ShowName";
function InfoShow(){
    return(
        <>

          <ShowEmail />
          <ShowUserName/>
          <ShowName/>
        </>
    )
}
export default InfoShow