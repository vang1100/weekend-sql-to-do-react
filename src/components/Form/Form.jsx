function Form(){
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