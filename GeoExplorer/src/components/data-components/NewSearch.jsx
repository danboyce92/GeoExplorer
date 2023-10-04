

const NewSearch = () => {
  return (
    <form autoComplete="off" id="new-search">
      <label id="new-search-label">New Search</label>
      <input required id="new-search-input" placeholder="Country name here.." />
      <button id="new-search-button">Search</button>
    </form>
  )
}

export default NewSearch