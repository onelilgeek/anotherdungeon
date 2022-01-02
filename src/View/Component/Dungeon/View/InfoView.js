import React from 'react'
import {Typography, Tooltip} from "antd";
import { chooseLang } from '../../util/func';

const {Title} = Typography;

function InfoView({data, language}) {
    return (
        <React.Fragment>
            <Title level={3}>{chooseLang(language, data.name)}</Title>
            <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', minHeight: '30px'}}>
                <div style={{margin: '3px 10px 3px 0', fontSize: "16px"}}>
                    {chooseLang(language,"권장레벨")} : <b style={{color: 'green'}}>
                        {data.hard ? data.hard.level : "X"}
                    </b> / <b style={{color: 'red'}}>
                        {data.veryhard ? data.veryhard.level : "X"}
                    </b>
                </div>
                {data.reward ? data.reward.map((a) => (
                    <Tooltip title={chooseLang(language, a)} key={a}>
                        <img src={`../images/menu/${a}.png`} alt={a}/>
                    </Tooltip>
                )) : null}
            </div>
            {data.hard ? <div style={{margin: '5px 5px 5px 5px', fontSize: "18px"}}>
                <b style={{color: 'green'}}>Hard</b><b> : {data.hard.count}</b> 
            </div> : null}
            {data.veryhard ? <div style={{margin: '5px 5px 5px 5px', fontSize: "18px"}}>
                <b style={{color: 'red'}}>Very Hard</b><b> : {data.veryhard.count}</b>
            </div> : null}
            {data.dream ? <React.Fragment>
                <b style={{fontSize: "15px", wordBreak: 'keep-all'}}>★ 표시된 상자는 레어 맵일 시 몽영의 서가 나오는 상자입니다.</b>
            </React.Fragment>

             : null}
        </React.Fragment>
    )
}

export default InfoView
