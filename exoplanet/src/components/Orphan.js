import React, {useEffect, useState} from 'react';
function Orphan({data}) {

    const [orphanList, setOrphanList] = useState([]);
    
    useEffect(() => {
        const orphanPlanets = [];
        data.forEach(planet => {
            if (planet.TypeFlag == 3) {
                orphanPlanets.push(planet);
            }
        })
        setOrphanList(orphanPlanets);
    }, [])
    
    return (
        <div>
            <p>Orphan Planets: {orphanList.length}</p>
            <p>{orphanList.map(planet => <li key={planet.PlanetIdentifier}>{planet.PlanetIdentifier}</li>)}</p>
            
        </div>
    )
}

export default Orphan;