const first = ():void => console.log("1st")
const second = ():void => {setTimeout(()=>console.log("2nd"),0)}
const third = ():void => console.log("3rd")

first()
second()
third()