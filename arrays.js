const theArray = [1, 2, 3, 4, 5, 6, 7, 8, 9,]

function sumOfTripleEvens(evenNumber){
    return evenNumber % 2 == 0;

}

const evenArray = theArray.filter(sumOfTripleEvens)
console.log(evenArray)

function multiplyEvenNumber(theNumber){
    return theNumber * 3;
}

const multipliedEvens = evenArray.map(multiplyEvenNumber)
console.log(multipliedEvens)

const combinedTotal = multipliedEvens.reduce(
    (total, currentItem) => {
        return total * currentItem
    }, 1
)

console.log(combinedTotal)