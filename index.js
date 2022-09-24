//Imports
import inquirer from 'inquirer';
import generatePage from './src/page-template.js';
import witeFile from './utils/generate-site.js';
import Engineer from './lib/Engineer.js';
import Intern from './lib/Intern.js';
import Manager from './lib/Manager.js';

function App() {
    //cumulitave card string
    this.cardStr = '';

    //prompt questions
    this.managerPromptQs = [{
        type: 'input',
        name: 'name',
        message: "Enter your team manager's name:"
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter your team manager's id number:"
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter your team manager's email adress:"
    },
    {
        type: 'input',
        name: 'office',
        message: "Enter your team manager's office number:"
    }];
    
    this.internPromptQs = [{
        type: 'input',
        name: 'name',
        message: "Enter your intern's name:"
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter your intern's id number:"
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter your intern's email adress:"
    },
    {
        type: 'input',
        name: 'school',
        message: "Enter your intern's school:"
    }];

    this.engineerPromptQs = [{
        type: 'input',
        name: 'name',
        message: "Enter your engineer's name:"
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter your engineer's id number:"
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter your engineer's email adress:"
    },
    {
        type: 'input',
        name: 'userName',
        message: "Enter your engineer's GitHub user name:"
    }];

    this.addTeamMemberPromptQs = {
        type: 'list',
        message: 'What would you like to do next (choose one)?',
        name: 'userAction',
        choices: ['Add Engineer', 'Add Intern', 'Finish Building My Team']
    };
};

//app methods
App.prototype.initApp = function() {
    //inquirer prompt for manager
    inquirer
        .prompt(this.managerPromptQs)
        .then(inqObj => console.log(inqObj));
};

const app = new App();
app.initApp();