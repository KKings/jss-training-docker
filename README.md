# Getting started
# Before you begin
You will need the following:
- A valid Sitecore 10 license
- Installed node, powershell, docker, and JSS

# Setting up the training website

## Setting up docker

1. Add license.xml to ./sandbox/license
2. Open a powershell CLI as administrator and run ```.\init```
3. In the same powershell CLI, run ```docker-compose up -d```

## Install Training Package
Once successfully running sitecore, navigate to https://admin.sc10.local/sitecore using admin/b

After logging in:

1. Install the Trainer.Website in the ./sandbox/assets directory. The package only contents templates and example content
2. Publish the entire content tree

Note: This is temporary until I can create another image to install the package

## Setting up the App

1. Navigate to ./app and open a powershell CLI and run ```npm i```
2. In the same CLI, run 
```jss deploy config``` to deploy the App Sitecore configuration

To deploy the application to Sitecore to test experience editor (Sitecore JSS Integrated mode) run ```jss deploy app```

To play around with connected mode, run ```jss start:connected```. This will open the browser at localhost and proxy requests to your Sitecore instance, includes hot-reloading for development.

# URLS
The docker images will create the following hosts entries:

* admin.sc10.local - Content Management server
* login.sc10.local - Identity server
* trainer.sc10.local - Training website

