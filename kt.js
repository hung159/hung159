//1
// let input = prompt("nhap vao mot chuoi: ");
// let  newstr="";
// for(let i=input.length-1;i>=0;i--)
// {
//     newstr+=input[i];
// }
// console.log(newstr);

//2

// let str = (prompt("Enter a string"));
// let arr = str.split(' ');
// for (let i = 0; i < str.length; i++) {
//     console.log(str[0].toUpperCase().concat(str[i]));
// }


//3
// function cut(arr) {
//     var newArr = []
//     for (var i = 0; i < arr.length; i++) {
//       if (newArr.indexOf(arr[i]) === -1) {
//         newArr.push(arr[i])
//       }
//     }
//     return newArr
//   }
// console.log(cut([1,2,3,3,4,5,4,4,4,5,5]));


//4
// const mindX = [
// {
//     id: 1,
//     name : 'Hùng',
//     age : 18,
//     salary : '2000$' ,
//     service : 'Giám đốc',
// },
// {
//     id: 2,
//     name : 'Độ',
//     age : 35,
//     salary : '8 triệu' ,
//     service : 'streamer',
// },
// {
//     id: 3,
//     name : 'Quang' ,
//     age : 24,
//     salary : 'Empty' ,
//     service : 'Bảo vệ',
// },

// ];
// let isLoop = true;
// while (isLoop) {
//     let input = prompt("Enter read/creat/update/delete");
//     if (input === "creat") {
//         let name = prompt("Enter your name");
//         let age = prompt("Enter your age");
//         let salary = prompt("Enter your salary");
//         let service = prompt("Enter your service");
//         let id = phoneList.length + 1;

//         let newObj = {
//             id : id,
//             name : name,
//             age : age,
//             salary : salary,
//             service : service,
//         }
//         phoneList.push(newObj);
//     }
//     else if (input === "read") {
//         for (let i = 0; i < mindX.length; i++) {
//             alert(`${mindX[i].id} --- ${mindX[i].name} --- ${mindX[i].age} --- ${mindX[i].salary} --- ${mindX[i].service}`)
//         }
//     }
//     else if (input === "update") {
//         let idInput = prompt("Enter Id");
//         if (idInput < 0 && idInput >=mindX.length ) {
//             alert("Not found");
//         }
//         else{
//             let newName = prompt("Enter new name");
//             let newAge = prompt("Enter new age");
//             let newSalary = prompt("Enter new salary");
//             let newService = prompt("Enter new service");
//                 mindX[idInput].name = newName;
//                 mindX[idInput].age = newAge;
//                 mindX[idInput].salary = newSalary;
//                 mindX[idInput].service = newService;
//         }
//     }
//     else if (input === "delete") {
//         let idInput = prompt("Enter Id");
//         if (idInput < 0 && idInput >= mindX.length ) {
//             alert("Not found");
//         }
//         else{
//             mindX.splice(idInput,1);
//         }
//     }
//     else if (input === "else") {
//         isLoop = false;
//     }
//     else{
//         console.log("Nhập lại dùm");
//     }
// }   


//5
// let ngay = prompt("Nhập ngay");
// let thang = prompt("Nhập tháng");
// let nam = prompt("Nhập nam");

//     switch (thang){
//         case 1:
//         case 3:
//         case 5:
//         case 7:
//         case 8:
//         case 10:
//          {if (ngay > 31) {
//                 ngay -= 31;
//                 thang++;
//             }
//             break;
//         }
//         case 12: 
//         {if (ngay > 31) {
//             ngay -= 31;
//             thang = 1;
//             nam++;
//         }
//         break;
//     }
//         case 2: 
//             {if (ngay > 28) {
//                 ngay -= 31;
//                 thang++;
//             }
//             break;
//         }
//         case 4:
//         case 6:
//         case 9:
//         case 11:
//             {if (ngay > 30) {
//                 ngay -= 30;
//                 thang++;
//             }
//             break;
//         }
//         default:
//             alert(`Kiểm tra lại dùm`);
//     }
// alert(`${ngay} ${thang} ${nam}`);








