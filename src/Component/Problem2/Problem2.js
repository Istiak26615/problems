import React, { useState } from 'react';
import TableRow from './TableRow/TableRow';

let tableRowIndex = 0;
const Problem2 = () => {
    
    const [talbeRows, setRows] = useState([{
        index: 0,
        item: "",
        quantity: "",
        rate: "",
        total:""
     }
  ]);

  // Receive data from TableRow 
  const handleChange = data => {
     talbeRows[data.index] = data
  }

  // Add New Table Row
  const addNewRow = () => {
     tableRowIndex = parseFloat(tableRowIndex) + 1
    let updatedRows = [...talbeRows]
    updatedRows[tableRowIndex] = {index: tableRowIndex, item: "", quantity: "",rate:""}
    setRows(updatedRows)
 }
  
  // Remove Table row if rows are count is more than 1
  const deleteRow = (index) => {
     if(talbeRows.length > 1){
        var updatedRows = [...talbeRows]
        var indexToRemove = updatedRows.findIndex(x => x.index == index);
        if(indexToRemove > -1){
           updatedRows.splice(indexToRemove, 1)
           setRows(updatedRows);
        }
     }
  }

 
    return (

<div className="customers">
       <table className="table" id="customers">
         <thead>
            <tr>
               <th>ID</th>
               <th>Item</th>
               <th>Quantity</th>
               <th>Rate</th>
               <th>Total</th>
               <th></th>
            </tr>
          </thead>
          <tbody>
               {
                  talbeRows.map((row, index) => {
                     if(row)
                     return(
                        <TableRow key={index} row={row} handleDataChange={handleChange} deleteRow={deleteRow}></TableRow>
                     )
                  })
               }
          </tbody>
       </table>
       <div>
          <button className="btn-add" onClick={addNewRow}>+Add</button>
       </div>
    </div>
    );
};

export default Problem2;