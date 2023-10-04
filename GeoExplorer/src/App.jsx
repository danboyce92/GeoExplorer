import Header from "./components/Header"
// import SearchBox from "./components/SearchBox"
import DataDisplay from "./components/data-components/DataDisplay"

function App() {


  return (
    <div id="app">
      <div id="shader">
        <Header position="pos-2" />
        {/* <SearchBox /> */}
        <DataDisplay />
      </div>
    </div>
  )
}

export default App
