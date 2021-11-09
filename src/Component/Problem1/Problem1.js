import React, { useState } from 'react';
import './Problem1.css'

const Problem1 = () => {
    const[color15, setColor15]=useState("black")
    const[color25, setColor25]=useState("#4F86F7")
    const[color18, setColor18]=useState("#374f6b")
    const[color30, setColor30]=useState("#002147")
    
    
    const handleColor15=()=>{
        
            setColor15("#4F86F7");
            //Do something
        }
        const handleColor25=()=>{
            setColor25("black")
        }
        const handleColor18=()=>{
            setColor18("#002147")
        }
        const handleColor30=()=>{
            setColor30("#374f6b")
        }
    
    

    const allHandle=()=>{
        handleColor15(); 
        handleColor25();
        handleColor18();
        handleColor30();

    }
    return (
        <div>
            <div className="box">
            <div  style={{background:color15}} className="box15">
              <p>15</p>
            </div>
            <div style={{background:color25}} className="box25">
               <p>25</p>
            </div>
            <div style={{background:color18}} className="box18">
               <p>18</p>
            </div>
            <div style={{background:color30}} className="box30">
               <p>30</p>
            </div>
            
        </div>
        <button className='btn btn-primary' onClick={allHandle}>Shuffle</button>
        </div>
    );
};

export default Problem1;