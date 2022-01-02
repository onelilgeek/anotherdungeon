import React from 'react'
import { chooseLang } from '../../util/func'
import { Tooltip } from 'antd'

// 던전에서 캐릭터 정보 나타내는 Unit
function CharacterUnit({language, job}) {

    const title = (job) => {
        if(job.kor) {
            return `${chooseLang(language,job.name)}(${chooseLang(language, job.kor)})`
        } else if (job.rate) {
            return `${chooseLang(language,job.name)} : ${job.rate}`
        } else {
            return chooseLang(language,job)
        }
    }

    const fileName = job.name ? job.name : job;

    return (
        <Tooltip title={title(job)}>
            <img alt={job} style={{ width: '18.5%', maxWidth: "80px", margin: '2px 2px 2px 2px'}} src={`../images/character_base/${fileName}.png`}/>
        </Tooltip>
    )
}

export default CharacterUnit
