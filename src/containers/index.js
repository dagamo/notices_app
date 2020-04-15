import React, {useState} from 'react'

const SearchView = (props)=>{
  const[text, setText] = useState("");

  const handleOnChangeText = (event) => {
    const {target:{value}} = event;
    setText(value)
  }

  return <div>
    <input type="text" value={text} onChange={handleOnChangeText}></input>
    <button>Buscar</button>
  </div>
}

export default SearchView