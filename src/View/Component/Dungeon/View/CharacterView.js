import React from 'react'
import {Typography} from "antd";
import { chooseLang } from '../../util/func';
import CharacterUnit from '../Unit/CharacterUnit';

const {Title} = Typography;

function CharacterView({data, language}) {
    return (
        <div style={{padding: '10px'}}>
            {data.statusup ? <React.Fragment>
                <Title level={4} style={{marginTop: "30px"}}>{chooseLang(language, "천명작")}</Title>
                {data.statusup.map((a, index) => <CharacterUnit job={a} language={language} key={index}/>)} 
            </React.Fragment> : null}
            {data.multiple ? <React.Fragment>
                <Title level={4} style={{marginTop: "30px"}}>{chooseLang(language, "배수 캐릭터")}</Title>
                {data.multiple.map((a, index) => <CharacterUnit job={a} language={language} key={index}/>)} 
            </React.Fragment> : null}
            {data.book ? <React.Fragment>
                <Title level={4} style={{marginTop: "30px"}}>{chooseLang(language, "직업서")} (VH Only)</Title>
                {data.book.map((a, index) => <CharacterUnit job={a} language={language} key={index}/>)} 
            </React.Fragment> : null}
        </div>
    )
}

export default CharacterView
