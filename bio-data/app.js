var student1 = {
    Name: "Ahmad",
    FatherName: "Imran",
    age: 19,
    id: Math.random()
}
// console.log(student1)
var student2 = {
    Name: "Hassaan",
    FatherName: "Abdul Jabbar",
    age: 19,
    id: Math.random()
}
var student3 = {
    Name: "Hassan",
    FatherName: "sadiq",
    age: 21,
    id: Math.random()
}
var student4 = {
    Name: "Raza",
    FatherName: "Rafiq",
    age: 17,
    id: Math.random()
}
var student5 = {
    Name: "Mubashir",
    FatherName: "Imran",
    age: 21,
    id: Math.random()
}

var studentList = [student1, student2, student3, student4, student5]
// console.log(studentList)

var tBody = document.getElementById("tBody")
// console.log(list)

function render() {
    for (var i = 0; i < studentList.length; i++) {
        // console.log(studentList[i])
        tBody.innerHTML +=
            `<tr>
                <td>
                ${i + 1}
                </td>
        <td>
            ${studentList[i].Name}
        </td>

        
        <td>
        ${studentList[i].FatherName}
        </td>


    <td>
    ${studentList[i].age}
    </td>

    <td>
    ${studentList[i].id}
    </td>
</tr>`
    }
}
render();




















