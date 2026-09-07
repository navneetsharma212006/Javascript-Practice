users = [

    {
        name:"Navneet",
        age:89,
        isactive:false
    },
    {
        name:"Golu",
        age:89,
        isactive:false
    },
    {
        name:"yash",
        age:90,
        isactive:true
    }
]


const active = users.filter((user)=>{
   return user.isactive
}).map((user)=>{
   return user.name
})

console.log(active)