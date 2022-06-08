const snippetType = document.getElementById('language-copy')
const snippetName = document.getElementById('name')
const snippetDescription = document.getElementById('description')
const snippetBulletOne = document.getElementById('bullet-one')
const snippetBulletTwo = document.getElementById('bullet-two')
const snippetBulletThree = document.getElementById('bullet-three')
const snippetBulletFour = document.getElementById('bullet-four')
const snippetBulletFive = document.getElementById('bullet-five')
const codeBlock = document.querySelector('code')
const randomNumber = Math.random()



document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    // const rapperName = document.querySelector('input').value
    try{
        const response = await fetch(`https://code-snippets-node-api.herokuapp.com/api`)
        const data = await response.json()

    //randomly choose object from object array
          let randomObject = data[Math.floor(Math.random()*data.length)];
    //place random object into DOM
        snippetType.innerText = randomObject.tag
        snippetName.innerText = randomObject.name
        codeBlock.innerText = randomObject.code
        snippetDescription.innerText = randomObject.description
        snippetBulletOne.innerText = randomObject.bulletOne
        snippetBulletTwo.innerText = randomObject.bulletTwo
        snippetBulletThree.innerText = randomObject.bulletThree
        snippetBulletFour.innerText = randomObject.bulletFour
        snippetBulletFive.innerText = randomObject.bulletFive

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

// more info btn

document.querySelector('.more-info-btn').addEventListener('click', () => {

  document.querySelector('.more-info-container').classList.toggle('show')
})