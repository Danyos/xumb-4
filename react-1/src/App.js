import './App.css';
function App() {
    const x = "muxi"
    let info = [
        {
            id:1,
            name:"valod",
            surname:"karapetyan"
        },
        {
            id:2,
            name:"Gaspar",
            surname:"karapetyan"
        },
        {
            id:3,
            name:"Muxi",
            surname:"karapetyan"
        },

    ]


    return (
        <>
            <h1 className="titles">Barev {x}</h1>
            <div>
                {info.map((res)=>(
                     <div key={res.id}>
                         <h6>{res.name}</h6>
                         <h6>{res.surname}</h6>
                     </div>
                ))
                }
            </div>

        </>
    )
}
export default App;


