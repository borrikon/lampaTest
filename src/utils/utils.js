export const getTotalPrice = (array) => {
    let total = 0
    array.forEach(item => total += item.prise*item.count)
    return total
}
export const filterDuplicate = (array) => {
    let duplicate = array.reduce((acc, el)=>(
            acc[el.id] = (acc[el.id] || 0)+ 1, acc
        ), {})
    return  duplicate
}
export function changeCountOfBasketProd (dupl, prod) {
    const duplItems = Object.keys(dupl)
    const prodWithoutDupl = removeDuplicates(prod, "id");
    const newArray = []
    duplItems.map((item, index)=> {

        let currentProd = prodWithoutDupl.filter(prod => prod.id === +item)
        currentProd[0].count += dupl[index+1]
        return(
            newArray.push(currentProd[0])
        )
    })
    return newArray
}
function removeDuplicates(originalArray, prop) {
    let newArray = [];
    let lookupObject  = {};
    for(let i in originalArray) {
        lookupObject[originalArray[i][prop]] = originalArray[i];
    }
    for(let i in lookupObject) {
        newArray.push(lookupObject[i]);
    }
    return newArray;
}

export function findCurrentProduct (array, id) {
    return  array.filter(item => item.id === id)[0]
}