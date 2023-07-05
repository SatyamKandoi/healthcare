// What is a Callback funcion Eplain 

function modifyArray(arr,callback){
    arr.push(10);
    callback();
}
var arr=[1,2,3,4,5];

modifyArray(arr,function(){
    console.log("array has been modified ",arr)
})