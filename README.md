# Senior Enrichment Project

I Made a Thing!

![Home](https://www.evernote.com/shard/s306/sh/74508f24-c2e0-422f-bb64-5580f9fca89b/f68ce12b971b9b7a/res/d34d9033-2b92-48e6-b4ed-2b899de2e896/skitch.png)

![Campuses](https://www.evernote.com/shard/s306/sh/94903e51-ac6b-4fd5-9c5c-6df778daf30c/b24b3f70ae234fd4/res/09799f2a-c77c-4702-aef3-fed67915cb71/skitch.png)

![Students](https://www.evernote.com/shard/s306/sh/0d62ca22-d16b-4346-a8fa-445225fc0927/4e31f8d0eefe77bb/res/23e79fa3-fd33-4d78-9377-8a3a1b1832e3/skitch.png)

![View Campus](https://www.evernote.com/shard/s306/sh/12782686-d26b-4962-8aea-6f002599afa7/d6037cc05c2274f5/res/5590518e-78ad-4313-a501-f331de72b5b4/skitch.png)

![Edit Campus](https://www.evernote.com/shard/s306/sh/4e602602-be1b-4882-b56e-6b407892e7ba/44c421834808903f/res/f1dda45a-2650-41f4-ae9c-2a3a4ef985ef/skitch.png)

![Add Campus](https://www.evernote.com/shard/s306/sh/7ee4790f-8265-420f-81ab-ff54c0ed8031/93f66000c4b3b840/res/3d233b8e-d650-43c9-9b11-a67ed5c6c063/skitch.png)

![Add Student to Campus](https://www.evernote.com/shard/s306/sh/0f4a7fdf-8a6e-411b-82af-119e3b6dcc1d/f9a9d2fb6de451e9/res/9f0d0027-8d5e-4c13-9931-6125d1d96550/skitch.png)

![View Student](https://www.evernote.com/shard/s306/sh/2ea79ebf-adf8-4382-9425-1f9a6845e5a5/7accd8df39c78989/res/2052dd32-2cf2-4cbb-824c-a592473b6efd/skitch.png)

![Edit Student](https://www.evernote.com/shard/s306/sh/8d345a72-ceda-4ca4-bcc1-c9dce8a59d79/a029543e8d232a4d/res/879abb79-7eb6-413a-8fde-886869caef85/skitch.png)

![Add Student](https://www.evernote.com/shard/s306/sh/d30dd08d-c6c2-4ff4-a4bb-21898b59a83f/15ebbde19bb9afd0/res/1249d7ff-52e7-4820-b09b-6e67144cbfee/skitch.png)

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

