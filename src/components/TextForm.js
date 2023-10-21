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
  //******************************************** */
  // const [textTOcopy , setTextTocopy] = useState('fuck youuuu');

  const handleCopyText = () => {
    navigator.clipboard.writeText(text)
    .then(() => alert("The text copied to clipboard"))
    .catch(err => console.err("Failed to copy the text : ", err));
  };
  
  const handlePastText = () => {
    navigator.clipboard.readText()
    .then(text => setText(text))
    .catch(err => console.err("Failed to past the text : ",err));
  };
  return (
    <>
    <div className='container'>
    <h1>{props.title}</h1>
    <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleupcasechange} id="myBox" rows="6"></textarea>
        <button type="button" className ="btn btn-primary" onClick={handlePastText}>Past text</button>
    </div>
    <h4>{props.experiment}</h4>
    <div className='d-grid gap-3 col-4 mx-auto'>
    <button type="button" className ="btn btn-primary" onClick={handleupcase}>Convert to Upper Case</button>
    <button type="button" className ="btn btn-success" onClick={handlelowcase}>Convert to lower Case</button>
    </div>
    </div>
    <div className='container my-3'>
      <h1>Your text summary :- </h1>
      <h4 className='textsum'> {text.split(" ").length} Words and {text.length} Charactors .</h4>
      <h4 className='textsum'> {0.008 * text.split(" ").length} Minutes to Read.</h4>
    </div>
    <div className='container my-3'>
      <h1>Preview :-</h1>
      <h5>{text}</h5>
      <copast></copast>
    </div>
    <div>
      {/* <input type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      /> */}
       <button type="button" className ="btn btn-success" onClick={handleCopyText}>copy text</button>
    </div>
    </>
  )
}

