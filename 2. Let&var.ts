for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log("1st"+i)
    }, 1);
}
console.log("New loop")
for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log("2nd"+i)
    }, 1);
}