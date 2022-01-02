import React from 'react'
import {Typography, Collapse} from "antd";
import MonsterUnit from '../Unit/MonsterUnit'
import useWindowDimensions from '../../util/useWindowDimensions';
import { chooseLang } from '../../util/func';

const {Title} = Typography;
const { Panel } = Collapse;

function MonsterView({data, language, code, map}) {

    const { width } = useWindowDimensions();

    const mapNames = Array.from(new Set(map.map(a => a.normal)));

    return (
        <React.Fragment>
            <Title level={4} style={{marginTop: "30px"}}>Monster</Title>
            <div>
                <b style={{color: 'orange'}}>노란색 : 주의해야 할 잡몹</b><br/>
                <b style={{color: 'red'}}>빨간색 : FEAR</b><br/><br/>
                {code === "shadow_dimension" ? <b>몬스터 정보가 일부만 존재합니다.</b> : null}
            </div>
            <Collapse defaultActiveKey={["1"]} style={{margin: '10px 10px 10px 10px'}}>
                {mapNames.map((name, index) => {
                    const arr = data.filter(a => a.appear.includes(name))
                    if(arr.length > 0) {
                        return <Panel header={chooseLang(language,name)} key={index+1} className="custom">
                            <div style={{columnCount: `${width/2 > 400 || (width > 300 && width < 576) ? 2 : 1}`,
                                        columnGap: '3px'}}>
                                {arr.map((monster, index) => (
                                    <MonsterUnit monster={monster} language={language} code={code} key={index}/>
                                ))} 
                            </div>
                        </Panel>
                    } else {
                        return null
                    }                    
                })}                  
            </Collapse> 
        </React.Fragment>  
    )
}

export default MonsterView
