import React, { useState }from 'react'
import data from "../assets/data.json";

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState("")

    const filteredData = data.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div><input
    type="text"
    placeholder="Seach for shows or movies..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    />
    {searchTerm && ( 
        <ul>
            {filteredData.length > 0 ? (
                filteredData.map(item => (
                    <li key={item.title}>
                        {item.title} ({item.category}, {item.year})
                    </li>
                ))
            ) : (
                <p>No results found.</p>
            )}
        </ul>
    )}
    </div>
  )
}

export default SearchBar