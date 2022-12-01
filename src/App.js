import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';


function App() {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className="App">
 
 
    <div className='App-Container'>
    <h3 className='Header'>
      Australia's most secure & trusted garage door brand
    </h3>
    <div className='Detail'>
      We know that behind your garage door are the things that matters to you most. The things that makes your house a home.
      Most garage doors just close but a B&D garage door can be lock.The things that  an home.
    </div>
  <div className="flexDisplay" >
    <div className='Detail-info'>
      <div className='Info-icon'>
        <div className='Icon-text'>
        <div className='Icon'>
          <img  className="Image"src='guarantee.png' alt="gurantee"/>
        </div>
        <div className='Info'>
          10 Year Warranty
        </div>
        </div>
      <div className='objectives'>
            All our garage doors component and accessories -other than batteries,bulbs or fuses incude one year warranty
 
      </div>
      </div>
 
    </div>
    <div className='Detail-info'>
      <div className='Info-icon'>
        <div className='Icon-text'>
        <div className='Icon'>
          <img  className="Image"src='six.png' alt="gurantee"/>
        </div>
        <div className='Info'>
          10 Year Warranty
        </div>
        </div>
      <div className='objectives'>
            All our garage doors component and accessories -other than batteries,bulbs or fuses incude one year warranty
 
      </div>
      </div>
 
    </div>
    <div className='Detail-info'>
      <div className='Info-icon'>
        <div className='Icon-text'>
        <div className='Icon'>
          <img  className="Image"src='aus.png' alt="gurantee"/>
        </div>
        <div className='Info'>
          10 Year Warranty
        </div>
        </div>
      <div className='objectives'>
            All our garage doors component and accessories -other than batteries,bulbs or fuses incude one year warranty
 
      </div>
      </div>
 
    </div>
    </div>
    <div>
      <div style={{display:"flex",justifyContent:"center"}}>
    <button  style={{backgroundColor:"red",color:"white",padding:"10px"}}onClick={onOpenModal}>our range of garage doors</button></div>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Registration form Responsive</h2>
        <label for="fname">First name:</label><br/>
  <input style={{width:"100%", height:"30px"}}type="text" id="fname" name="fname" value="John"/><br/>
  <label className='label' for="fname">Middle name:</label><br/>
  <input style={{width:"100%", height:"30px"}}  type="text" id="fname" name="fname" value="John"/><br/>
  <label for="fname">Last name:</label><br/>
  <input style={{width:"100%", height:"30px"}}  type="text" id="fname" name="fname" value="John"/><br/>
  <div style={{display:"flex",justifyContent:"center"}}>
  <button >SUBMIT</button>
  </div>
      </Modal>
  
    </div>
  </div>
  </div>

  );
}

export default App;
