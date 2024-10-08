import {useEffect, useState} from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Form from '../Form/Form';
import CafeList from '../CafeList/CafeList';


function App () {

  let [cafeArray, setCafeArray] = useState([]);
  // let [cafeItem, setCafeItem] = useState('');
  // let [cafePrice, setCafePrice] = useState('');


  useEffect(() => {
    grabCafeItems();
  }, [])

  // GET CAFE ITEMS

  const grabCafeItems = () => {
    axios.get('/api/todo')
      .then((response) => {
        console.log(response.data);
        setCafeArray(response.data);
      })
      .catch((error) => {
        console.log(error)
      })
  }

  // POST CAFE ITEMS

  // const addItem = (event) => {
  //   event.preventDefault();
    
  //   // pack up our data

  //   const addToMenu = {
  //     item: cafeItem,
  //     price: cafePrice
  //   }

  //   // axios post route

  //   axios.post('/api/todo', addToMenu)
  //     .then((response) => {
  //       console.log(response);

  //   // clear the inputs
  //       setCafeItem('');
  //       setCafePrice('');

  //       grabCafeItems('');
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
    

  // }

  // DELETE CAFE ITEMS

  // const deleteItem = (id) => {

  // //  console.log('delete works?');

  // axios.delete(`api/todo/${id}`)
  //   .then((response) => {
  //     console.log(response);
  //     grabCafeItems();
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })

  // }

  // PUT CAFE ITEMS

  // const toggleItem = (id) => {
  //  // console.log('testing', id);

  //  axios.put(`/api/todo/toggle/${id}`)
  //   .then((response) => {
  //     console.log(response);
  //     grabCafeItems();
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })
  // }
  
  return (
    <div>
      {/* <h1>PADEE'S CAFE</h1>

      {/* tesing jsonstringify:
      <ul>
      {JSON.stringify(cafeArray)}
      </ul> */}

      {/* <h2>Let's add more to the menu! :D </h2> */} 

      <Header />
      <Form grabCafeItems={grabCafeItems}/>
      <CafeList grabCafeItems={grabCafeItems} cafeArray={cafeArray}/>

      {/* <form onSubmit={addItem}>
        <label htmlFor="item-input">Item:</label>
        <input id="item-input" onChange={(event) => setCafeItem(event.target.value)} value={cafeItem}></input>
        <label htmlFor="price-input">Price:</label>
        <input id="price-input" onChange={(event) => setCafePrice(event.target.value)} value ={cafePrice}></input>
        <button type="submit">ADD</button>
      </form> */}
      {/* <p> {cafeItem} costs {cafePrice}</p> */}
    
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
    </div>
  );

}

export default App
