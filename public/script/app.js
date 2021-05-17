const messageTag = document.getElementById('msg')
const nameInput =  document.getElementById('name')

function convertApiResponse(res){
    console.log(res)
    const reponse = res.currentTarget.response
    return JSON.parse(reponse)
}

function updateMessage(res) {
    const requestJson = convertApiResponse(res)
    messageTag.innerHTML = requestJson.message;
}

function update() {
    getUpdateMsg(nameInput.value)
    nameInput.value = ''
}

function getUpdateMsg( val ) {
    const name = val || ""
    const param = '?name='+name
    const request = new XMLHttpRequest()
    request.open('GET', '/api/hello'+param, true)
    request.onload = updateMessage
    request.send()
}

getUpdateMsg("")