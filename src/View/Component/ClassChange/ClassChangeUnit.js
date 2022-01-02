import React from 'react'
import { Tooltip, Card, Button } from 'antd'
import { chooseLang } from '../util/func'
import { Link } from 'react-router-dom'

// 직업서 나타내는 Unit
function ClassChangeUnit({data, language, another=false}) {

    return (
        <Tooltip title={chooseLang(language,data.name)}>
            <Card hoverable style={{maxWidth: '200px', margin: '1px', display: 'flex',
                                    justifyContent: 'center', alignItems: 'center'}} size="small">
                <img alt={data.name} style={{maxWidth: "70px", margin: "0 auto"}}
                src={`images/character_base/${data.name}.png`}/>
                <div style={{margin: "5px"}}>
                    {chooseLang(language,data.kor)}
                </div>
                {data.dungeon ? data.dungeon.map((dungeon, index) => (
                    <Link to={`/dungeon/${dungeon.code}`} key={index}>
                        <Button style={{fontSize: '12px',margin: '1px 1px 1px 1px'}}>{chooseLang(language,dungeon.name)}</Button>
                    </Link>
                )) : <div style={{wordBreak: 'keep-all', color: 'red', fontWeight: 600}}>
                    {chooseLang(language, !another ? '환리경, 가를레아,' : "환리경,")}<br/>
                    {chooseLang(language, '일반 VH...')}
                </div>}
            </Card>
        </Tooltip>
        
    )
}

export default ClassChangeUnit
