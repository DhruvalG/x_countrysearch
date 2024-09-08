import { useEffect, useState } from "react";
import CountryCard from "./CountryCard"
function Country() {
    let DATA_ENDPOINT = "https://xcountries-backend.azurewebsites.net/all";
    let [flags, setFlags] = useState([]);
    useEffect(() => {
            fetch(DATA_ENDPOINT)
                .then((res) => res.json())
                .then((data) => setFlags(data))
                .catch((error) => console.error("Error fetching data: ", error));
    }, []);
    let searchCountry = (e) => {
        const search = e.target.value.toLowerCase();
        let name=flags.filter((flag)=> flag.name.toLowerCase().includes(search))
        let flaglist = document.getElementById("mainArea");
        flaglist.innerHTML = "";
        flaglist.innerHTML = name.map((flag) => `<div className="countryCard" id="countryCard" style=display:flex;flex-Direction:column;justify-Content:center;align-Items:center;padding:10px;margin:10px;border:2px;border-style:solid;border-color:#E1E1E1;border-radius:10px;width:200px;height:200px;>
        <img src=${flag.flag} alt=${flag.abbr} style=width:100px;height:100px;/>
        <h2>${flag.name}</h2>
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
                        return <CountryCard key={flag.abbr} name={flag.name} flagIMG={flag.flag} flagAbbr={flag.abbr} /> 
                    })
                }
            </div>
        </>
    )
}
export default Country