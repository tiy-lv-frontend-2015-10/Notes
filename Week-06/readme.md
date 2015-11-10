# Working with Data

## Databases

Conventional databases store data much like a spreadsheet. A single spreadsheet has columns and rows. This maps to a table in a database.

A table in a database has columns that describe what data goes in that field, and rows which are individual records of that type.

Lets image a person database. It could have columns for FirstName, LastName, and Age:

| ID | FirstName | LastName | Age  |
|----|-----------|----------|------|
| 1  | Michael   | Sweeney  | 32   |
| 2  | Jeff      | Newburn  | 37   |
| 3  | Tisha     | Looker   | null |
| 4  | Aaron     | Pentz    | 36   |

In this example, the rows indicate what properties are being stored and the rows are for each individual record (or person in this case.)

Notice there is not a value for Tisha's age, so it is set to null.

You might have already noticed that this data maps very well to __JSON__:

```javascript
[{
  "ID": 1,
  "FirstName": "JD",
  "LastName": "Isaacks",
  "Age": 31
},{
  "ID": 2,
  "FirstName": "Tim",
  "LastName": "Whitacre",
  "Age": 31
},{
  "ID": 3,
  "FirstName": "Lindsey",
  "LastName": "Owings",
  "Age": null
},{
  "ID": 4,
  "FirstName": "Brit",
  "LastName": "Butler",
  "Age": 28
}]
```

## REST Review

Rest is a way to create an API for getting data in and out of a database.

Rest usually uses a specific convention for urls for specific records.

Continuing the people table from above a REST API may looks something like this:

* __GET__ example.com/__people__ (get all records)
* __POST__ example.com/__people__ (add a new record)
* __GET__ example.com/__people/:id__ (get a specific record)
* __PUT__ example.com/__people/:id__ (update a specific record)
* __DELETE__ example.com/__people/:id__ (delete a specific record)

In the examples above __:id__ would need to be the actual id for the specific record.

## Parse

Parse is a Backend (Database) as a Service. It stores records and provides a REST API.

__Things to note:__

* Parse calls the __id__ field in their tables __objectId__
* Parse calls their database tables, __classes__ this will make sense once you understand Backbone's role in all of this.

__To create a new Parse app:__

* Go to [https://www.parse.com/apps](https://www.parse.com/apps)
* Click __Create a new App__
* Enter a name and click __Create__

__To add a class (data base table):__

* Go to the __core__ tab of your parse app and click the __+ Add Class__ button on the left.
* Choose custom and enter a name.

__To manually add data (rows):__

Click on the class (table) and click the __+ Row__ button.

__To manually add fields (columns):__

Click on the class (table) and click on the __+ Col__ button.

__To access data on parse from a web app__:

You have to specify the App and the REST key as request headers. You can set jQuery to always add them with every request:

```javascript
$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': '<YOUR APP ID>',
    'X-Parse-REST-API-Key': '<YOUR REST API KEY>'
  }
});
```

You will need to sign up for an account with parse to get your keys.

## Backbone

With 5 or more URLs for a single type of resource (data), and considering that many applications are using multiple resources, it just makes sense to have specific JavaScript objects that can handle these tasks. That is where the Models and Collections of Backbone come into play.

When looking at the JSON data of people, we can see that it is an `Array` of `Objects`. Backbone provides a way of interacting with the Array or with the individual objects using the Collection and Model respectively.

__Backbone.Model__:

The model handles all the REST interactions for a single specific record.

```javascript
// Define the Model class
var Person = Backbone.Model.extend({
  urlRoot: 'example.com/people', // or https://api.parse.com/1/classes/People
  idAttribute: 'ID' // or objectId for parse
});

// Create The JD Record
var jo = new Person({
  FirstName: "Jo",
  LastName: "Albright"
});

// Save the record
jo.save(); // new record so it makes a POST to 'example.com/people'

console.log(jo.id); // 5 (get its the ID from the REST response when saving)

// Update the record
jo.set("Age", 25);
jo.save(); // existing record so it makes a PUT to 'example.com/people/5'
```

__Backbone.Collection__:

The collection handles fetching all the records from a single table and converting each record into a backbone model.

```javascript
// Define the Collection class
var People = Backbone.Collection.extend({
  url: 'example.com/people', // or https://api.parse.com/1/classes/People
  model: Person,
  parse: function(data) {
    return data.results;
  }
});

// Create an instance
var people = new People();

// Fetch the records (makes a GET to 'example.com/people')
people.fetch().then(function() {
  
  // How many records were fetched?
  console.log(people.length); // 5

  // What is the last records FirstName?
  var lastModel = people.last(); // returns a Backbone.Model instance
  console.log( lastModel.get('FirstName') ); // Jo
});
```