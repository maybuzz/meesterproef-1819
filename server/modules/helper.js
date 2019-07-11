const fetch = require('node-fetch')

function getDataWithToken({acces_token, url}){
    return fetch(url,
    {
        headers:
        {
        'Authorization': 'Bearer ' + acces_token
        }
    })
        .then(response=> response.json())
}

function getData(url){
    return fetch(url)
        .then(response=> response.json())
}

function filterChar(string){
  return string.replace(/[|&;%@"<>()+,!?¡]/g,"")
}

function replaceSpace(string){
    return string.replace(/ /g,"_")
}

function replaceSpacePlus(string){
    return string.replace(/ /g,"+")
}

function filterOutChar(string){
    return string.trim()
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index
}

module.exports = {getDataWithToken, getData, filterChar, replaceSpace, replaceSpacePlus, filterOutChar, onlyUnique}
