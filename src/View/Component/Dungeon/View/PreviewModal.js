import { Button, Modal } from 'antd'
import React, { useState } from 'react'
import ReactLinkify from 'react-linkify';

function PreviewModal({data, language, code}) {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };

    // ReactLinkify에서 링크 클릭 시 새 창으로 띄우기 위한 Decorator
    const componentDecorator = (href, text, key) => (
      <a href={href} key={key} target="_blank" rel="noopener noreferrer">
          {text}
      </a>
    );

    return (
        <React.Fragment>
            <Button onClick={showModal} type="primary" style={{fontSize:'40px', fontWeight: 800, height: '80px', width: '80%', marginTop: '20px'}}>Preview</Button>  
            <Modal title="Preview" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
                   width="80%" style={{ overflowY: "auto"}}>
                <ReactLinkify componentDecorator={componentDecorator}>
                  {data.map((preview, index) => (
                      <div key={index} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'
                                              , justifyContent: 'center', margin: '2rem auto'}}>
                          <img src={`../images/preview/${code}_${preview.id}.png`} alt={preview.id} style={{maxWidth: '90%', marginBottom: '5px'}}/>
                          {preview.description.map((desc,index) => (
                              <b style={{fontSize: "16px", margin: '0 auto', columnSpan: 'all' }} key={index}>{desc}</b>
                          ))}
                      </div>
                  ))}
                </ReactLinkify>                
            </Modal>
        </React.Fragment> 
    )
}

export default PreviewModal
