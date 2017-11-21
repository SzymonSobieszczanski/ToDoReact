# React ToDoApp

This is a project, which allow you to manage your time. 
Currently only working is todolist, and chat working on socket.io, but is not displaying messages, sending to server and reciving in fron works fine.In next stage I will implement settlements calculation, recipes,shopping list, and passport to handle login and registration.






## Get Started

1. Clone this repository

```bash
git clone https://github.com/SzymonSobieszczanski/todoreact.git
```

2. Change into the directory that was cloned and run `npm install`

```bash
cd  todoreact && npm install
```

3. Configure the MongoDb

Download MongoDb from this link:
https://www.mongodb.com/download-center#community
Install it. 
On your C drive create folder witch this structure:
C:/data/db
In this folder will be stored you local db.
then in cmd paste
```
cd "C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe
```






## Running The App

In development, the app runs via two separate processes

### Start the Express Server

```bash
node server/server.js
```

### Start Create React App

In a different terminal tab...

```bash
npm start
```

