import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'

function CafeList(props){
    const grabCafeItems = props.grabCafeItems;
    const cafeArray = props.cafeArray;
    
     // DELETE CAFE ITEMS

  const deleteItem = (id) => {

    //  console.log('delete works?');
  
    axios.delete(`api/todo/${id}`)
      .then((response) => {
        console.log(response);
        grabCafeItems();
      })
      .catch((error) => {
        console.log(error);
      })
  
    }
    const toggleItem = (id) => {
        // console.log('testing', id);
     
        axios.put(`/api/todo/toggle/${id}`)
         .then((response) => {
           console.log(response);
           grabCafeItems();
         })
         .catch((error) => {
           console.log(error);
         })
       }
    return(
        <>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell>Cafe Item</TableCell> */}
            <TableCell>ITEMS</TableCell>
            <TableCell align="left">PRICE</TableCell>
            <TableCell align="right">POPULAR?</TableCell>
            <TableCell align="right">REMOVE ITEM?</TableCell>
      
          </TableRow>
        </TableHead>
        <TableBody>
          {cafeArray.map((cafe) => (
            <TableRow
              key={cafe.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* <TableCell component="th" scope="row">
                {cafe.id}
              </TableCell> */}
              <TableCell>{cafe.item}</TableCell>
              <TableCell align="left">{cafe.price}</TableCell>
              <TableCell align="right"><Button color="success" variant="contained" onClick={() => {toggleItem(cafe.id)}}>{cafe.popular ? 'true' : 'false'}</Button></TableCell>
              <TableCell align="right"><Button color="error" onClick = {() => deleteItem(cafe.id)}>DELETE</Button></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        {/* <ul>
        {cafeArray.map(
          function(cafe) {
            return (
              
              <li key={cafe.id}>
                <table>
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Price</th>
                      <th>Popular</th>
                  </tr>
                  </thead>
                  <tbody>
                    <tr>
                  <td> {cafe.item} </td>
                  <td>{cafe.price}</td>
                  <td><button onClick={() => {toggleItem(cafe.id)}}>{cafe.popular ? 'true' : 'false'}</button></td>
                  <td><button onClick = {() => deleteItem(cafe.id)}>DELETE</button></td>
              </tr>
              </tbody>
                </table>
              </li>
            )
          }
        )}
      </ul> */}
        </>
    )
}

export default CafeList;