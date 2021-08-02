import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

/**
 * Returns grouping of planets by year and sizes
 * @param {*} data RadiusJpt, DiscoveryYear
 * @returns 
 */
function Discovery({data}) {

    const [planetGrouping, setGroup] = useState({});
    
    useEffect(() => {
        let discoveryMap = {};
        data.forEach(planet => {
            let groupByYear;
            const year = planet.DiscoveryYear;
            if (!(year in discoveryMap)) {
                groupByYear = {
                    "small": 0,
                    "medium": 0,
                    "large": 0
                };
                discoveryMap[year] = groupByYear;
            }
            groupByYear = discoveryMap[year];
            if (planet.RadiusJpt < 1) {
                groupByYear["small"] = groupByYear["small"] + 1;
            } else if (planet.RadisJpt < 2) {
                groupByYear["medium"] = groupByYear["medium"] + 1;
            } else {
                groupByYear["large"] = groupByYear["large"] + 1;
            }

        })
        setGroup(discoveryMap);
    }, [data])

    return (
        <div>
            <h1>Discovery</h1>
            <div>
                {JSON.stringify(planetGrouping)}
            </div>
        </div>
    )
}

export default Discovery;

Discovery.propTypes = {
    data: PropTypes.array.isRequired
};