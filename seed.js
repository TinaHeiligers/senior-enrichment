//this file ain't working: db is undefined
const {db} = require('./db/index')
    , {Student, Campus} = require('./db/models')
    , Promise = require('bluebird')
    , randomCat = require('random-cat')//just for now, https://www.npmjs.com/package/random-cat


var urlOfCity = randomCat.get({
  width: 500,
  height: 500,
  category: 'city'
});

function getCityImage() {
  return randomCat.get({
    width: 500,
    height: 500,
    category: 'city',
    imageIndex: Math.floor(Math.random() * 10)
  });
}

function deleteCampuses() {
  return Campus.destroy({where: {}})
}
function deleteStudents() {
  return Student.destroy({where: {}})
}

function seed() {
  //1. delete first, then create
  return deleteCampuses()
  .then(deleteStudents)
  .then(createCampuses)
  .then(createStudents(20))
}

//Was I run on the command line?
if (module === require.main) {
  db.sync({force:false})
  .then(seed)
  .then(stuff => {
    console.log(`seeded ${stuff.length} rows`)
  })
  //May cause errors, without it, we hang for a few seconds
  // .finally(() => db.close())
}

function createCampuses() {
  const arrayOfCampusPromises = CAMPUSES.map(name => Campus.create({
    name: name,
    image: getCityImage()
  }))
  , promiseOfCampusArray = Promise.all(arrayOfCampusPromises)
  return promiseOfCampusArray
}

function createStudents(count) {
  return function(campuses) {
    const studentPromises = []
    while(--count >= 0) {
      studentPromises.push(createStudent(campuses))
    }
    return Promise.all(studentPromises)
  }
}

function createStudent(campuses, maxCampusesPerStudent=1) {
  //this might trip me up because I have three objects in each student info array
  const info = getRandom(STUDENT_INFO)
    return Student.create({
        firstName: info[0],
        lastName: info[1],
        fullName: info[2],
        email: info[3]
      })
      .then(actualStudent => {
        const campus = getRandom(campuses)
        return (actualStudent.setCampus(campus.id))
    })
}

function getRandom(set) {
  const index = Math.floor(Math.random() * set.length)
  return set[index]
}

let STUDENT_INFO = [
  [ 'Kaley', 'Batz', 'kaleybatz', 'Kaley_Batz43@hotmail.com' ],
  [ 'Bret', 'Hodkiewicz', 'brethodkiewicz', 'Bret_Hodkiewicz@gmail.com' ],
  [ 'Wilma', 'Senger', 'wilmasenger', 'Wilma.Senger15@yahoo.com' ],
  [ 'Dakota', 'Naa', 'dakotanaa', 'Dakota45@hotmail.com' ],
  [ 'Vinnie', 'Schroeder', 'vinnieschroeder', 'Vinnie.Schroeder20@yahoo.com' ],
  [ 'Allie', 'Runolfsson', 'allierunolfsson', 'Allie_Runolfsson85@yahoo.com' ],
  [ 'Tyree', 'Man', 'tyreeman', 'Tyree68@gmail.com' ],
  [ 'Edna', 'May', 'ednamay', 'Edna15@yahoo.com' ],
  [ 'Isabella', 'Glam', 'isabellaglam', 'Isabella22@yahoo.com' ],
  [ 'Elvis', 'Nikolaus', 'elvisnikolaus', 'Elvis.Nikolaus@yahoo.com' ],
  [ 'Stephania','Kessler', 'stephaniakessler', 'Stephania.Kessler4@yahoo.com' ],
  [ 'Autumn', 'Walker', 'autumnwalker','Autumn_Walker@hotmail.com' ],
  [ 'Jade', 'Morar', 'jademorar', 'Jade_Morar86@gmail.com' ],
  [ 'Lulu', 'Keebler', 'lulukeebler', 'Lulu_Keebler14@hotmail.com' ],
  [ 'Javonte', 'Kihn', 'javontekihn','Javonte.Kihn29@hotmail.com' ],
  [ 'Clyde', 'Schneider', 'clydeschneider', 'Clyde.Schneider@hotmail.com' ],
  [ 'Betsy', 'Gaylord', 'betsygaylord', 'Betsy.Gaylord@yahoo.com' ],
  [ 'Adriel', 'Gray', 'adrielgray', 'Adriel98@gmail.com' ],
  [ 'Dortha', 'Littel', 'dorthalittel', 'Dortha_Littel@hotmail.com' ],
  [ 'Cedrick', 'Armstrong', 'cedrickarmstrong', 'Cedrick.Armstrong96@hotmail.com' ]
  ]

let CAMPUSES = `Mesceyturn
Cafluybos
Cawhinda
Caflyria
Wualara
Vautov
Skokulea
Traahines
Bruna
Glillon
Dutheter
Daproetov
Yustrillon
Rucliri
Qetov
Nounides
Brujagawa
Scaletov
Skade
Griuq`.split('\n').map(name => name.trim())

