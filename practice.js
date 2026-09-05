const apiResponse = [

    {
        name :"Navneet",
        age:89
    },

    {
        name :"Sharma",
        age:67
    },
    

    {
        name :"tinku",
        age:56
    },
    {
        name :"billu",
        age:657
    }
]
totalage = 0
const result = apiResponse.reduce((user)=>{
    totalage += user.age
    return totalage
})

console.log(result)