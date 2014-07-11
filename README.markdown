dotenv for Meteor
-----------------

Dotenv loads environment variables from .env into ENV (process.env).

This is [scottmotte/dotenv](https://github.com/scottmotte/dotenv) packaged for Meteor.

> "Storing [configuration in the environment](http://www.12factor.net/config) is one of the tenets of a [twelve-factor app](http://www.12factor.net/). Anything that is likely to change between deployment environments–such as resource handles for databases or credentials for external services–should be extracted from the code into environment variables.
> 
> But it is not always practical to set environment variables on development machines or continuous integration servers where multiple projects are run. Dotenv load variables from a `.env` file into ENV when the environment is bootstrapped."
> 
> [Brandon Keepers' Dotenv in Ruby](https://github.com/bkeepers/dotenv)

Installation
------------

`mrt install dotenv`

Usage
-----

Create a `.env` file in the root directory of your project. Add the application configuration you want. For example:

```
S3_BUCKET=YOURS3BUCKET
SECRET_KEY=YOURSECRETKEYGOESHERE
SENDGRID_USERNAME=YOURSENDGRIDUSERNAME
SENDGRID_PASSWORD=YOURSENDGRIDPASSWORDGOESHERE
```

Whenever your application loads, these variables will be available in `process.env`:

```javascript
var sendgrid_username = process.env.SENDGRID_USERNAME;
var secret_key        = process.env.SECRET_KEY;
```

That's it. You're done.

## Should I commit my .env file?

Try not to commit your .env file to version control. It is best to keep it local to your machine and local on any machine you deploy to. Keep production credential .envs on your production machines, and keep development .envs on your local machine.

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Thanks to @scottmotte for the npm module and the parts of this README that I stole without even editing.
