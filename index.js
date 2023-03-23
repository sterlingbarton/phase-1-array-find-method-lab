// code your solution here
function superbowlWin(arr){
    const result = arr.find(function(arr){
        return arr.result === 'W'
    })
    return !!result ? result.year : undefined
}



