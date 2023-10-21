import React, {useState} from 'react'

export default function TextForm(props) {
  const handleupcase = ()=> {
    // console.log("upper case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handlelowcase = ()=>{
    console.log("upper case was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleupcasechange = (event)=> {
    // console.log("upper case was change");
    setText(event.target.value)
  }
  const [text , setText] = useState("Enter Text Here !")
  return (
    <>
    <h1>{props.title}</h1>
    <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleupcasechange} id="myBox" rows="6"></textarea>
    </div>
    <h4>{props.experiment}</h4>
    <div className='d-grid gap-3 col-4 mx-auto'>
    <button type="button" className ="btn btn-primary" onClick={handleupcase}>Convert to Upper Case</button>
    <button type="button" className ="btn btn-success" onClick={handlelowcase}>Convert to lower Case</button>









    {/* 
    <button type="button" className ="btn btn-success btn-block">Success</button>
    <button type="button" className ="btn btn-danger btn-block">Danger</button>
    <button type="button" className ="btn btn-warning btn-block">Warning</button>
    <button type="button" className ="btn btn-info btn-block">Info</button> */}
    </div>
    </>
  )
}

