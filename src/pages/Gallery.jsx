import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Pagination from "../components/Pagination";
import "./Gallery.scss";

const Gallery = () => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState("");
const [genderFilter, setGenderFilter] = useState("");
const [speciesFilter, setSpeciesFilter] = useState("");


  const onPrevious = async () => {
    const res = await axios.get(info.prev);
    setCharacters(res.data.results);
    setInfo(res.data.info);
  };
  const onNext = async () => {
    const res = await axios.get(info.next);
    setCharacters(res.data.results);
    setInfo(res.data.info);
  };
  useEffect(() => {
    const getCharacters = async () => {
      const res = await axios.get(`https://rickandmortyapi.com/api/character`);
      //   console.log(res.data);
      setCharacters(res.data.results);
      setInfo(res.data.info);
      // console.log(res.data.info);
    };
    getCharacters();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setStatusFilter("");
    setGenderFilter("");
    setSpeciesFilter("");
    setCharacters(characters.filter((character) => character.name.toLowerCase().includes(e.target.value.toLowerCase())));
  };
  

  const searchedcharacters = characters.filter((character) => {
    return (
      character.name.toLowerCase().includes(search.toLowerCase()) &&
      (statusFilter === "" || character.status === statusFilter) &&
      (genderFilter === "" || character.gender === genderFilter) &&
      (speciesFilter === "" || character.species === speciesFilter)
    );
  });
   

  return (
    <>
    <div className='filters'>
  <div>
    <label htmlFor='status'>Status:</label>
    <select id='status' value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
      <option value=''>All</option>
      <option value='Alive'>Alive</option>
      <option value='Dead'>Dead</option>
      <option value='unknown'>Unknown</option>
    </select>
  </div>
  <div>
    <label htmlFor='gender'>Gender:</label>
    <select id='gender' value={genderFilter} onChange={(e) => setGenderFilter(e.target.value)}>
      <option value=''>All</option>
      <option value='Male'>Male</option>
      <option value='Female'>Female</option>
      <option value='Genderless'>Genderless</option>
      <option value='unknown'>Unknown</option>
    </select>
  </div>
  <div>
    <label htmlFor='species'>Species:</label>
    <select id='species' value={speciesFilter} onChange={(e) => setSpeciesFilter(e.target.value)}>
      <option value=''>All</option>
      <option value='Human'>Human</option>
      <option value='Alien'>Alien</option>
      <option value='Mythological Creature'>Mythological Creature</option>
      <option value='Animal'>Animal</option>
      <option value='Robot'>Robot</option>
      <option value='Cronenberg'>Cronenberg</option>
      <option value='unknown'>Unknown</option>
    </select>
  </div>
</div>

        <div className="container__button">
          <Pagination
            prev={info.prev}
            next={info.next}
            onPrevious={onPrevious}
            onNext={onNext}
          />
        </div>
        <div>
        <div className='search'>
        <label htmlFor='search'>Search:</label>
        <input className='input' type='text' id='search' value={search} onChange={handleSearch} placeholder="Search for a character" />
      </div>
        </div>
      <div className="container">
        {searchedcharacters.map((character) => (
          <>
            <div className="container__cards">
              <Link key={character.id} to={`${character.id}`}>
                <div>
                  <h3>{character.name}</h3>
                </div>
                <img src={character.image} alt={character.name} />
              </Link>
                <div className="container__cards__status">
                {character.status === 'Dead' && (
    <button className="status-button red">Dead</button>
  )}
  {character.status === 'Alive' && (
    <button className="status-button green">Alive</button>
  )}
  {character.status === 'unknown' && (
    <button className="status-button grey">Unknown</button>
  )}
                </div>
                <p>{character.species}</p>
                <p>{character.gender}</p>
            </div>
          </>
        ))
        }
      </div>
    </>
  );
};

export default Gallery;
