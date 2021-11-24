// Format phone number:

// Retrieve phone number & split it into an array of individual digits
let phone = document.getElementById("phone").innerHTML;
let phoneSplitArray = phone.split('');

// combine digits from array to form 3 parts of a phone number (area code, 3 digits, then 4 digits)
let phonePart1 = phoneSplitArray[0] + phoneSplitArray[1] + phoneSplitArray[2];
let phonePart2 = phoneSplitArray[3] + phoneSplitArray[4] + phoneSplitArray[5];
let phonePart3 = phoneSplitArray[6] + phoneSplitArray[7] + phoneSplitArray[8] + phoneSplitArray[9];

// display in phone number format
document.getElementById("phone").innerHTML = `(${phonePart1})${phonePart2}-${phonePart3}`;

// capitalize first letter of returned category
let category = document.getElementById("category-span").innerHTML;
let categoryCapitalized = category.charAt(0).toUpperCase() + category.slice(1);
document.getElementById("category-span").innerHTML = categoryCapitalized;