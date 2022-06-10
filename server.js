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
    "bulletFour" : "",
    "bulletFive" : "",
    "bulletSix" : "",
    "code" : `
const commonKeys = (obj1, obj2) => 
    Object.keys(obj1).filter(key => obj2.hasOwnProperty(key));

commonKeys({ a: 1, b: 2 }, { a: 2, c: 1 }); // ['a']`
    },
    {"name" : "CSV to array",
    "tag" : "String, array",
    "expertise" : "intermediate",
    "description" : "Converts a comma-separated values (CSV) string to a 2D array.",
    "bulletOne" : "Use Array.prototype.indexOf() to find the first newline character (\\n).",
    "bulletTwo" : "Use Array.prototype.slice() to remove the first row (title row) if omitFirstRow is true.",
    "bulletThree" : "Use String.prototype.split() to create a string for each row.",
    "bulletFour" : "Use String.prototype.split() to separate the values in each row, using the provided delimiter.",
    "bulletFive" : "Omit the second argument, delimiter, to use a default delimiter of ','.",
    "bulletSix" : "Omit the third argument, omitFirstRow, to include the first row (title row) of the CSV string.",
    "code" : `
const CSVToArray = (data, delimiter = ',', omitFirstRow = false) =>
data
  .slice(omitFirstRow ? data.indexOf('\\n') + 1 : 0)
  .split('\\n')
  .map(v => v.split(delimiter));

CSVToArray('a,b\\nc,d'); // [['a', 'b'], ['c', 'd']];
CSVToArray('a;b\\nc;d', ';'); // [['a', 'b'], ['c', 'd']];
CSVToArray('col1,col2\\na,b\\nc,d', ',', true); // [['a', 'b'], ['c', 'd']];
`
    },
    {"name" : "",
    "tag" : "",
    "expertise" : "",
    "description" : "",
    "bulletOne" : "",
    "bulletTwo" : "",
    "bulletThree" : "",
    "bulletFour" : "",
    "bulletFive" : "",
    "bulletSix" : "",
    "code" : `
`
    },
    {"name" : "",
    "tag" : "",
    "expertise" : "",
    "description" : "",
    "bulletOne" : "",
    "bulletTwo" : "",
    "bulletThree" : "",
    "bulletFour" : "",
    "bulletFive" : "",
    "bulletSix" : "",
    "code" : `
`
    },
    {"name" : "",
    "tag" : "",
    "expertise" : "",
    "description" : "",
    "bulletOne" : "",
    "bulletTwo" : "",
    "bulletThree" : "",
    "bulletFour" : "",
    "bulletFive" : "",
    "bulletSix" : "",
    "code" : `
`
    },
    {"name" : "",
    "tag" : "",
    "expertise" : "",
    "description" : "",
    "bulletOne" : "",
    "bulletTwo" : "",
    "bulletThree" : "",
    "bulletFour" : "",
    "bulletFive" : "",
    "bulletSix" : "",
    "code" : `
`
    },
    {"name" : "",
    "tag" : "",
    "expertise" : "",
    "description" : "",
    "bulletOne" : "",
    "bulletTwo" : "",
    "bulletThree" : "",
    "bulletFour" : "",
    "bulletFive" : "",
    "bulletSix" : "",
    "code" : `
`
    },
    {"name" : "",
    "tag" : "",
    "expertise" : "",
    "description" : "",
    "bulletOne" : "",
    "bulletTwo" : "",
    "bulletThree" : "",
    "bulletFour" : "",
    "bulletFive" : "",
    "bulletSix" : "",
    "code" : `
`
    },
    {"name" : "JSON to file",
    "tag" : 'Node',
    "expertise" : "Intermediate",
    "description" : "Writes a JSON object to a file.",
    "bulletOne" : "Use fs.writeFileSync(), template literals and JSON.stringify() to write a json object to a .json file.",
    "bulletTwo" : "",
    "bulletThree" : "",
    "bulletFour" : "",
    "bulletFive" : "",
    "bulletSix" : "",
    "code" : `
const fs = require('fs');

const JSONToFile = (obj, filename) =>
    fs.writeFileSync(\`$\{filename}.json\`, JSON.stringify(obj, null, 2));
        
JSONToFile({ test: 'is passed' }, 'testJsonFile');
// writes the object to 'testJsonFile.json'`
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
