import {useEffect, useState} from 'react';
import axios from 'axios';

function App () {

  let [cafeArray, setCafeArray] = useState([]);


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

  // DELETE CAFE ITEMS

  // PUT CAFE ITEMS
  
  return (
    <div>
      <h1>CAFE MENU</h1>

      tesing jsonstringify:
      <ul>
      {JSON.stringify(cafeArray)}
      </ul>

      tesing .map method:
      <ul>
        {cafeArray.map(
          function(cafe) {
            return (
              <li key={cafe.id}>
                {cafe.item} 
                {cafe.popular} 
                {cafe.price}
              </li>
            )
          }
        )}
      </ul>
    </div>
  );

}

export default App
