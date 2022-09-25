//Imports
import inquirer from 'inquirer';
import generatePage from './src/page-template.js';
import witeFile from './utils/generate-site.js';
import Engineer from './lib/Engineer.js';
import Intern from './lib/Intern.js';
import Manager from './lib/Manager.js';
import writeFile from './utils/generate-site.js';

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
        .prompt(app.managerPromptQs)
        .then(({ name,id,email,office }) => {
            app.addManager(name,id,email,office); 
            app.addTeamMember();
        })
        
};


App.prototype.addTeamMember = function () {
    inquirer
        .prompt(app.addTeamMemberPromptQs)
        .then(({ userAction }) => {
            if (userAction === 'Add Engineer') {
                //add en prompt
                inquirer
                    .prompt(app.engineerPromptQs)
                    .then(({ name,id,email,userName }) => {
                        app.addEngineer(name,id,email,userName);
                        app.addTeamMember();
                    });
                
            } else if (userAction === 'Add Intern') {
                // add in prompt
                inquirer
                    .prompt(app.internPromptQs)
                    .then(({ name,id,email,school }) => {
                        app.addIntern(name,id,email,school);
                        app.addTeamMember();
                    });
            } else {
                // write to file and end app
                //console.log(app.cardStr);
                var pageStr = generatePage(app.cardStr);
                writeFile(pageStr);
            }
        });
      
};

App.prototype.addManager = function(name,id,email,office) {
    var manager = new Manager(name,id,email,office);
    var manAtts = manager.getManagerAttributes();
    app.cardStr += manager.formatCard(manAtts);
};

App.prototype.addEngineer = function(name,id,email,userName) {
    var engineer = new Engineer(name,id,email,userName);
    var enAtts = engineer.getEngineerAttributes();
    app.cardStr += engineer.formatCard(enAtts);
};

App.prototype.addIntern = function(name,id,email,school) {
    var intern = new Intern(name,id,email,school);
    var inAtts = intern.getInternAttributes();
    app.cardStr += intern.formatCard(inAtts);
};





// initialize app
const app = new App();
app.initApp();