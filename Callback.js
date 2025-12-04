function getUserDetails(id,getUserSub){
    console.log("getting details by id",id);
    getUserSub({userroll:"123"});
}
function getUserSub(userroll,getUserMarks){
    console.log("getting subjects by rollno",userroll);
    getUserMarks({subid:"eng-1"});
}
function getUserMarks(usersubid){
    console.log("getting usermarks by subid",usersubid);
   
}
getUserDetails("456",function(userroll){
    getUserSub(userroll,function(usersubid){
        getUserMarks(usersubid)
    
    }
    )
}
)
