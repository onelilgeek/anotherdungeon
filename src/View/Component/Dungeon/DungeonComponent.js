import React, { useEffect, useState } from 'react'
import { Row, Col, Divider } from 'antd'
import InfoView from './View/InfoView'
import PreviewModal from './View/PreviewModal'
import MapView from './View/MapView'
import CharacterView from './View/CharacterView'
import MonsterView from './View/MonsterView'
import BossView from './View/BossView'
import TokenView from './View/TokenView'

function DungeonComponent({dungeon, language}) {

    const [DungeonData, setDungeonData] = useState(require(`../../../data/dungeon/${dungeon}.json`))

    useEffect(() => {
        setDungeonData(require(`../../../data/dungeon/${dungeon}.json`))
    }, [dungeon])

    return ( DungeonData ? <div>
        <b style={{fontSize: '20px', fontWeight: 800, wordBreak: 'keep-all'}}>항목을 눌러 추가 정보를 확인하세요.</b>
        <Divider/>
        <Row justify="center" style={{backgroundColor: 'white'}}>            
            <Col xs={24} sm={12}>
                {DungeonData.info ? <InfoView data={DungeonData.info} language={language}/> : null}
                {DungeonData.preview ? <PreviewModal data={DungeonData.preview} language={language} code={DungeonData.code}/> : null}
                {DungeonData.map ? <MapView data={DungeonData.map} language={language} monster={DungeonData.monster} code={DungeonData.code}/> : null}
            </Col>
            <Col xs={24} sm={12}>
                {DungeonData.character ? <CharacterView data={DungeonData.character} language={language} /> : null}
                {DungeonData.monster ? <MonsterView data={DungeonData.monster} language={language} map={DungeonData.map} code={DungeonData.code}/> : null}
                {DungeonData.boss ? <BossView data={DungeonData.boss} language={language} code={DungeonData.code}/> : null}
                {DungeonData.tokens ? <TokenView data={DungeonData.tokens} language={language} code={DungeonData.code}/> : null}
            </Col>
        </Row> 
    </div> : null )
}

export default DungeonComponent
