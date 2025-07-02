// how can i make a string in javascript
// let a = "tanveer";
// let b = "alam";
// let c = `ansari`;
// console.log("mera naam" + " " + a + " " + b + " " + c + " " + "hai");
// console.log('mera naam' + ' ' + a + ' ' + b + ' ' + c + ' ' + 'hai');
// console.log(`mera naam ${a} ${b} ${c} hai`);


// how to create string using string constructor
// const a = new String("Tanveer Alam Ansari");
// console.log(a);
// console.log(typeof(a));


// check length of string
// const b = "Tanveer Alam Ansari";
// console.log(b.length);

// how to take space in a string
// console.log("Tanveer \n Alam" )


// how to find index of a string
// const c = "Tanveer Alam Ansari";
// console.log(c.indexOf("Alam")); // 8
// console.log(c.indexOf("Tanveer")); // 0


// how to find position of a string
// const a = "Tanveer Alam Ansari";
// console.log(a[0]); // T
// console.log(a[1]); // a
// console.log(a[2]); // n
// console.log(a[3]); // v
// console.log(a[4]); // e
// console.log(a[5]); // e
// console.log(a[6]); // r
// console.log(a[7]); // " " (space)
// console.log(a[8]); // A
// console.log(a[9]); // l
// console.log(a[10]); // a
// console.log(a[11]); // m
// console.log(a[12]); // " " (space)
// console.log(a[13]); // A
// console.log(a[14]); // n
// console.log(a[15]); // s
// console.log(a[16]); // a
// console.log(a[17]); // r
// console.log(a[18]); // i
// console.log(d[19]); // undefined (out of bounds)



 // methods of string
// const a = "Tanveer Alam Ansari";
// console.log(a.toUpperCase()); // TANVEER ALAM ANSARI 
// console.log(a.toLowerCase()); // tanveer alam ansari
// console.log(a.slice(0, 7)); // Tanveer   
// console.log(a.slice(8, 12)); // Alam
// console.log(a.slice(13, 19)); // Ansari
// console.log(a.replace("Tanveer", "TANVEER")); // TANVEER Alam Ansari
// console.log(a.replace("Alam", "ALAM")); // Tanveer ALAM Ansari
// console.log(a.replace("Ansari", "ANSARI")); // Tanveer Alam ANSARI
// console.log(a.replace("Tanveer", "TANVEER").replace("Alam", "ALAM").replace("Ansari", "ANSARI")); // TANVEER ALAM ANSARI
// console.log(a.split(" ")); // [ 'Tanveer', 'Alam', 'Ansari' ]
// console.log(a.split(" ")[0]); // Tanveer
// console.log(a.split(" ")[1]); // Alam
// console.log(a.split(" ")[2]); // Ansari
// console.log(a.split(" ")[0].toUpperCase()); // TANVEER
// console.log(a.split(" ")[1].toUpperCase()); // ALAM
// console.log(a.split(" ")[2].toUpperCase()); // ANSARI

// how to check if a string starts with a specific character
// const a = "Tanveer Alam Ansari";
// console.log(a.startsWith("T")); // true
// console.log(a.startsWith("t")); // false 
// console.log(a.startsWith("Tanveer")); // true
// console.log(a.startsWith("tanveer")); // false   
// console.log(a.startsWith("Alam")); // false
// console.log(a.startsWith("Ansari")); // false
// console.log(a.startsWith("Tanveer Alam")); // true
// console.log(a.startsWith("Tanveer Alam Ansari")); // true
// console.log(a.startsWith("Tanveer Alam Ansari ")); // false (extra space at the end)
// console.log(a.startsWith("Tanveer Alam Ansari", 0)); // true
// console.log(a.startsWith("Tanveer Alam Ansari", 1)); // false (starts from index 1)  
// console.log(a.startsWith("Tanveer Alam Ansari", 2)); // false (starts from index 2)


// how to check if a string ends with a specific character
// const a = "Tanveer Alam Ansari";
// console.log(a.endsWith("i")); // true
// console.log(a.endsWith("r")); // false
// console.log(a.endsWith("Tanveer")); // false
// console.log(a.endsWith("Alam")); // false
// console.log(a.endsWith("Ansari")); // true
// console.log(a.endsWith("Tanveer Alam")); // false
// console.log(a.endsWith("Tanveer Alam Ansari")); // true
// console.log(a.endsWith("Tanveer Alam Ansari ")); // false (extra space at the end)
// console.log(a.endsWith("Tanveer Alam Ansari", 19)); // true (length of the string)
// console.log(a.endsWith("Tanveer Alam Ansari", 18)); // false (length of the string - 1)
// console.log(a.endsWith("Tanveer Alam Ansari", 1)); // false (length of the string - 1)


//Q=1=> create a program to take a full name from user and generate a username start with @ follow by their full name and end with underscore followed by the length of full name

// let fullName = prompt("Enter your full name:");
// let userName = `@${fullName.trim().replaceAll(" ","")}_${fullName.length}`
// const b = alert(`Your name is ${fullName} and your username is ${userName}`); 
// console.log(b)



