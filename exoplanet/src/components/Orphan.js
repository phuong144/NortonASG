import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

function Orphan({data}) {

    const [orphanList, setOrphanList] = useState([]);
    
    useEffect(() => {
        const orphanPlanets = [];
        console.log(data);
        data.forEach(planet => {
            if (planet.TypeFlag === 3) {
                orphanPlanets.push(planet);
            }
        })
        setOrphanList(orphanPlanets);
    }, [data])
    
    return (
        <div>
            <h1>Orphan Planets: {orphanList.length}</h1>
            <h2>
                {orphanList.map(planet => <li key={planet.PlanetIdentifier}>{planet.PlanetIdentifier}</li>)}
            </h2>
            
        </div>
    )
}

export default Orphan;

Orphan.propTypes = {
    data: PropTypes.array.isRequired
};