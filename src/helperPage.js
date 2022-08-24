const fs = require('fs');

function cardBuilder(parameter){
    let variable;
     ({name, id, email, officeNumber, github, school} = parameter) 
    if(officeNumber){
        variable = `Office Number: ${officeNumber}`;
    } else if(github) {
        variable = `Github: <a href="https://github.com/${github}"> ${github}</a>`;
    } else {
        variable = `School: ${school}`;
    }

    return `
    <div class="card">
        <div class = "card-head">
            <div class = "card-name">${name}</div>
            <div class = "card-title">${parameter.constructor.name}</div>
        </div>
        <div class="card-body">
            <div class="id">ID:${id}</div>
            <div class="email">Email: <a href="mailto:${email}">${email}</a></div>
            <div class="variable">${variable}</div>
        </div>
    </div>`
}

function length(teamArray) {
    let long = ``;
    console.log(teamArray);
    for (i=0; i<teamArray.length; i++){
        console.log(`${i}`);
        long += cardBuilder(teamArray[i]);
    }
    return long;
}

module.exports = function(teamArray){
    
    let page = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    
    <body>
    
        <header>
            My Team
        </header>
    
        <main>
            
            ${length(teamArray)}
    
        </main>
    
    </body>
    
    </html>
    ` 

    new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', page, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
}