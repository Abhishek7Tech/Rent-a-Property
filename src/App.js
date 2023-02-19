import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Search from './components/search/Search';
import SearchBar from './components/search-bar/SearchBar';
import  PropertyCard from './components/card/Card';
import Footer from './components/footer/Footer';
import { useState } from 'react';
function App() {

  const[search,setSearch] = useState("");
  const[filter,setFilter] = useState([]);

  return (
    <div className="App">
     <Header/>
     <Search setSearch={setSearch}/>
     <SearchBar setFilters={setFilter}/>
     < PropertyCard search={search} filter={filter} />
     <Footer/>
    </div>
  );
}

export default App;
