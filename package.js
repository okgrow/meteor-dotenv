Package.describe({
  summary: "Set environment variables defined in a .env file"
});

Npm.depends({dotenv: "0.4.0"});

Package.on_use(function (api) {
  api.add_files('lib/dotenv.js', 'server');
});
