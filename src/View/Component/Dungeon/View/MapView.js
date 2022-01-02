import React from 'react'
import {Typography, Collapse} from "antd";
import MapModal from '../Unit/MapModal';
import useWindowDimensions from '../../util/useWindowDimensions';

const {Title} = Typography;
const { Panel } = Collapse;

function MapView({data, language, code, monster}) {

    const { width } = useWindowDimensions();

    return (
        <React.Fragment>
            <Title level={4} style={{marginTop: "20px"}}>Map</Title>
            <Collapse defaultActiveKey={["1"]} style={{margin: '10px 10px 10px 10px'}}>  
                <Panel header="Total View" key="1">
                    <div style={{marginTop: "10px", columnGap: '3px',
                            columnCount: `${data.length > 3 && (width/2 > 400 || (width > 300 && width < 576)) ? 2 : 1}`, 
                            alignItems: 'center', justifyContent: 'center'}} className="dungeoncontainer">
                        {data.map((map, index) => (
                            <MapModal map={map} language={language} monster={monster} idx={index} key={index} code={code}/>
                        ))}
                    </div>
                </Panel>      
            </Collapse> 
        </React.Fragment>    
    )
}

export default MapView
