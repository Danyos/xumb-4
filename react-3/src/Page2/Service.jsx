import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
function Service() {
    const [info,setinfo]=useState()
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setinfo(json))
    },[])
    return (
        <div className="App">
            <main className="App-header">
                {info&&info.map(res=>(
                    <div key={res.id}>
                        <h2>{res.id}</h2>
                        <h2>{res.title}</h2>
                        <Link to={`/service/detalis/${res.id}`}>Read More</Link>
                    </div>
                ))

                }

            </main>
        </div>
    );
}

export default Service;
