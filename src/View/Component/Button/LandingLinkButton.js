import { Button } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';
import { chooseLang } from '../util/func';

// 메인 페이지 링크 버튼
function LandingLinkButton({imgname, link, str, language}) {
    return (
        <Link to={link} rel="noreferrer" style={{display: 'inline-block'}}>
            <Button style={{display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center'
                          , height: "130px", width: "130px", padding: "10px"}}>
                <img src={`images/menu/${imgname}.png`} alt={imgname} style={{maxHeight: '80px', margin: '0 auto'}}/>
                <b style={{fontSize: '20px'}}>{chooseLang(language, str)}</b>
            </Button>  
        </Link>    
    )
}

export default LandingLinkButton
