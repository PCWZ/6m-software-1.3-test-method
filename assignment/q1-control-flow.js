/*
    Task
    - Implement a switch statement to check against `env` environmental variable.
    - If `env` is "DEV", no change to `databaseCredential`.
    - If `env` is "STAGE", modify `databaseCredential` to "stageuser:password".
    - If `env` is "PROD", modify `databaseCredential` to "produser:password"
    
*/

const env = "DEV"; // Toggle between these possible values "DEV" | "STAGE" | "PROD"
let databaseCredential = "devuser:password";

// Task: Add code here
/*if (env == "STAGE") {

    databaseCredential = "stageuser:password"
    
} else if (env == "PROD") {

    databaseCredential = "produser:password"
    
}*/


switch(env.toUpperCase())
{
    case "DEV":
    databaseCredential = "devuser:password";
    break;

    case "STAGE":
    databaseCredential = "stageuser:password";
    break;

    case "PROD":
    databaseCredential = "produser:password";
    break;

    default:
    databaseCredential = "env not found";
    break;
}


console.log(`Database credential for environment ${env} is ${databaseCredential}`);
