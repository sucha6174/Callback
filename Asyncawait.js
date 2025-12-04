function getUserDetails(id){
    return new Promise((resolve, reject) => {
         setTimeout(() =>{
        resolve({userroll:"123"})
    },2000);
})
};
const myfun = async() => {
    console.log("456");
    const result = await getUserDetails("456");
    console.log(result);
    console.log("123");
    console.log("testing");
};
myfun();
