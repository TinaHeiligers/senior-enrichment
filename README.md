# Senior Enrichment Project

I Made a Thing!

![Home](https://www.evernote.com/l/ATJ0UI8kwuBCL7tkVYD5_Kib9ozhK5cbm3o)

![Campuses](https://www.evernote.com/l/ATKUkD5RrGtP1Zxcbfd42vMMsks_cK4jT9Q)

![Students](https://www.evernote.com/l/ATINYsoi0WtDRqj6RFIl_AknTjH40O7-d7s)

![View Campus](https://www.evernote.com/l/ATISeCaG0mtJYorqbwAlma-n1gN8wFwidPU)

![Edit Campus](https://www.evernote.com/l/ATJOYCYCvhtIgrVua0B4kue6RMQhg0gIkD8)

![Add Campus](https://www.evernote.com/l/ATJ-5HkPgmVCD4Gr_1TA7YAxk_ZgAMSzuEA)

![Add Student to Campus](https://www.evernote.com/l/ATIPSn_fim5BG4KvEZ47bcwd-anS-23kUek)

![View Student](https://www.evernote.com/l/ATIup56_rfhDgpQlH5poReWleszY3znHiYk)

![Edit Student](https://www.evernote.com/l/ATKNNFpyztpMpLzBydzopZ15oClUPo0jKk0)

![New Student](https://www.evernote.com/l/ATLTDdCNxsJP9KS7IYmLWag_Feu94Zu5r9A)

## Running this app:

1. Fork and clone this repo
2. `npm install`
3. Create a postgress database named MHIAJ
4. Change the database synchronisation to {force:true} on line 24 in db/models/index.js
5. Run 'node seed.js' from the command line
6. Change the database synchronisation to {force:false} on line 24 in db/models/index.js again
5. Start the build process with: `npm run build-watch`
6. In another terminal, start your app with `npm start`
7. Navigate to localhost:1337 to launch the app.

## Requirements

### The Premise

You are the CTO of the Margaret Hamilton Interplanetary Academy of JavaScript. Create a RESTful web platform that allows you to manage your students and campuses.

### The tools

Use at least sequelize, express, react, and redux when creating this app. You can incorporate any additional libraries or tools you wish.

### DB Design

- Students
  * have profile info (first name, last name and email)
  * are assigned to a campus

- Campuses
  * have a name and image
  * can have many students assigned (may have none)

### Views and Functionality
#### See Wireframes folder for visual

- Navigation: as a user I...
//REACT STUFF
  - DONE * will land on **Home** by default
  - DONE * can navigate to **Campuses** from **Home**
  - DONE * can navigate to **Students** from **Home**
  - DONE * can navigate to view a **Single Campus** from **Campuses**
  - DONE * can navigate to view a **Single Student** from **Students**
  - DONE * can navigate to view a **Single Student** from **Campuses** (for any student at that campus)
  - DONE * can navigate to view that student's **Single Campus** from **Single Student**

- Views: as a user I...
//REACT
  - DONE * see a list of all campuses on the **Campuses** view
  - DONE * see a list of all students on the **Students** view
  - DONE * see details about a campus on the **Single Campus** view, including that campus's students
  - DONE * see details about a student on the **Single Student** view, including that student's campus

- Actions: as a user I...
//API ROUTES and actions that should be performed
  - DONE * can create a campus: POST to '/campuses'
  - DONE * can edit a campus's student info: removing a student from that campus: PUT '/students/:studentId/' only passing in a campusId from campus to the campus id, then to remove a student
  - DONE * can edit a campus's student info: adding a student to that campus: PUT '/students/:studentId/' only passing in a campusId
      from campus to the campus id, then to adding the student
  - DONE * can create a student

  DONE * can edit a campus's info: PUT to '/campuses/:campusId' - campus info such as name
  DONE * can edit a student's info, including the campus that student is assigned to
  DONE * can delete a student
  DONE * can delete a campus
  DONE: edit the way the buttons are at the moment:

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

```
OTHER
- DONE: move new student, new campus buttons off navbar into student list/campus list
- DONE: styling (forms, buttons, button placement)
- DONE: Params
- DONE: split routes into separate files
- TODO: tests
- TODO: dry New/Edit container using base class
```

## Evaluation

- Code modularity/readability (25%)
- Models (25%)
- Routes (25%)
- Frontend logic and functionality (25%)
- Design + Bonus features (up to 10 Extra Credit points)

