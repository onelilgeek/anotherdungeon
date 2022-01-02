import React from 'react'
import { Popover } from 'antd'

// 토큰 정보
function TokenUnit({token, code}) {

    const content = (
        <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', minWidth: '100px'}}>
            {token.description ? token.description.map((a, index) => 
                <b style={{fontSize: "18px", margin: '3px 3px 3px 3px'}} key={index}>
                    {a}
                </b>
            ) : null}
        </div>
    )

    return (
        <Popover content={content} trigger="click">
            <div style={{width: '80px', height: '80px', display: 'flex',
                         justifyContent: 'center', alignItems: 'center',
                         margin: "2px 2px 2px 2px", border: `2px solid black`}}>
                <img alt={token.id} style={{ maxWidth: "95%", maxHeight: '95%'}}
                     src={`../images/tokens/${code}_${token.id}.jpg`}/>
            </div>
        </Popover>
    )
}

export default TokenUnit
