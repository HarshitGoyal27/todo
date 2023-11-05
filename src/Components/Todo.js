import React,{useState,useEffect} from 'react'

function Todo() {
    let [taskss,setTask]=useState([{task:'Hit Gym',id:1},{task:'Py Bills',id:2},{task:'Meet George',id:3},{task:'Buy Eggs',id:4},{task:'Read a book',id:5},{task:'Organize Office',id:6}]);
    const [input,setInput]=useState('');
    const handlePush=()=>{
        setTask([...taskss,{task:input,id:taskss.length+1}]);
    }
    const handleDelete=(id)=>{
       console.log(id);
       let newArr=[];
       newArr=taskss.filter((ele)=>{
        return ele.id!==id
       })
       setTask(newArr);
    }
    const handleChange=(e)=>{
        setInput(e.target.value);
        console.log(input);
    }
    
    return (
        <div className='container-fluid'>
            <input type='text' onChange={handleChange} value={input} placeholder='Title....' style={{width:'20%'}}></input>
            <input type='submit' onClick={handlePush}></input>
            {
                taskss.map((ele)=>(
                   <div className='row' key={ele.id}>
                    <div className='col-2'>{ele.task}</div>
                    <div className='col-1'>
                        <div onClick={()=>handleDelete(ele.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </div>
                    </div>
                   </div>
                ))
            }
        </div>
    )
}

export default Todo