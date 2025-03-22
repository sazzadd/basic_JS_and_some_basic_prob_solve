// execution  Context 
function a(){
    b()
    console.log("execute function: A")
}
function b(){
    d()
    console.log("execute function: B")
}
function c(){
    console.log("execute function: C")
}
function d(){
    c()
    console.log("execute function: D")
}
a()