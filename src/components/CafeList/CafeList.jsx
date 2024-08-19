function CafeList(){
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