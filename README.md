# Senior Enrichment Project

Make a thing!

## Getting started

1. Fork and clone this repo
2. *Set the name of your project in `package.json`*. The skeleton intentionally ships with an invalid name.
3. `npm install`
4. Check out the mock-view in the `wireframes` folder
5. Start the build process with: `npm run build-watch`
6. In another terminal, start your app with `npm start`
7. If you navigate to the URL you should see some UI already :) [We already have some connection code to get you started]

## Requirements

### The Premise

You are the CTO of the Margaret Hamilton Interplanetary Academy of JavaScript. Create a RESTful web platform that allows you to manage your students and campuses.

### The tools

Use at least sequelize, express, react, and redux when creating this app. You can incorporate any additional libraries or tools you wish.

### DB Design

- Students
  * have profile info (e.g. name and email)
  * must be assigned to a campus

- Campuses
  * have info such as a name and image
  * can have many students assigned (may have none)

### Views and Functionality
#### See Wireframes folder for visual

- Navigation: as a user I...
//REACT STUFF
  - DONE * will land on **Home** by default
  TODO * can navigate to **Campuses** from **Home**
  - DONE * can navigate to **Students** from **Home**
  - DONE * can navigate to view a **Single Campus** from **Campuses**
  TODO * can navigate to view a **Single Student** from **Students**
  TODO * can navigate to view a **Single Student** from **Campuses** (for any student at that campus)
  TODO * can navigate to view that student's **Single Campus** from **Single Student**

- Views: as a user I...
//REACT
  - DONE * see a list of all campuses on the **Campuses** view
  - DONE * see a list of all students on the **Students** view
  - DONE * see details about a campus on the **Single Campus** view, including that campus's students
  TODO * see details about a student on the **Single Student** view, including that student's campus

- Actions: as a user I...
//API ROUTES and actions that should be performed
  - DONE * can create a campus: POST to '/campuses'
  - DONE * can edit a campus's info: PUT to '/campuses/:campusId' - campus info such as name
  - DONE * can edit a campus's student info: including adding/removing a student to/from that campus: PUT '/students/:studentId/' only passing in a campusId
      from campus to the campus id, then to remove a student
  TODO * can delete a campus
  - DONE * can create a student
  TODO * can edit a student's info, including the campus that student is assigned to
  TODO * can delete a student

### Routes

```
GET
- DONE- all campuses
- DONE- a campus by id
- DONE- all students
- DONE- a student by id
```

```
POST
- DONE- new campus
- DONE- new student
```

```
PUT
- DONE- updated student info for one student
- DONE- updated campus info for one campus
```

```
DELETE
- DONE- a campus
- DONE- a student
```

## Evaluation

- Code modularity/readability (25%)
- Models (25%)
- Routes (25%)
- Frontend logic and functionality (25%)
- Design + Bonus features (up to 10 Extra Credit points)

