import React,{useEffect,useState} from "react"
import axios from "axios"

function App(){

const [messages,setMessages] = useState([])

useEffect(()=>{
axios.get("http://localhost:5000")
.then(res=>setMessages(res.data))
},[])

return(
<div>
<h1>DevOps Full Stack Project</h1>
{messages.map((m,i)=>(<p key={i}>{m.text}</p>))}
</div>
)
}

export default App