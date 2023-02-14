import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
function Detalis() {
    const { id } = useParams()
    const [info,setinfo]=useState()
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/'+id)
            .then(response => response.json())
            .then(json => setinfo(json))
    },[])
    return (
        <div className="App">
            <main className="App-header">
                {
                    info&&(
                        <>
                            <h2>{info.title}</h2>
                            <p>{info.body}</p>
                        </>

                    )
                }


            </main>
        </div>
    );
}

export default Detalis;
