import React, { useEffect, useState,useRef } from 'react';
import './Todo.css';
function Todo() {
  const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Month is zero-based
const day = currentDate.getDate();
const da = `${day}/${month}/${year}`
  const [valu, setValue] = useState([]);
  const blue=useRef(null);
  const pink=useRef(null);
  const red=useRef(null);
  const textColor=useRef(null);
  const add = (num) => {
    const newValu = [...valu, { data: "",color:num,date:da}];
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
      red.current.style.display="none"
  }
  else{
  blue.current.style.display="block"
    pink.current.style.display="block"
     red.current.style.display="block"
  }

}
  return (
    <div>
      <button className='add_button' onClick={colors}>+</button>
      <div ref={blue} onClick={()=>add(1)} className='blue'>
        
      </div>
      <div ref={pink} onClick={()=>add(2)} className='pink'>
      </div>
      <div ref={red} onClick={()=>add(3)} className='red'>
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
              : v.color === 3 ? 'rgb(233, 122, 139)' 
              : 'black' }}
          />
          <div className='bottom'><div>{v.date}</div>
          <button className='dele'onClick={() => dele(i)}><img src='Trash.png'/></button>  
        </div>
        </div>
      ))}
      </div>
      
    </div>
  );
}

export default Todo;

