var tag =   ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br']

var filterTag = {}

for ( var i = 0; i < tag.length; i++){
    var currentTeg = tag[i]
    if (filterTag[[i]]){
        console.log(filterTag[tag[i]]++)
    }else {
        console.log(filterTag[tag[i]] = 1)
    }
}

console.log(filterTag)

var sortedTags = Object.entries(filterTag).sort((a , b) => b[1] - a[1])
console.log(sortedTags)

// if(filterTag.hasOwnProperty(currentTeg)){
//     filterTag[currentTeg] += 1
// }else {
//     filterTag[currentTeg = 1]
// }
//
// console.log(filterTag)
// console.log(object.keys(filterTag).sort(function (b1, b2) {
//     return filterTag[b2] - tegObject[b1]
// }))