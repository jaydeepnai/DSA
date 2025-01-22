var MissingNumber = function (arr:number[]) {
    var arrTotal = arr.reduce(function (acc:number, cur:number) { return cur + acc; });
    var min = Math.min(...arr);
    var max = Math.max(...arr);
    var orgTotal = 0;
    for (var i = min; i <= max; i++) {
        orgTotal += i;
    }
    return orgTotal-arrTotal;
};
console.log(MissingNumber([5,6,8,9,10]));
