import React, {useState} from 'react'




export default function TextForm(props) {


    const handleUppClick = () => {
        console.log("Uppercase was clicked");

        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted into uppercase ", "success")
    }

    const handleLowClick = () => {
        console.log("Lowercase button was just clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted into lowercase ", "success")
    }

    const handleClear = () =>{
      console.log("Clear button is clicked ");
      let newText = "";
      setText(newText);
      props.showAlert("Clear Text successfully ", "success")
    }

    const handleOnChange = (event) => {
        console.log("On change was clicked");
        setText(event.target.value);
    } 

    // Credit goes to A
    const handleCopy = () => {
      console.log("I am copy ");
      let text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
      props.showAlert("Copy text successfully", "success")

    }

    // Credit goes to COding wla 
    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra space remove successfully", "success")
    }

    const [text, setText] = useState('');
    // text = new text";  Wrong way to change the state 
    // setText("new text") ;    Correct way to  change the state 
  return (
    <>
    <div className="container"  style={{backgroundColor:props.mode==='dark'?'#042743':'white', color:props.mode==='dark'?'white':'black'}} >

        <h1>{props.heading} </h1>
        <div className="mb-3">
        
        <textarea className="form-control" value = {text} onChange={handleOnChange}  style={{backgroundColor:props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows = "8"></textarea>

      </div>
      <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUppClick}>Convert to Uppercase</button>
      <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
      <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text </button>
      <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text </button>
      <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>

    <div className="container my-3" style = {{color : props.mode === 'dark'?'white':'black'}}> 
        <h1>Your text summary</h1>

    {/* In filter if element condition is true then only the element reside inside array otherwise it's not  */}
    
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} word and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length }minutes read time</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview "}</p>
    </div>
    </>
  )
}
