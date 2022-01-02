import React, { useState } from 'react'
import { Empty, AutoComplete, Tag } from 'antd';
import personality from "../../data/personality.json"
import { useSelector } from 'react-redux';
import PersonalityUnit from '../Component/Personality/PersonalityUnit';
import { chooseLang } from '../Component/util/func';

const colors = ["magenta", "volcano", "gold", "green", "cyan", "blue", "purple"]

function PersonalityPage() {

    const [Search, setSearch] = useState([])
    const [Input, setInput] = useState("")
    const language = useSelector(state => state.language)

    const personalities = () => {
        let data = []
        personality.forEach(a => {
            data = data.concat(a.personality)
        })
        console.log(Array.from(new Set(data)).map(a => ( 
            { name: a,  value : chooseLang(language,a) } 
        )))
        return Array.from(new Set(data)).map(a => ( 
            { name: a,  value : chooseLang(language,a) } 
        ))
    }

    const filtered = personality.filter(item => {
        let temp = true;
        Search.forEach(b => {
            if(item.personality.indexOf(b) === -1)
                temp = false;
        })
        return temp;
    })

    const onKeyDown = (e) => {
        if(e.key === "Enter") {
            const arr = personalities().filter(a => a.value.toUpperCase().includes(e.target.value.toUpperCase()))
            if(arr.length > 0) {
                setSearch(Array.from(new Set([...Search, arr[0].name])))
                setInput("")
            }
        }
    }

    const handleClose = (tag) => {
        setSearch(Search.filter(item => item !== tag))
    }

    return (
        <div style={{paddingTop: "1rem", textAlign: 'center', display: 'flex',
                     flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                     maxWidth: '1500px', margin: '0 auto'}}>
            <h2>{chooseLang(language, "퍼스널리티")}</h2>
            <div style={{display: 'flex', maxWidth: '400px', flexWrap: 'wrap', margin: '10px 10px 10px 10px'}}>
                {Search.map((a, index) => (
                    <Tag style={{margin: '1px'}} color={colors[index%7]} key={index} closable 
                    onClose={(e) => {
                        e.preventDefault()
                        handleClose(a)
                    }}>
                        {chooseLang(language,a)}
                    </Tag>
                ))}
            </div>            
            <AutoComplete
                style={{ width: 250, marginBottom: '30px'}}
                options={personalities()}
                value={Input}
                filterOption={(inputValue, option) =>
                    option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                }
                placeholder={chooseLang(language, "퍼스널리티")+" Search"}
                onChange={(value) => setInput(value)}
                onSelect={(value) => {
                    const b = personalities().find(a => a.value.toUpperCase() === value.toUpperCase())
                    setSearch(Array.from(new Set([...Search, b.name])))
                    setInput("")
                }}
                onKeyDown={onKeyDown}
            />
            <div style={{display: 'inline-flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                {Search.length > 0 ? filtered.map((item, index) => (
                    <PersonalityUnit data={item} key={index} language={language}/>
                )) : <Empty/>}
            </div>
        </div>
    )
}

export default PersonalityPage
