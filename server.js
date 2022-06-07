const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())



const codeSnippets = [
        {"name" : "Common keys",
        "tag" : 'Object',
        "expertise" : "Intermediate",
        "description" : "Finds the common keys between two objects.",
        "bulletOne" : "Use Object.keys() to get the keys of the first object.",
        "bulletTwo" : "Use Object.prototype.hasOwnProperty() to check if the second object has a key that's in the first object.",
        "bulletThree" : "Use Array.prototype.filter() to filter out keys that aren't in both objects.",
        "code" : "const commonKeys = (obj1, obj2) => Object.keys(obj1).filter(key => obj2.hasOwnProperty(key));",
        "execution" : "commonKeys({ a: 1, b: 2 }, { a: 2, c: 1 }); // ['a']"
    },
        {"name" : "JSON to file",
        "tag" : 'Node',
        "expertise" : "Intermediate",
        "description" : "Writes a JSON object to a file.",
        "bulletOne" : "Use fs.writeFileSync(), template literals and JSON.stringify() to write a json object to a .json file.",
        "bulletTwo" : "",
        "bulletThree" : "",
        "code" : `const fs = require('fs');

                  const JSONToFile = (obj, filename) =>
                      fs.writeFileSync(\`${filename}.json\`, JSON.stringify(obj, null, 2));`,
        
        "execution" : "JSONToFile({ test: 'is passed' }, 'testJsonFile');// writes the object to 'testJsonFile.json'"
}]

app.get('/',(require,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api',(request,response)=>{
    response.json(codeSnippets)
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})

