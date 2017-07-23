# AngularJS-Skeleton
AngularJS Skeleton

## Getting Started

To get you started you can simply clone the `angular-seed` repository and install the dependencies:

### Clone `angular-seed`

Clone the `angular-seed` repository using git:

```
git clone https://github.com/angular/angular-seed.git
cd angular-seed
```

### Install Dependencies

```
npm install
```

### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
npm start
```

## Directory Layout

```
app/                    --> all of the source files for the application
* `app/bower_components` - contains the Angular framework files
  css/ 					--> custom stylesheet
  img/					--> images
  js/
  	app.js              --> main application module
  	controllers.js 		--> the controllers logic
  	directives.js 		--> custom directives
  	filters.js 			--> custom filters
  	services.js 		--> custom services
  templates/	  		--> the partial templates
  	directives/			--> directives templates
  index.html            --> app layout file (the main html template file of the app)
  app.css               --> default stylesheet
karma.conf.js         --> config file for running unit tests with Karma
```

* `node_modules` - contains the npm packages for the tools we need
