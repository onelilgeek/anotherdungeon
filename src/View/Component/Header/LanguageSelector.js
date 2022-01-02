import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Select} from "antd";
import { setLanguage } from '../../../_redux/actions';

const { Option } = Select;

function LanguageSelector() {

    const dispatch = useDispatch()
    const language = useSelector(state => state.language)

    const changeLang = (value) => {
        dispatch(setLanguage(value))
        window.localStorage.setItem("language", value)
    }

    return (
        <Col span={24} style={{margin: '0 auto', marginBottom: "10px"}}>
            <b style={{margin: '15px'}}>Language Select</b>
            <Select onChange={changeLang} defaultValue={language} style={{margin: "5px auto"}}>
                <Option value="kor">한국어</Option>
                <Option value="jap">日本語</Option>
                <Option value="eng">English</Option>
            </Select>
        </Col>
    )
}

export default LanguageSelector