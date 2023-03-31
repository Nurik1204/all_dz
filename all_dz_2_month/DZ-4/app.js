const massiv = ['name', 'John', 'lastname', 'Black', 'age', '23']

let obj={}

function lala(arr){
    for(let i=0; i<arr.length; i++){
        if(i%2===0){
            obj[arr[i]]=arr[i+1]
        }
    }
}
lala(massiv)
console.log(obj);