
const inquirer = require('inquirer');
const jest = require('jest');
const { filter } = require('rxjs');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const pageBuilder = require(`./src/helperPage`);

var team =  [];

function addManager(){
   inquirer.prompt([
          /* Pass your questions in here */
          
          {
            type: `input`,
            message: `What is this Manager's name?`,
            name: `name`,
            validate(answer) {
              const hasNumber = /\d/;
                if (hasNumber.test(answer)) {
                    return "Please, enter a name!"
                }else {
                  return true;
                }
            }
        },

          {
              type: `number`,
              message: `What is this Manager's ID?`,
              name: `id`,
              validate(answer){
                  if(answer && !isNaN(answer)){
                      return true;        
                  } else {
                      return "Please enter a number"
                  }
          }
        },

        {
          type: "input",
          message: "What is this manager's email?",
          name: "email"
        },

        {
          type: "number",
          message: "What is this Manager's Office Number?",
          name: "officeNumber",
            validate(answer){
              if(answer && !isNaN(answer)){
                return true;
              } else {
                return "Please input a number"
              }
            }
        },
   ])
   .then((managerChonk) => {
    console.log(managerChonk);
    team.push(new Manager(managerChonk));
    console.log(team[0]);
    choices();
   })

   
}

function addEngineer(){
  console.log("Lets add an engineer! Please answer the following questions");
  inquirer.prompt([

    {
      type: `input`,
      name: `name`,
      message: `What is the Engineer's name? `,
  },

  {
      type: `number`,
      name: `id`,
      message: `What is the Engineer's ID? `,
      validate(answer){
        if(answer && !isNaN(answer)){
            return true;        
        } else {
            return "Please enter a number"
        }
}
  },

  {
      type: `input`,
      name: `email`,
      message: `What is the Engineer's email? `,
  },

  {
      type: `input`,
      name: `github`,
      message: `What is the Engineer's github? `,
  },

  ])
  .then((data) => {
    console.log(data);
    team.push(new Engineer(data));
    console.log(team);
    choices();
  })
  
}

function addIntern(){
  console.log("Lets add the Intern(are they even really considered an employee?)!");
  inquirer
  .prompt([
      {
          type: `input`,
          name: `name`,
          message: `What is the Intern's name? `,
      },
      {
          type: `number`,
          name: `id`,
          message: `What is the Intern's ID? `,
          validate(answer){
            if(answer && !isNaN(answer)){
                return true;        
            } else {
                return "Please enter a number"
            }
         }
      },
      {
          type: `input`,
          name: `email`,
          message: `What is the Intern's email? `,
      },
      {
          type: `input`,
          name: `school`,
          message: `What is the Intern's school? `,
      },
  ])
  .then((data) => {
    console.log(data);
    team.push(new Intern(data));
    console.log(team);
    choices();
  })
  
}

function addEmployee(givenChoice){
  if (givenChoice === 'Add Engineer'){
    addEngineer();
  }else {
    addIntern();
  }
  console.log(givenChoice);
}

function choices(){
  inquirer.prompt(  {
    type: "list",
    message: "Anymore Employee's?",
    choices: ['Add Engineer', 'Add Intern', 'I am done'],
    name: "choice"
  })
  .then(async ({choice}) => {
    console.log(choice);
    if (choice === 'I am done') {
      console.log('Wrapping things up...')
     buildIt(team)
      return 'ok'; //END
  } else {
      addEmployee(choice);//i forgot to add choice here and was wondering why my code hated engineers. 
    }
  })
}

function buildIt(array){
  console.log("Team generator.... generating");
  console.log(array);
  pageBuilder(array);
}

function initializeThisStuff(){
  addManager();
}

initializeThisStuff();
 