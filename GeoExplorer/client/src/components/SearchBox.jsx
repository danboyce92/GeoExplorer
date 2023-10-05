
const SearchBox = () => {

  const submitForm = (e) => {
    e.preventDefault()
  }

  return (
    <div id="search-box">
      <form onSubmit={submitForm} id="search-container">
        <p id="search-text">Please enter the name of the country you wish to learn more about:</p>
        <input id="search-input" placeholder="Ireland" />
        <button id="search-button">Search</button>
      </form>
    </div>
  )
}

export default SearchBox