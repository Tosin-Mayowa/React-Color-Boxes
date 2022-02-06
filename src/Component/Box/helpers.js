function hexColor(arr,num){
let hxColor='#';
for(let i=0; i<num; i++){
    let rand=Math.floor(Math.random()*arr.length);
    hxColor +=arr[rand];
}
return hxColor;

}

export {hexColor};