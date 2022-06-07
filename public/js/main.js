const snippetName = document.getElementById('name')
const snippetType = document.getElementById('type')
const snippetDescription = document.getElementById('description')

const codeBlock = document.querySelector('code')
const randomNumber = Math.random()

document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    // const rapperName = document.querySelector('input').value
    try{
        const response = await fetch(`https://code-snippets-node-api.herokuapp.com/api`)
        const data = await response.json()
        console.log(data[0].code)
        let code = ""
        if(randomNumber < .5 ? code = data[1].code : code = data[0].code)
        snippetName.innerText = data[1].name
        snippetType.innerText = data[1].tags
        snippetDescription.innerText = data[1].description
        codeBlock.innerText = data[1].code
     
    }catch(error){
        console.log(error)
    }
}

