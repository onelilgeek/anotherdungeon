import dictionary from "../../../data/dictionary.json"

//dictionary.json을 이용해 번역명을 바꿔 주는 함수
export const chooseLang = (language, kor) => {
    if(kor.includes('(AS)')) {
        return `${chooseLang(language, kor.replace('(AS)', ''))}(AS)`
    } else if (kor.includes('(ES)')) {
        return `${chooseLang(language, kor.replace('(ES)', ''))}(ES)`
    }
    const translate = dictionary.find(e => e.kor === kor)
    if(!translate)
        return language === "kor" ? kor : null;
    else
        return translate[language];
}