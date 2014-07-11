var dotenv = Npm.require('dotenv');
dotenv._getKeysAndValuesFromEnvFilePath(process.env.PWD + "/.env");
dotenv._setEnvs();
