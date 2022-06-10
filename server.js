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

    "code" : `
const commonKeys = (obj1, obj2) => 
    Object.keys(obj1).filter(key => obj2.hasOwnProperty(key));

commonKeys({ a: 1, b: 2 }, { a: 2, c: 1 }); // ['a']`
    },
    {"name" : "CSV to array",
    "tag" : "String, array",
    "expertise" : "Intermediate",
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
    {"name" : "HSB to RGB",
    "tag" : "Math",
    "expertise" : "Intermediate",
    "description" : "Converts a HSB color tuple to RGB format.",
    "bulletOne" : "Use the HSB to RGB conversion formula to convert to the appropriate format.",
    "bulletTwo" : "The range of the input parameters is H: [0, 360], S: [0, 100], B: [0, 100].",
    "bulletThree" : "The range of all output values is [0, 255].",

    "code" : `
const HSBToRGB = (h, s, b) => {
    s /= 100;
    b /= 100;
    const k = (n) => (n + h / 60) % 6;
    const f = (n) => b * (1 - s * Math.max(0, Math.min(k(n), 4 - k(n), 1)));
    return [255 * f(5), 255 * f(3), 255 * f(1)];
};

HSBToRGB(18, 81, 99); // [252.45, 109.31084999999996, 47.965499999999984]
`
    },
    {"name" : "Partial sum array",
    "tag" : "Math, array",
    "expertise" : "Intermediate",
    "description" : "Creates an array of partial sums.",
    "bulletOne" : "Use Array.prototype.reduce(), initialized with an empty array accumulator to iterate over nums.",
    "bulletTwo" : "Use Array.prototype.slice() to get the previous partial sum or 0 and add the current element to it.",
    "bulletThree" : "Use the spread operator (...) to add the new partial sum to the accumulator array containing the previous sums.",

    "code" : `
const accumulate = (...nums) =>
nums.reduce((acc, n) => [...acc, n + (acc.slice(-1)[0] || 0)], []);

accumulate(1, 2, 3, 4); // [1, 3, 6, 10]
accumulate(...[1, 2, 3, 4]); // [1, 3, 6, 10]
`
    },
    {"name" : "Add days to date",
    "tag" : "Date",
    "expertise" : "Intermediate",
    "description" : "Calculates the date of n days from the given date, returning its string representation.",
    "bulletOne" : "Use the Date constructor to create a Date object from the first argument.",
    "bulletTwo" : "Use Date.prototype.getDate() and Date.prototype.setDate() to add n days to the given date.",
    "bulletThree" : "Use Date.prototype.toISOString() to return a string in yyyy-mm-dd format.",
  
    "code" : `
const addDaysToDate = (date, n) => {
    const d = new Date(date);
    d.setDate(d.getDate() + n);
    return d.toISOString().split('T')[0];
  };

addDaysToDate('2020-10-15', 10); // '2020-10-25'
addDaysToDate('2020-10-15', -10); // '2020-10-05'
`
    },
    {"name" : "Add class to HTML element",
    "tag" : "Browser",
    "expertise" : "Beginner",
    "description" : "Adds a class to an HTML element.",
    "bulletOne" : "Use Element.classList and DOMTokenList.add() to add the specified class to the element.",
 
    "code" : `
const addClass = (el, className) => el.classList.add(className);

addClass(document.querySelector('p'), 'special');
// The paragraph will now have the 'special' class
`
    },
    {"name" : "Add event listener to all targets",
    "tag" : "Browser, event",
    "expertise" : "Intermediate",
    "description" : "Attaches an event listener to all the provided targets.",
    "bulletOne" : "Use Array.prototype.forEach() and EventTarget.addEventListener() to attach the provided listener for the given event type to all targets.",

    "code" : `
const addEventListenerAll = (targets, type, listener, options, useCapture) => {
    targets.forEach(target =>
      target.addEventListener(type, listener, options, useCapture)
    );
  };

addEventListenerAll(document.querySelectorAll('a'), 'click', () =>
console.log('Clicked a link')
);
// Logs 'Clicked a link' whenever any anchor element is clicked
`
    },
    {"name" : "JSON to file",
    "tag" : 'Node',
    "expertise" : "Intermediate",
    "description" : "Writes a JSON object to a file.",
    "bulletOne" : "Use fs.writeFileSync(), template literals and JSON.stringify() to write a json object to a .json file.",

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


//     {"name" : "",
//     "tag" : "",
//     "expertise" : "",
//     "description" : "",
//     "bulletOne" : "",
//     "bulletTwo" : "",
//     "bulletThree" : "",
//     "bulletFour" : "",
//     "bulletFive" : "",
//     "bulletSix" : "",
//     "code" : `
// `
//     },