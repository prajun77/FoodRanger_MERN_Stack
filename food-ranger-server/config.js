const config = {
    DB_CONNECTION: {
      foodRanger: "mongodb+srv://prajun7:Algorizin@cluster0.jleh2.mongodb.net/Algorizin_NodeJS_Project?authSource=admin&replicaSet=atlas-31lu3y-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true"
    },
    TOKEN_SECRET: {
      login: "Pineapple00"
    }
};
// check the connection string, check lastPass for mongoDB
// Need to import this in index.js file and in login file where we are using DB_CONNECTION and TOKEN_SECRET
// Need to replace proces.env variables

module.exports = config;
