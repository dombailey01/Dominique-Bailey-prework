const studentlist = array["Jessica", "Robert", "Emily"];

let counter=4;

while(counter<6){
    let name = prompt("Enter student name");
    studentlist[counter] = name;
    counter++;
}

for (let i = 0; i < studentlist.length; i++){
    const student = studentlist[i];
    console.log(student);
}