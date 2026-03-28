let cgpa = 4.2
// LOGICAL OPERATOR
// && and operator
// || or operator
if(cgpa>5 || cgpa<1.5){
    console.log("Invalid grade")
}
else if(cgpa>4.5 && cgpa<5){
    console.log("You are a first class student")
}else if (cgpa>3.5 && cgpa<4.5){
    console.log("You are a second class upper student")
}else if (cgpa>2.5 && cgpa<3.5){
    console.log("You are a second class lower student")
}else {
    console.log("You are a third class student")
}