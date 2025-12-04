function getUserDetails(id) {
    return new Promise((resolve, reject) => {
         console.log("fun1called");
        resolve({ userroll: "123" });
    });
}

function getUserSub(userroll) {
    return new Promise((resolve, reject) => {
        console.log("fun2 called");
        resolve({ subid: "eng" });
    });
}

function getUserMarks(usersubid) {
    return new Promise((resolve, reject) => {
        console.log("fun3 called");
        resolve("getting user marks with subid " + usersubid);
    });
}

getUserDetails("345")
    .then(result => {
        return getUserSub(result.userroll);
    })
    .then(result => {
        return getUserMarks(result.subid);
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => console.log(error));
