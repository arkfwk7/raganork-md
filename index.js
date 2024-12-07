const { exec } = require('child_process');

const command = 'cd rahul-tech && yarn install && npm start'; // Do not forget to subscribe Rahul Tech youTube channel

const child = exec(command);

child.stdout.on('data', (data) => {

    console.log(`stdout: ${data}`);

});

child.stderr.on('data', (data) => {

    console.error(`stderr: ${data}`);

});

child.on('close', (code) => {

    console.log(`child process exited with code ${code}`);

});
