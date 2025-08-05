const theArray = [1, 2, 3, 4, 5, 6, 7, 8, 9,]

function sumOfTripleEvens(evenNumber){
    return evenNumber % 2 == 0;

}

const evenArray = theArray.filter(sumOfTripleEvens)
console.log(evenArray)


