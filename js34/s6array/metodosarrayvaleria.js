



 /* con el array numbers:
    1.- Obtener la suma total de todos los números que estan dentro del array
    2.- Necesitamos obtener una nueva lista con únicamente los números que sean pares
    3.- Necesitamos obtener una nueva lista con únicamente los números que sean nones*/
    /* con el array people:
    1.- Necesitamos una nueva lista con únicamente los nombres de las personas 
    2.- Necesitamos una nueva lista que tenga los nombres completos de las personas/*

  /*con el array users:
    1.- Necesito una nueva lista, que contenga únicamente los nombres completos de los usuarios
    2.- Necesito saber la edad promedio de los usuarios
    3.- Necesito poder obtener una nueva lista de los usuarios con base en su país
    4.- Necesito obtener una nueva lista con base en un hobbie ( includes )
    5.- Necesito una lista que contenga los diferentes hobbies de nuestros usuarios sin repetir*/

let numbers = [12, 45, 7, 33, 22, 14, 49, 27, 5, 38];
    const addNumbers=(numbers) =>{
        let addedNumbers=0
        for(i=0;i<numbers.length;i++) {
            numberToAdd=numbers[i]
            addedNumbers+=(numberToAdd)
        }
        return addedNumbers
    }
console.log(addNumbers(numbers))

let emptyEvenNumbers=[]
const evenNumbersList= (evenNumbers) =>{
    for(i=0;i<numbers.length;i++) {
        let number=numbers[i]
        evenNumbers=number%2==0
        if (evenNumbers) {
            evenNumbersInList=emptyEvenNumbers.push(number)
        }
    }
    return evenNumbersInList
}
console.log (evenNumbersList(emptyEvenNumbers))
console.log (emptyEvenNumbers)

let people = [
    ["Juan", "Gómez", "Martínez"],
    ["Ana", "Pérez", "López"],
    ["Carlos", "Rodríguez", "García"],
    ["María", "Fernández", "Sánchez"],
    ["Luis", "Hernández", "Torres"],
  ];
  let emptyNameList=[]
  let textPeople=people.join(" ")
  const peopleFullNameList= () =>{
  let fullName=emptyNameList.push(textPeople)
  return fullName
  }
  console.log(peopleFullNameList(emptyNameList))
  console.log(emptyNameList)

  let emptyFirstNameList=[]


  let users = [
    {
      name: "Juan",
      lastname: "Pérez",
      age: 25,
      hobbies: ["leer", "correr"],
      country: "México",
    },
    {
      name: "Ana",
      lastname: "García",
      age: 30,
      hobbies: ["viajar", "pintar", "nadar"],
      country: "Argentina",
    },
    {
      name: "Carlos",
      lastname: "López",
      age: 45,
      hobbies: ["cantar"],
      country: "Chile",
    },
    {
      name: "María",
      lastname: "Fernández",
      age: 22,
      hobbies: ["leer", "correr", "bailar"],
      country: "Colombia",
    },
    {
      name: "Luis",
      lastname: "Gómez",
      age: 35,
      hobbies: ["jugar fútbol", "viajar"],
      country: "México",
    },
    {
      name: "Sofía",
      lastname: "Rodríguez",
      age: 28,
      hobbies: ["cocinar", "leer"],
      country: "Chile",
    },
    {
      name: "José",
      lastname: "Sánchez",
      age: 40,
      hobbies: ["nadar", "escribir"],
      country: "Argentina",
    },
    {
      name: "Laura",
      lastname: "Martínez",
      age: 26,
      hobbies: ["pintar", "cantar"],
      country: "México",
    },
    {
      name: "Miguel",
      lastname: "Hernández",
      age: 33,
      hobbies: ["correr", "jugar fútbol"],
      country: "Colombia",
    },
    {
      name: "Lucía",
      lastname: "Torres",
      age: 29,
      hobbies: ["viajar", "bailar"],
      country: "Chile",
    },
  ];
let emptyFullNameList=[]
const findNameAndLastname=(users) =>{
 
    for (i=0;i<users.length;i++) {
        user=users[i]
        userName=user.name
        userLastName=user.lastname
        fullUserName=`${userName}" "${userLastName}`
        if (fullUserName)
        listWithNames=emptyFullNameList.push(fullUserName)}
        return listWithNames  
    }
        
console.log(findNameAndLastname(users))
console.log(emptyFullNameList)

const findAverageAge=() =>{
    let average=0
    for (i=0;i<users.length;i++) {
    user=users[i]
    userAge=user.age
    if (userAge) {average+=(userAge/users.length)
    }
    }
    return average
}

console.log (findAverageAge(users))

const findCountry =(user,findSameCountry) => {
    
let emptyCountryList=[]
    for (i=0;i<users.length;i++) {
        user=users[i]
        userCountry=user.country
        if (userCountry.toLowerCase()===findSameCountry.toLowerCase())
        {matchCountry=emptyCountryList.push(user)}

        }
        return emptyCountryList
    }
  chileUsers= findCountry(users,"chile")
    console.log(chileUsers)

    const filterByCountry = (dataArray, countryToFilter) => {
        let result = [];
        for (let i = 0; i < dataArray.length; i++) {
          let user = dataArray[i]; /*{
            name: "Lucía",
            lastname: "Torres",
            age: 29,
            hobbies: ["viajar", "bailar"],
            country: "Chile",
          }*/
          if (user.country.toLowerCase() === countryToFilter.toLowerCase()) {
            result.push(user);
          }
        }
        return result;
      };
      let mexicanUsers = filterByCountry (users,"méxico")
      console.log(mexicanUsers)
    
      const findHobbie =(user,findSameHobbie) => {
        let emptyHobbieList=[]
            for (i=0;i<users.length;i++) {
                user=users[i]
                userHobbie=user.hobbies
            for (j=0;j<userHobbie.length;j++)
                elementInHobbie=userHobbie[j]
                if (elementInHobbie!==findSameHobbie)
                {matchHobbie=emptyHobbieList.push(elementInHobbie)}
        
                }
                return emptyHobbieList
            }
          hobbieList= findHobbie(users)
            console.log(hobbieList)
        