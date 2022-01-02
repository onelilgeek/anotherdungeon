import React from 'react'
import {Typography} from "antd";
import TokenUnit from '../Unit/TokenUnit';

const {Title} = Typography;

function TokenView({data, language, code}) {
    return (
        <div style={{padding: '10px'}}>
            <Title level={4} style={{marginTop: "30px"}}>Item</Title>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                {data.map((token, index) => (
                    <TokenUnit token={token} language={language} code={code} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default TokenView
