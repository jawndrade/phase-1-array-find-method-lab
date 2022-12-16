// code your solution here
// function superbowlWin(record) {
//     const result = record.find(record => record.result === "W" );
//     return !!result ? result.year : undefined;
//   }

function superbowlWin(record) {
    const result = record.find(winFinder);
    return result ? result.year : undefined;
}

function winFinder(object){
    if(object.result === "W"){
        return true;
    }
    else{
        return false;
    }
}