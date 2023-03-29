   // ДЗ (массив users)
   const users = [
    {
      id: 1,
      firstname: 'Anton',
      age: 28,
      active: true
    },
    {
      id: 2,
      firstname: 'Irina',
      age: 18,
      active: true
    },
    {
      id: 3,
      firstname: 'Olga',
      age: 32,
      active: false
    },
    {
      id: 4,
      firstname: 'Danila',
      age: 14,
      active: true
    },
    {
      id: 5,
      firstname: 'Ivan',
      age: 54,
      active: false
    }
  ]
// 1. Сформировать новый массив, в который попадут только возраст пользователей => [28, 18, 32, 14, 54]

const usersAge = users.map(el => el.age)
console.log(usersAge);

// 2. Сформировать новый массив, в который попадет информация о каждом пользователе в формате 'Name: <firstname>, Age: <age>'

const userInfos = users.map(el => `Name: ${el.firstname}, Age: ${el.age}`);

console.log(userInfos);

// 3. Сформировать новый массив, в который попадут только те пользователи, чье имя начинается на I
const filteredUsers = users.filter(el => el.firstname.startsWith('I'));

console.log(filteredUsers);



// ***
// 1. Сформировать новый массив, в который попадет информация о каждом совершеннолетнем пользователе в формате 'Name: <firstname>, Age: <age>'

 const adultUsers = users.filter(el => el.age >= 18).map(el => `Name: ${el.firstname}, Age: ${el.age}`);

 console.log(adultUsers);
  
// 2. Сформировать новый массив, в который попадут только активные и совершеннолетние пользователи
const adultActiveUsers = users.filter(el => el.active && el.age >= 18)
console.log(adultActiveUsers);

// 3. Сформировать новый массив без пользователей, чье имя начинается на букву O
const usersNoNameO = users.filter(el => !el.firstname.startsWith('O'));
console.log(usersNoNameO);

// 4. Сформировать новый массив, в который попадут только имена активных и совершеннолетних пользователей в нижнем регистре

const LowerCaseActiveAdultUsers = users.filter(el => el.active && el.age >= 18).map(el => el.firstname.toLowerCase())
console.log(LowerCaseActiveAdultUsers);

// ****
// 1. Сформировать новый массив, где пользователи будут отсортированы по возрасту (.sort())
const sortedUsers = users.sort((a, b) => a.age - b.age)
console.log(sortedUsers);

// 2. Найти сумму возрастов всех пользователей (.reduce())
const totalUsersAge = users.reduce((accumulator, el) => accumulator + el.age, 0)
console.log(totalUsersAge);