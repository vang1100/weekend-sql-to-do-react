import {useState} from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';

// const ariaLabel = { 'aria-label': 'description' };

// export default function Inputs() {
//   return (
//     <Box
//       component="form"
//       sx={{
//         '& > :not(style)': { m: 1 },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <Input defaultValue="Hello world" inputProps={ariaLabel} />
//       <Input placeholder="Placeholder" inputProps={ariaLabel} />
//       <Input disabled defaultValue="Disabled" inputProps={ariaLabel} />
//       <Input defaultValue="Error" error inputProps={ariaLabel} />
//     </Box>
//   );
// }

function Form(props){
    const grabCafeItems = props.grabCafeItems;
    
    let [cafeItem, setCafeItem] = useState('');
    let [cafePrice, setCafePrice] = useState('');

      // POST CAFE ITEMS

  const addItem = (event) => {
    event.preventDefault();
     // pack up our data

     const addToMenu = {
        item: cafeItem,
        price: cafePrice
      }
  
      // axios post route
  
      axios.post('/api/todo', addToMenu)
        .then((response) => {
          console.log(response);
  
      // clear the inputs
          setCafeItem('');
          setCafePrice('');
  
          grabCafeItems('');
        })
        .catch((error) => {
          console.log(error);
        })
      
  
    }

    return(
        <>
        <form onSubmit={addItem}>
        <label htmlFor="item-input">Item:</label>
        <input id="item-input" onChange={(event) => setCafeItem(event.target.value)} value={cafeItem}></input>
        <label htmlFor="price-input">Price:</label>
        <input id="price-input" onChange={(event) => setCafePrice(event.target.value)} value ={cafePrice}></input>
        <button type="submit">ADD</button>
      </form>
        </>
    )
}

export default Form;