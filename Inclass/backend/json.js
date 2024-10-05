// objects in javascript contain keys (or properties) with corresponding v

const user = {
    "first_name" : "sammy" ,
    "last_name" : "shark" ,
    "age" : 25 ,
    "followers" : 987 ,

}

console.log(user.first_name)
console.log(user.age)

console.log(user["last_name"])

user.followers = 998
console.log(user.followers)

user.location = 'Pacific Ocean'
console.log(user.location)

