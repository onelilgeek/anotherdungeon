import React from 'react'
import {Typography} from "antd";
import BossUnit from '../Unit/BossUnit';

const {Title} = Typography;

function BossView({data, language, code}) {
    return (
        <div style={{padding: '10px'}}>
            <Title level={4} style={{marginTop: "30px"}}>BOSS</Title>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                {data.map((boss, index) => (
                    <BossUnit boss={boss} language={language} code={code} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default BossView
