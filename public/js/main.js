
const codeBlock = document.querySelector('code')
const randomNumber = Math.random()

async function apiRequest(){
    // const rapperName = document.querySelector('input').value
    try{
        const response = await fetch(`https://code-snippets-node-api.herokuapp.com/api`)
        const data = await response.json()
        console.log(data[0].code)
        let code = ""
        if(randomNumber < .5 ? code = data[1].code : code = data[0].code)
        codeBlock.innerText = code
     
    }catch(error){
        console.log(error)
    }
}

apiRequest()