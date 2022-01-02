import React from 'react'
import {Card, Tooltip, Tag} from 'antd'
import { chooseLang } from '../util/func'

function PersonalityUnit({data, language}) {

    const colors = ["magenta", "volcano", "gold", "green", "cyan", "blue", "purple"]

    return (
        <Tooltip title={chooseLang(language,data.name)}>
            <Card hoverable style={{maxWidth: '200px', margin: '1px', display: 'flex',
                                    justifyContent: 'center', alignItems: 'center'}} size="small">
                <img alt={data.name} style={{maxWidth: "70px", margin: "0 auto"}}
                src={`images/character_base/${data.name}.png`}/>
                <div style={{marginTop: '10px'}}>
                    {data.personality.map((a,index) => (
                        <Tag style={{margin: '1px'}} color={colors[index%7]} key={index}>{chooseLang(language,a)}</Tag>
                    ))}
                </div>
                <div style={{marginTop: '10px'}}>
                    {data.description ? <b style={{color: 'red'}}>{chooseLang(language, data.description)}</b> : null }    
                </div>
            </Card>        
        </Tooltip>
    )
}

export default PersonalityUnit
