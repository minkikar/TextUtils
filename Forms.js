import React,{useState} from 'react'


export default function Forms(props) {
  const handleUpclick = ()=>{
    console.log("UpperCase was clicked")
    let newtext=text.toLocaleUpperCase();
    settext(newtext)
  }
  const handleLcclick = ()=>{
    console.log("LowerCase was clicked")
    let newtext1=text.toLocaleLowerCase();
    settext(newtext1)
  }
  const handleonchange = (event)=>{
    console.log("UpperCase was clicked")
    settext(event.target.value);
  }
  const [text, settext] = useState('enter text here')
  return (
    <>
    <h1>{props.heading}</h1>
   
        <div className="form-group">
    <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleonchange} value={text} rows="8"></textarea>
  
  </div>
<button className='btn btn primary' onClick={handleUpclick}>Convert to Uppercase</button>
<button className='btn btn primary2' onClick={handleLcclick}>Convert to LowerCase</button>
    </>
  )
}
