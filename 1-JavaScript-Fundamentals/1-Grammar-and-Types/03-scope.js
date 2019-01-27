// Global scope
var outside = "outside"
{
    // local scope
    var inside = "inside"
    console.log(inside)
}

console.log(outside)
console.log(inside)
