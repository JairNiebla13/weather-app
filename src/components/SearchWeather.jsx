
function SearchWeather({ setSearch, searchPressed }) {
    return (
        <div>
            <div>
                <input className="text-black" type="text"
                    placeholder="Ingresa tu ciudad"
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className="text-slate-700 rounded-sm bg-cyan-500 border-slate-500" onClick={searchPressed}>Search</button>
            </div>
        </div>
    )
}

export default SearchWeather