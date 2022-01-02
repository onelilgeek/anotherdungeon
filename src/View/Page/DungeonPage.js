import React, { useEffect, useState } from 'react'
import { AutoComplete, Button } from 'antd'
import { dungeonOptions } from '../Component/util/data'
import DungeonComponent from '../Component/Dungeon/DungeonComponent'
import { useSelector } from 'react-redux'
import { chooseLang } from '../Component/util/func'
import DomToImage from 'dom-to-image'

function DungeonPage(props) {

    const [Dungeon, setDungeon] = useState()

    const getDungeon = () => {
        window.localStorage.setItem("anotherdungeon", props.match.params.name)
        setDungeon(props.match.params.name)
    }

    const [Input, setInput] = useState("")

    const language = useSelector(state => state.language)

    const options = dungeonOptions.map(a => (
        {
            value: a.value,
            label: chooseLang(language, a.label)
        }
    ))

    const onKeyDown = (e) => {
        if(e.key === "Enter") {
            const filtered = options.filter(a => a.label.toUpperCase().includes(e.target.value.toUpperCase()))
            if(filtered.length > 0) {
                setDungeon(filtered[0].value)
                window.localStorage.setItem("anotherdungeon", filtered[0].value)
                window.history.replaceState(null, `${filtered[0].value}`, `${filtered[0].value}`)
                setInput(filtered[0].label)
            }
        }
    }

    const handleSaveClick = () => {
      DomToImage.toJpeg(document.querySelector('.dungeoncontainer'), { quality: 1 })
      .then(function (dataUrl) {
          var link = document.createElement('a');
          link.download = `${Dungeon}.jpeg`;
          link.href = dataUrl;
          link.click();
      });
    }

    useEffect(() => {
        getDungeon()
    }, [])

    return (
        <div style={{paddingTop: "2rem", textAlign: 'center', maxWidth: '1500px', margin: '0 auto'}}>
            <h2>Dungeon</h2>
            <Button type="primary" onClick={handleSaveClick} style={{margin:"1rem"}}>Map Download</Button>
            <AutoComplete
                style={{ width: 250, marginBottom: '30px'}}
                allowClear
                options={options}
                placeholder={chooseLang(language, "던전 이름을 입력하세요.")}
                value={Input}
                filterOption={(inputValue, option) => {
                    console.log(inputValue)
                    return option.label.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                }}
                onChange={(value) => setInput(value)}
                onSelect={(value) => {
                    const b = options.find(a => a.value.toUpperCase() === value.toUpperCase())
                    setDungeon(value)
                    window.localStorage.setItem("anotherdungeon", value)
                    window.history.replaceState(null, `${value}`, `${value}`)
                    setInput(b.label)
                }}
                onKeyDown={onKeyDown}
            />
            {Dungeon ? <DungeonComponent dungeon={Dungeon} language={language}/> : null}
        </div>
    )
}

export default DungeonPage
