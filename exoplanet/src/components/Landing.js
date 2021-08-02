import React, {useEffect, useState} from "react";
import axios from 'axios';
import Discovery from "./Discovery";
import HotStar from "./HotStar";
import Orphan from "./Orphan";

function Landing() {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://gist.githubusercontent.com/joelbirchler/66cf8045fcbb6515557347c05d789b4a/raw/9a196385b44d4288431eef74896c0512bad3defe/exoplanets")
            .then(res => {
                setData(res.data);
            })
    }, []);
    
    return (
        <div>
            <Orphan data={data}/>
            <HotStar data={data}/>
            <Discovery data={data}/>
        </div>
    )
}

export default Landing;