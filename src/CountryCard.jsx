let CountryCard = ({name, flagIMG, flagAbbr}) => {
    return (
        <div className="countryCard" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"10px",margin:"10px",border:"2px solid #E1E1E1",borderRadius:"10px",width:"200px",height:"200px"}}>
            <img src={flagIMG} alt={`Flag of ${flagAbbr}`} style={{
                width:"100px",
                height:"100px",

            }} />
            <h2>{name}</h2>
        </div>
    )
}
export default CountryCard;