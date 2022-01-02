import React from 'react'
import { Popover, Tooltip } from 'antd'
import { chooseLang } from '../../util/func'
import useWindowDimensions from '../../util/useWindowDimensions';


// 던전 Boss 나타내는 Component
function BossUnit({boss, language, code}) {

    const { width } = useWindowDimensions();

    const content = (<div style={{ display: "flex", alignItems:'center', justifyContent:'center', textAlign: 'center'}}>
        <div style={{display: 'flex', flexDirection: 'column', breakAfter: 'column', margin: '10px 10px 10px 10px', textAlign: 'center'}}>
            {boss.description ? boss.description.map((a, index) => 
                <b style={{fontSize: "18px", margin: '0 auto'}} key={index}>{a}</b>
            ) : null}
        </div>        
        {boss.part ? boss.part.map((part, index) => (
            <div key={index} style={{breakAfter: 'column', minWidth: '150px'}}>
                <b style={{margin: '3px 3px 3px 3px', fontSize: "16px", color: 'blue'}}>{chooseLang(language,part.name)}</b>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '3px', marginTop: '10px'}}>
                    <b style={{margin: '3px 3px 3px 3px'}}>{chooseLang(language,"약점")}</b>
                    {part.weak ? part.weak.map((type, index) => (
                        <Tooltip title={chooseLang(language,type)} key={index}>
                            <img alt={type} style={{ width: "30px"}} src={`../images/types/${type}.png`}/>
                        </Tooltip>
                    )) : <b> : {chooseLang(language,"없음")}</b>}
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px'}}>
                    <b style={{margin: '3px 3px 3px 3px'}}>{chooseLang(language,"내성")}</b>
                    {part.resist ? part.resist.map((type, index) => (
                        <Tooltip title={chooseLang(language,type)} key={index}>
                            <img alt={type} style={{ width: "30px"}} src={`../images/types/${type}.png`}/>
                        </Tooltip>
                    )) : <b> : {chooseLang(language,"없음")}</b>}
                </div>
            </div> 
        ))        
        : null}
    </div>)

    return (
        <Popover content={content} trigger="click">
            <div style={{width: `99%`, minHeight: `120px`, display: 'flex', padding: '3px',
                         justifyContent: 'space-around', alignItems: 'center',
                         margin: "2px 2px 2px 2px", border: `2px solid ${boss.special ? "red" : "black"}`}}>
                <div style={{minWidth: `30%`, maxWidth: '30%', height: `110px`, marginRight: '10px',
                            display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
                    <img alt={boss.id} style={{ maxWidth: '100%', maxHeight: '95%'}}
                                                src={`../images/boss/${code}_${boss.id}.png`}/>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', flexGrow: 1}}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px'}}>
                        <b style={{margin: '1px 1px 1px 1px', wordBreak: 'keep-all'}}>{chooseLang(language,"약점")}</b>
                        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '160px', flexGrow: 1}}>
                            {boss.weak ? boss.weak.map((type, index) => (
                                <Tooltip title={chooseLang(language,type)} key={index}>
                                    <img alt={type} style={{ width: `${width/2 > 400 || (width > 300 && width < 576) ? "23%" : "25px"}`}}
                                        src={`../images/types/${type}.png`}/>
                                </Tooltip>
                            )) : <b>{chooseLang(language,"없음")}</b>}
                        </div>           
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <b style={{margin: '1px 1px 1px 1px', wordBreak: 'keep-all'}}>{chooseLang(language,"내성")}</b>
                        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '160px', flexGrow: 1}}>
                            {boss.resist ? boss.resist.map((type, index) => (
                                <Tooltip title={chooseLang(language,type)} key={index}>
                                    <img alt={type} style={{ width: `${width/2 > 400 || (width > 300 && width < 576) ? "23%" : "25px"}`}}
                                        src={`../images/types/${type}.png`}/>
                                </Tooltip>
                            )) : <b>{chooseLang(language,"없음")}</b>}
                        </div>           
                    </div>
                </div>
                
            </div>
        </Popover>
    )
}

export default BossUnit
