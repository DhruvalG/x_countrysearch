import { useEffect, useState } from "react";
import CountryCard from "./CountryCard"
function Country() {
    let DATA_ENDPOINT = "https://restcountries.com/v3.1/all";
    let [flags, setFlags] = useState([]);
    useEffect(() => {
            fetch(DATA_ENDPOINT).then((res) => res.json()).then((data) => setFlags(data)).catch((error) => console.error("Error fetching data: ", error));
    }, []);
    let searchCountry = (e) => {
        const search = e.target.value.toLowerCase();
        let name=flags.filter((flag)=> flag.name.common.toLowerCase().includes(search))
        let flaglist = document.getElementById("mainArea");
        flaglist.innerHTML = name.map((flag) => `<div className="countryCard" id="countryCard" style=display:flex;flex-Direction:column;justify-Content:center;align-Items:center;padding:10px;margin:10px;border:2px;border-style:solid;border-color:#E1E1E1;border-radius:10px;width:200px;height:200px;>
        <img src=${flag.flags.png} alt=${flag.altSpellings[0]} style=width:100px;height:100px;/>
        <h2>${flag.name.common}</h2>
    </div>`).slice(",").join("")
    }
    return (
        <>
            <header>
                <input
                    type="text"
                    className="search-desktop"
                    size="small"
                    fullWidth
                    placeholder=""
                    id="search"
                    onChange={(e) => searchCountry(e)}
                />
            </header>
            <div id="mainArea" style={{
                display:"flex",
                flexDirection:"row",
                flexWrap:"wrap",
                justifyContent:"center",
                alignItems:"center"
            }}>
                {
                    flags.map((flag) => {
                        return <CountryCard key={flag.altSpellings[0]} name={flag.name.common} flagIMG={flag.flags.png} flagAbbr={flag.altSpellings[0]} /> 
                    })
                }
            </div>
        </>
    )
}
export default Country