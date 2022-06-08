const snippetType = document.getElementById('language-copy')
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

        snippetType.innerText = data[1].tag
        snippetDescription.innerText = data[1].description
        codeBlock.innerText = data[1].code

        console.log(data[0].type)
     
    }catch(error){
        console.log(error)
    }
}




  
    const codeBlocks = document.getElementById('code');
    const copyButton = document.getElementById('copy-button');
    const copySuccess = document.getElementById('copy-success');
  
    const copyTextHandler = () => {
      const text = codeBlocks.innerText;
  
      // first version - document.execCommand('copy');
      // var element = document.createElement('textarea');
      // document.body.appendChild(element);
      // element.value = text;
      // element.select();
      // document.execCommand('copy');
      // document.body.removeChild(element);
  
      // copySuccess.classList.add('show-message');
      // setTimeout(() => {
      //   copySuccess.classList.remove('show-message');
      // }, 2500);
  
      //   second version - Clipboard API
      navigator.clipboard.writeText(text).then(
        () => {
          copySuccess.classList.add('show-message');
          setTimeout(() => {
            copySuccess.classList.remove('show-message');
          }, 2500);
        },
        () => {
          console.log('Error writing to the clipboard');
        }
      );
    };
  
    copyButton.addEventListener('click', copyTextHandler);
