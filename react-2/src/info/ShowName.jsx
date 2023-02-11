import Context from "../Context";
import {useContext} from "react";

export default function ShowName(){
    const value=useContext(Context)
    return (
        <>
            <h2>{value&&value.name}</h2>
            <h2>{value&&value.phone}</h2>
        </>
    )
}