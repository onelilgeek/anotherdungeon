import React from 'react'
import LandingLinkButton from '../Component/Button/LandingLinkButton'
import { Button } from 'antd';
import { dungeonOptions } from '../Component/util/data';
import { chooseLang } from '../Component/util/func';
import { useSelector } from 'react-redux';

function LandingPage() {

    const language = useSelector(state => state.language)
    const dungeonName = window.localStorage.getItem("anotherdungeon")
                      ? window.localStorage.getItem("anotherdungeon")
                      : dungeonOptions[0].value

    return (
        <div style={{paddingTop: "2rem", textAlign: 'center', maxWidth: '300px', margin: '0 auto'}}>
            <LandingLinkButton str="던전" link={`/dungeon/${dungeonName}`} imgname="dungeon" language={language}/>
            <LandingLinkButton str="직업서" link="/class" imgname="book" language={language}/>
            <LandingLinkButton str="퍼스널리티" link="/personality" imgname="person" language={language}/>
            <a href="https://hu-lee.github.io/anothercharcheck/" target="_blank" rel="noreferrer"  style={{display: 'inline-block'}}>
                <Button style={{display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center'
                          , height: "130px", width: "130px", padding: "10px"}}>
                    <img src={`images/menu/cyrus.png`} alt="cyrus" style={{maxHeight: '80px', margin: '0 auto'}}/>
                    <b style={{fontSize: '20px'}}>{chooseLang(language, "체크리스트")}</b>
                </Button>  
            </a> 
        </div>
    )
}

export default LandingPage
