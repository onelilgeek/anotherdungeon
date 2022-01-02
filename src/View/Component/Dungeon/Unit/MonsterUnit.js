import React from 'react'
import { Tooltip } from 'antd'
import { chooseLang } from '../../util/func'
import useWindowDimensions from '../../util/useWindowDimensions';

// 몬스터 약점 내성 정보 등
function MonsterUnit({monster, language, code}) {

    const { width } = useWindowDimensions();

    const color = (monster) => {
        if(monster.fear || monster.rarefear) return "3px solid red"
        else if (monster.description || monster.rare) return "3px solid orange"
        else return "3px solid white"
    }

    const monsterTitle = () => {
        if(monster.fear) return "FEAR"
        else if (monster.rarefear) return "RARE FEAR"
        else if (monster.rare) return "RARE"
        else if (monster.description) return monster.description
        else return null
    }

    return (
        <Tooltip title={monsterTitle()}>
            <div style={{width: `100%`, minHeight: `80px`, breakInside: 'avoid', paddingBottom: '5px', paddingTop: '5px'
                        , display: 'inline-flex', justifyContent: 'center', alignItems: 'center',
                        margin: "2px 2px 2px 2px", border: `${color(monster)}`}}>
                <div style={{minWidth: `30%`, maxWidth: '30%', height: `70px`, marginRight: '3px',
                            display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
                    <img alt={monster.id} style={{ maxWidth: "90%", maxHeight: '90%'}}
                        src={`../images/monster/${code}_${monster.id}.png`}/>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', flexGrow: 1}}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px'}}>
                        <b style={{margin: '1px 1px 1px 1px', wordBreak: 'keep-all'}}>{chooseLang(language,"약점")}</b>
                        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '110px', flexGrow: 1}}>
                            {monster.weak ? monster.weak.map((type, index) => (
                                <Tooltip title={chooseLang(language,type)} key={index}>
                                    <img alt={type} style={{ width: `${width/2 > 400 || (width > 300 && width < 576) ? "23%" : "25px"}`}}
                                        src={`../images/types/${type}.png`}/>
                                </Tooltip>
                            )) : <b>{chooseLang(language,"없음")}</b>}
                        </div>           
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <b style={{margin: '1px 1px 1px 1px', wordBreak: 'keep-all'}}>{chooseLang(language,"내성")}</b>
                        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '110px', flexGrow: 1}}>
                            {monster.resist ? monster.resist.map((type, index) => (
                                <Tooltip title={chooseLang(language,type)} key={index}>
                                    <img alt={type} style={{ width: `${width/2 > 400 || (width > 300 && width < 576) ? "23%" : "25px"}`}}
                                        src={`../images/types/${type}.png`}/>
                                </Tooltip>
                            )) : <b>{chooseLang(language,"없음")}</b>}
                        </div>           
                    </div>
                </div>
            </div>
        </Tooltip>
        
    )
}

export default MonsterUnit
