import { Empty, Input } from 'antd'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { dungeonOptions } from '../Component/util/data'
import { chooseLang } from '../Component/util/func'
import ClassChangeUnit from '../Component/ClassChange/ClassChangeUnit'

const { Search } = Input;

function ClassChangePage() {

    const language = useSelector(state => state.language)
    const [SearchName, setSearchName] = useState("")

    const HandleChange = (e) => {
        setSearchName(e.target.value);
    }

    const [bookData, setbookData] = useState()

    const getBook = () => {
        let data = []
        dungeonOptions.forEach(a => {
            const json = require(`../../data/dungeon/${a.value}.json`)
            if(!json.character.book) return
            else {
                json.character.book.forEach(b => {
                    if(data.find(element => element.name === b.name))
                        data.find(element => element.name === b.name).dungeon
                         = data.find(element => element.name === b.name).dungeon.concat({
                            name: json.info.name,
                            code: json.code
                         })
                    else
                        data = data.concat({
                            name: b.name,
                            kor: b.kor,
                            dungeon: [ {
                                name: json.info.name,
                                code: json.code
                            } ]
                        })
                })
            }
        })
        setbookData(data)
    }
    
    const [treatise] = useState(require('../../data/treatise.json'))
    const [codex] = useState(require('../../data/codex.json'))
    const [bibliography] = useState(require('../../data/bibliography.json'))

    useEffect(() => {
        getBook()
    }, [])

    const body = () => {
        if(SearchName === "") return <Empty style={{breakInside: 'avoid', columnSpan: 'all'}}/>
        else {
            const filteredBook = bookData.filter(a => chooseLang(language, a.name).toLowerCase().includes(SearchName.toLowerCase())
                                                   || chooseLang(language, a.kor).toLowerCase().includes(SearchName.toLowerCase()))
            const filteredTreatise = treatise.character.book.filter(a => chooseLang(language, a.name).toLowerCase().includes(SearchName.toLowerCase())
                                                                      || chooseLang(language, a.kor).toLowerCase().includes(SearchName.toLowerCase()))
            const filteredCodex = codex.character.book.filter(a => chooseLang(language, a.name).toLowerCase().includes(SearchName.toLowerCase())
                                                                || chooseLang(language, a.kor).toLowerCase().includes(SearchName.toLowerCase()))
            const filteredBiblio = bibliography.character.book.filter(a => chooseLang(language, a.name).toLowerCase().includes(SearchName.toLowerCase())
                                                                || chooseLang(language, a.kor).toLowerCase().includes(SearchName.toLowerCase()))

            return (<React.Fragment>
                {filteredBook.map((a, index) => (
                    <ClassChangeUnit data={a} key={index} language={language}/>
                ))}
                {filteredTreatise.map((a, index) => (
                    <ClassChangeUnit data={a} key={index} language={language}/>
                ))}
                {filteredCodex.map((a, index) => (
                    <ClassChangeUnit data={a} key={index} language={language}/>
                ))}
                {filteredBiblio.map((a, index) => (
                    <ClassChangeUnit data={a} key={index} language={language} another={true}/>
                ))}
            </React.Fragment>)
        }
    }

    return (
        <div style={{paddingTop: "1rem", textAlign: 'center', display: 'flex',
                     flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                     maxWidth: '1500px', margin: '0 auto'}}>
            <h2>Books</h2>
            <b>사진 아래 버튼을 누르시면 해당 던전 정보로 이동합니다.</b>
            <b>단, 이절, 개전은 던전 링크가 표시되지 않습니다.</b>
            <b style={{color: 'red'}}>노말 5성 직업서는 Very Hard 난이도에서만 얻을 수 있습니다.</b>
            <Search style={{width:"250px", marginTop: "3rem", marginBottom: "2rem"}} 
            placeholder={chooseLang(language,"캐릭터, 책 이름 입력")} 
            value={SearchName} 
            onChange={HandleChange}
            enterButton />
            <div style={{display: 'inline-flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                {bookData ? body() : null}
            </div>
        </div>
    )
}

export default ClassChangePage
