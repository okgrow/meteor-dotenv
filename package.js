Package.describe({
  name:    "pauldowman:dotenv",
  version: "1.0.0",
  summary: "Set environment variables defined in a .env file",
  git:     "https://github.com/okgrow/meteor-dotenv/"
});

Npm.depends({dotenv: "0.4.0"});

Package.onUse(function (api) {
  api.addFiles('lib/dotenv.js', 'server');
});
