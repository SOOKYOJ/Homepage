import { useState } from 'react';

function Search() {
  const [items, setItems] = useState('');
  const hItems = (e) => {
    setItems(e.target.value);
  };

  const findItems = () => {};

  return (
    <div className="Search">
      <input value={items} onChange={hItems} className="searchBar" placeholder="find items" style={{ borderRadius: '10px', border: '1px solid black' }}></input>
      <button onClick={findItems} style={{ borderRadius: '10px', border: '1px solid black', backgroundColor: 'white' }}>
        Go
      </button>
    </div>
  );
}

export default Search;
