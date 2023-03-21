let posts=[]
let lastactivitytime= new Date().getTime()
async function userpost(){
    await new Promise((resolve, reject) => {
            posts.push("Hello");
            resolve()
        })
    await new Promise((resolve, reject) => {
            posts.push("Hello");
            resolve()
        })
    
    await new Promise((resolve,reject)=>{
            lastactivitytime=new Date().getTime()
            resolve(console.log(posts,lastactivitytime))
    })
    await new Promise((resolve, reject) => {
        if (posts.length>0){
            posts.pop();
            lastactivitytime=new Date().getTime()
            resolve(console.log(posts,lastactivitytime))}
        else{
            reject("Error")
        }
    }) 
}
userpost()

