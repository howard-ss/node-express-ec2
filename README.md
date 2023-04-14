Here are the detailed steps to set up the Express server on AWS EC2 instance:

.Create an AWS EC2 instance by following the instructions in the AWS   documentation. Make sure to choose a Linux-based operating system and select the free tier option if available.

.Connect to your EC2 instance using a terminal or PuTTY (if on Windows) using
SSH.

.Install Node.js and npm on your EC2 instance using the following command:
    sudo apt-get install nodejs npm

.Create a new directory for your project and navigate into it using the following commands:
    mkdir my-express-server
    cd my-express-server

.Create a new file called server.js using your preferred text editor and copy the following code into it:
    const express = require('express');
    const bodyParser = require('body-parser');

    const app = express();
    const port = process.env.PORT || 5001;

    let visitors = 0;

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/', (req, res) => {
    visitors++;
    const date = new Date();
    res.send(`Current Time: ${date.toLocaleTimeString()}. Total Visitors: ${visitors}`);
});

    app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

.Save the server.js file and install the necessary dependencies by running the following command:
 npm install express body-parser --save
