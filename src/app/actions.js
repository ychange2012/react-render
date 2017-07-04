export function addyear(dispatch,value){
	console.log("action获取的的值："+value);
    return{
        type:"add",
        value:"value"
    }
}

export function subyear(value){
	console.log("action获取的的值："+value);
    return{
        type:"sub",
        value:"value"
    }
}
