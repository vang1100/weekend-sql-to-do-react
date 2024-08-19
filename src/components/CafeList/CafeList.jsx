import axios from 'axios';

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
        <ul>
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
      </ul>
        </>
    )
}

export default CafeList;