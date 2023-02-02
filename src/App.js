import './App.css';
import { useState } from 'react'

function App() {
  const [toDos,setTodos] = useState([])
  const [toDo,setTodo] = useState('')


  const handleDelete =(id) =>{
    const removeArray =[...toDos].filter((toDo) => toDo.id !== id);
    setTodos(removeArray)
  }


  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input type="text" value={toDo} onChange={(e)=>setTodo(e.target.value)} placeholder="🖊️ Add item..." />
        <i onClick={()=>setTodos([...toDos,{id:Date.now(),text:toDo,Status:false}])} className="fas fa-plus" ></i>
      </div>


      <div className="todos">
        {
          toDos.map((value)=>{
            return(
              <div className="todo">
              <div className="left">
                <input onChange={(e)=>{
                  setTodos(toDos.filter(text=>{
                    if(text.id === value.id){
                      text.status = e.target.checked
                    }
                    return text;
                  }))
                }} value={value.status} name="" id="" type="checkbox" />
                <p>{value.text}</p>
              </div>
              <div className="right">
                <i className="fas fa-times"  onClick={()=>handleDelete(value.id)}></i>
              </div>
            </div>
            )
          })
        }
      </div>
      <br />  
      {toDos.map((obj)=>{
        if(obj.status){
          return(
            <div>
            <h3 style={{color:'white'}}>{obj.text}</h3>
            </div>
          )
        }
        return null;
      })}

    </div>
  );
}

export default App;