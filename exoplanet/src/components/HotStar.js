import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

/**
 * Displays the name of the planet orbiting the hottest star
 * @param {*} param0 
 * @returns 
 */
function HotStar({data}) {

    const [planet, setPlanet] = useState([]);
    
    useEffect(() => {
        let planetId = "";
        let maxTemp = 0;
        data.forEach(planet => {
            if (planet.HostStarTempK > maxTemp) {
                maxTemp = planet.HostStarTempK;
                planetId = planet.PlanetIdentifier;
            }
        })
        setPlanet(planetId);
    }, [data])

    return (
        <div>
            <h1>Planet orbiting the hottest star</h1>
            <h2>{planet}</h2>
        </div>
    )
}

export default HotStar;

HotStar.propTypes = {
    data: PropTypes.array.isRequired
};