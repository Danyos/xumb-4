import Context from "../Context";
import {useContext} from "react";

export default function ShowUserName(){
    const value=useContext(Context)
    return (
        <>
            <h2>{value&&value.username}</h2>
        </>
    )
}