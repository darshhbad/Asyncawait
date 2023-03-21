console.log('person1:showsticket')
console.log('person2:showsticket')

const premovie= async() => {
    const bringticket=new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve('ticket')
    },0)
})


const getpopcorn=bringticket.then((t)=>{
    return new Promise((resolve,reject)=>{
        resolve(`popcorn`)
    })
})

const butterpopcorn=getpopcorn.then((t)=>{
    return new Promise((resolve,reject)=>{
        resolve(`butter`)
    })
})

const getcolddrink=butterpopcorn.then((t)=>{
    return new Promise((resolve,reject)=>{
        resolve(`colddrink`)
    })
})

let ticket = await bringticket;

    console.log('husband: we should go in')
    console.log('wife: no i am hungry')

let popcorn=await Promise.all([getpopcorn,getcolddrink,butterpopcorn]);

    console.log("popcorn,butter,coke")


return ticket
}

premovie().then((m)=>console.log('person3:shows'+m))

console.log('person4:showsticket')
console.log('person5:showsticket')