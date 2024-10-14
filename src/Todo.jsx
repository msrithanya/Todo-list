import React, { useEffect, useState,useRef } from 'react';
import './Todo.css';
function Todo() {
  const [valu, setValue] = useState([]);
  const blue=useRef(null);
  const pink=useRef(null);
  const textColor=useRef(null);
  const add = (num) => {
    const newValu = [...valu, { data: "",color:num}];
    setValue(newValu);
    localStorage.setItem("value", JSON.stringify(newValu));
  };

  const con = (e, i) => {
    const content = e.target.value;
    const newa = [...valu];
    newa[i].data = content;
    setValue(newa);
    localStorage.setItem("value", JSON.stringify(newa));
  };

  useEffect(() => {
    const storedValu = JSON.parse(localStorage.getItem("value"));
    if (storedValu) {
      setValue(storedValu);
    }
  }, []);

  const dele = (i) => {
    const newArr = valu.filter((_, index) => index != i);
    setValue(newArr);
    localStorage.setItem("value", JSON.stringify(newArr));
  };
const colors=()=>{
  if(  blue.current.style.display=="block"){
     blue.current.style.display="none"
     pink.current.style.display="none"
  }
  else{
  blue.current.style.display="block"
    pink.current.style.display="block"
  }

}
  return (
    <div>
      <button className='add_button' onClick={colors}>+</button>
      <div ref={blue} onClick={()=>add(1)} className='blue'>
        
      </div>
      <div ref={pink} onClick={()=>add(2)} className='pink'>
      </div>
      <div className='outer'>
      {valu?.map((v, i) => (
        <div className='container' key={i}>
          <textarea ref={ textColor}
            placeholder="Type something"
            onChange={(e) => con(e, i)}
            value={v.data}
             style={{backgroundColor: v.color === 1 ? 'lightblue' 
              : v.color === 2 ? 'rgb(246, 226, 229)' 
              : v.color === 3 ? 'red' 
              : 'black' }}
          />
          <button onClick={() => dele(i)}>Delete</button>
        </div>
      ))}
      </div>
      
    </div>
  );
}

export default Todo;

