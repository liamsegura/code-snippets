

async function apiRequest(){
    // const rapperName = document.querySelector('input').value
    try{
        const response = await fetch(`http://localhost:8000/api`)
        const data = await response.json()
        console.log(data)
     
    }catch(error){
        console.log(error)
    }
}

apiRequest()