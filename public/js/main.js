
const codeBlock = document.querySelector('code')

async function apiRequest(){
    // const rapperName = document.querySelector('input').value
    try{
        const response = await fetch(`https://code-snippets-node-api.herokuapp.com/api`)
        const data = await response.json()
        console.log(data[0].code)
        codeBlock.innerText = data[0].code
     
    }catch(error){
        console.log(error)
    }
}

apiRequest()