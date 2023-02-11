import './App.css';
import React, {useEffect, useState} from "react";
import InfoShow from "./InfoShow";
import Context from "./Context";


function App() {


const [state,setstate]=useState()
const [view,setview]=useState()

const [selectId,setselectId]=useState([])

    useEffect(()=>{
        if(localStorage.getItem('list')){
            let i=localStorage.getItem('list')
            setstate(JSON.parse(i))
        }else{
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(json =>{
                    setstate(json)
                    localStorage.setItem('list',JSON.stringify(json))

                } )
        }
    },[])
    useEffect(()=>{
     if(state){
         localStorage.setItem('list',JSON.stringify(state))
     }
    },[state])
function deleted(id){
    setstate(state.filter(res=>res.id!== +id))
}
function chekDeleted(id){

    if(selectId.includes(id)){
        setselectId(selectId.filter(res=>res!==id))
    }else{
        setselectId([...selectId,+id])
    }
}
function deletedAll(){
    let x=state.filter(res=>!selectId.includes(res.id))
    setstate(x)
    setselectId([])
}
useEffect(()=>{
    console.log(selectId)
},[selectId])
    function ShowInfo(id){
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(json =>{
                setview(json)

            } )
    }
  return (
    <div className="App">
      <table>
          <thead>
          <tr>
              <th></th>
              <th>id</th>
              <th>name</th>
              <th>username</th>
              <th>email</th>
              <th colSpan={2}>config</th>
          </tr>
          </thead>
          <tbody>
              {
                  state&&state.map(res=>(
                      <tr key={res.id}>
                             <td><input type="checkbox" onChange={()=>chekDeleted(res.id)}/></td>
                             <td>{res.id}</td>
                             <td >{res.name}</td>
                             <td>{res.username}</td>
                             <td>{res.email}</td>
                             <td onClick={()=>deleted(res.id)}>x</td>
                             <td onClick={()=>ShowInfo(res.id)}>Show</td>
                      </tr>
                  ))
              }
          </tbody>
      </table>
        {
            selectId.length>0?<button onClick={deletedAll}>Delete {selectId.length} item</button>
            :''
        }
        {
            view?
                <Context.Provider value={view}>
                    <InfoShow  />
                </Context.Provider>



                :
                'Datark'
        }



    </div>
  );
}

export default App;

// 1. anvanman vra sexmelis tpi ir aveli shat informatcyanery

