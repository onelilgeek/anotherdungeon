import React, { useState } from 'react'
import { Card, Modal, Row, Col, Image, Empty } from 'antd'
import { chooseLang } from '../../util/func';
import MonsterUnit from './MonsterUnit';


//맵 정보 + 상세 정보를 알려 주는 모달
function MapModal({map, language, idx, code, monster}) {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const filtered = monster.filter(a => a.appear && a.appear.includes(map.normal))

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };

    const fontSize = 15

    const mapTitle = (
        <b style={{fontSize: '25px'}}>{chooseLang(language,map.normal)}</b>
    )

    return (
        <React.Fragment>
            <Card style={{display: 'inline-flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center'
                          , width: `100%`, padding: '5px', margin: '3px auto', breakInside: `avoid`,
                          border: `${map.important ? "3px solid red" : "3px solid black"}`}}
                    hoverable size="small"
                    onClick={showModal}
                    cover={<img src={`../images/map/${code}_${idx}.jpg`} alt={idx} style={{maxWidth: "450px", margin: '0 auto'}}/>}>
                <b style={{fontSize: `${fontSize}px`, width: '100%', whiteSpace: 'nowrap'}}>{chooseLang(language, map.normal)}&nbsp;</b><br/>
                {map.rare ? <b style={{fontSize: `${fontSize}px`, color: 'red', width: '100%', whiteSpace: 'nowrap'}}>{chooseLang(language, map.rare)}&nbsp;</b> : null}                
            </Card>  
            <Modal title={mapTitle} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
                   width="95%">
                <Row align="middle" justify="center">
                    <Col xs={24} sm={12} style={{display: 'flex', alignItems:'center', justifyContent: 'center'}}>
                        <Image src={`../images/map/${code}_${idx}.jpg`} alt={idx} style={{maxWidth: "100%", margin: '0 auto'}}/>
                        {map.sign ? 
                            <img src={`../images/map/${code}_${idx}_sign.jpg`} alt={idx} style={{maxWidth: '70px', marginLeft: '10px'}}/>
                        : null}
                    </Col>
                    <Col xs={24} sm={12} style={{textAlign: 'center'}}>
                        {!map.rare && !map.description && filtered.length <=0 ? <Empty /> : null}
                        {map.rare ? <b style={{fontSize: '20px', color: 'red'}}>Rare Map : {chooseLang(language,map.rare)}</b> : null}
                        {map.description ? <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column'}}>
                            <b style={{fontWeight: 800, fontSize: '18px', marginBottom:"10px"}}>특이 사항</b>
                            {map.description.map((a, index) => (
                                <b key={index}>{a}</b>
                            ))}
                        </div> : null}
                        {filtered.length > 0 ? 
                        <div style={{textAlign: 'center', display: 'flex', width: '80%', margin: '0 auto', flexDirection: 'column', marginTop: '20px'}}>
                            <b style={{fontWeight: 800, fontSize: '18px'}}>Monster</b>
                            {filtered.map((monster, index) => (
                                <MonsterUnit monster={monster} language={language} code={code} key={index}/>
                            ))}
                        </div>
                         : null}                                   
                    </Col>
                </Row>
            </Modal>
        </React.Fragment>        
    )
}

export default MapModal
