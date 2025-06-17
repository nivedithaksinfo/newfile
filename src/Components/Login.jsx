import { useState } from "react"



    

    const Login = () =>{
        const[name,setname] = useState("");
        const[password,setpassword] =useState("");
        const[result,setresult] = useState("");

  let handle =() =>{
        if(name==="niveditha" && password==="1234"){
            return setresult("valid");
        }else{
            return setresult("invalid");
        }
    }

        return(
           <div className="main-container" >
            
                <div className="sub-container">
                                  <h2>LOGIN</h2>
                    <div style={{padding:"5px"}}><label>Name</label></div>
                    <div><input type="text" placeholder="enter your name" onChange={(e)=>setname(e.target.value)}/></div><br></br>
                   <div style={{padding:"5px"}}> <label>Password</label></div>
                    <div ><input type="text" placeholder="enter your password" onChange={(e)=>setpassword(e.target.value)}/></div>
                    <p style={{fontSize:"small", marginLeft:"180px"}}><a href="#">forgot password?</a></p>
                    <h4>{result}</h4>
                    <button onClick={handle}>Submit</button>
                 

                </div>

            </div>
           
        )
    }

    export default Login