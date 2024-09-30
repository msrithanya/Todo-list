import React, { useEffect, useState } from 'react';
function Todo() {
  const [valu, setValue] = useState([]);
  const add = () => {
    const newValu = [...valu, { data: "" }];
    setValue(newValu);
    localStorage.setItem("value", JSON.stringify(valu)); 
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
  return (
    <div>
      <button onClick={add}>Add</button>
      {valu?.map((v, i) => (
        <textarea
          key={i}
          placeholder="Type something"
          onChange={(e) => con(e, i)}>
            {v.data}
          </textarea>
      ))}
    </div>
  );
}

export default Todo;
