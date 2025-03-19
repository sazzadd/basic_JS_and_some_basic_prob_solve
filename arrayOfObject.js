const persons = [
  {
    name: "Chowdhury Sazzad Hossain",
    age: 24,
    address: "Sabujbag, Patuakhali, Bangladesh",
  },
  {
    name: "Rahim Uddin",
    age: 30,
    address: "Dhaka, Bangladesh",
  },
  {
    name: "Karim Hossain",
    age: 28,
    address: "Chittagong, Bangladesh",
  },
  {
    name: "Ayesha Siddiqua",
    age: 22,
    address: "Rajshahi, Bangladesh",
  },
  {
    name: "Tariq Anwar",
    age: 35,
    address: "Khulna, Bangladesh",
  },
];
for (let i = 0; i < persons.length; i++) {
    console.log(persons[i].name)
}
persons.map((item ,index)=> {
    console.log(index,item.name)
})
