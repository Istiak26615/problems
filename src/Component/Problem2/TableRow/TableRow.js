

import React, { useState } from 'react';

const TableRow = ({row, handleDataChange, deleteRow}) => {
    var index = row.index
    var [item, handleChangeItem] = useState(row.item);
    var [quantity, handleChangeQuantity] = useState(row.quantity);
    var [rate, handleChangeRate] = useState(row.rate);
    let[total, setTotal]=useState(row.total)
   
   
    const updateValues = e => {
       let inputName = e.target.name
       let inputValue = e.target.value
       if(inputName === 'item'){
         handleChangeItem(inputValue)
         console.log(inputValue)
       }
       else if(inputName === 'quantity'){
        handleChangeQuantity(inputValue)
        console.log(inputValue)
       }
       else if(inputName === 'rate'){
        handleChangeRate(inputValue)
        console.log(inputValue)
       }
 
       handleDataChange({
          index: index,
          item: item,
          quantity: quantity,
          rate: rate
          
       })
   
    }

    let newTotal=(e)=>{
       quantity= e.target.value
       rate=e.target.value
       total=quantity+rate
      //  setTotal()
      setTotal(quantity)
    }
 
    const removeRow = () => {
       deleteRow(index)
    }
 
    return (
        <tr>
           <td>{index + 1}</td>
         <td>
            <input type="text" name="item" className="quantity m-2" placeholder="Item" value={item} onChange={updateValues}></input>
            <input type="text" name="quantity" className="quantity m-2" placeholder="Quantity" value={quantity} onChange={updateValues}></input>
            <input type="text" name="rate" className="rate" placeholder="Rate" value={rate} onChange={updateValues}></input>
            <p  style={{display:'inline-block'}}></p>
              
           </td>
           <td><button type="button" className="btn btn-remove" onClick={removeRow}>&times;</button></td>
        </tr>
    );
};

export default TableRow;