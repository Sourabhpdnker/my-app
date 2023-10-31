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
  const [text , setText] = useState("")
  //******************************************** */
  // const [textTOcopy , setTextTocopy] = useState('fuck youuuu');

  const handleCopyText = () => {
    navigator.clipboard.writeText(text)
    .then(() => alert("copied to clipboard"))
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
    <h1 id='titley'>{props.title}</h1>
    <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleupcasechange} id="myBox" rows="6"></textarea>
        <div className='my-3'>
        <button type="button" className ="btn btn-primary mx-2 my-1" onClick={handlePastText}>Past text</button>
        <button type="button" className ="btn btn-success mx-2 my-1" onClick={handleCopyText}>copy text</button>
        <button type="button" className ="btn btn-warning mx-2 my-1" onClick={handleupcase}>Upper Case</button>
        <button type="button" className ="btn btn-info mx-2 my-1" onClick={handlelowcase}>lower Case</button>
        </div>
    </div>
    {/* <h4 id='titley'>{props.experiment}</h4>
    <div>
    <button type="button" className ="btn btn-warning mx-2 my-1" onClick={handleupcase}>Upper Case</button>
    <button type="button" className ="btn btn-info mx-2 my-1" onClick={handlelowcase}>lower Case</button>
    </div> */}
    </div>
    <div className='container my-3'>
      <h1 id='titley'>Your Text Summary </h1>
      <h5 className='textsum'> {text.split(" ").length-1} Words and {text.length} Charactors .</h5>
      <h5 className='textsum'> {0.008 * text.split(" ").length-1-0.008+1} Minutes to Read.</h5>
    </div>
    <div className='container my-3'>
      <h1 id='titley'>Preview</h1>
      <h5>{text.length>0?text:"Enter Something in the textbox Above tp preview it here !! let's gooooo....!"}</h5>

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

