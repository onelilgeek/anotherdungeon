import { Row, Tooltip } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import LanguageSelector from './LanguageSelector'
import { chooseLang } from '../util/func';
import logo from "../../../logo.png"

/*-- 
SPDX-FileCopyrightText: © 2021 Hyun Uk Lee <as0266@naver.com>

SPDX-License-Identifier: MIT
--*/  

function Header() {

    const language = useSelector(state => state.language)

    return (
        <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column'}}>
            <Link to="/">
                <Tooltip title={chooseLang(language, "홈으로 이동합니다.")}>
                    <img alt="logo" src={logo} style={{width: "85%", maxWidth: "400px"}}/>
                </Tooltip>
            </Link>
            <Row align="middle" justify="center">
                <LanguageSelector/>
            </Row>
        </div>
    )
}

export default Header

