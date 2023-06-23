console.log("I'm ready!");

//Iteration 1: Names and Input

let hacker1 = "Agostini"
console.log("The driver's name is " + hacker1 + ".")

let hacker2 = "Cousteau"
console.log('The navigator\'s name is ' + hacker2 + '.')


//Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  }
  
  else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
    
  }

  else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  }


//Iteration 3: Loops

let newHackerName = ""
for(let i=0; i < hacker1.length; i++) {
  newHackerName += hacker1[i].toUpperCase() + " "
}
console.log(newHackerName.trim())

let newHacker2Name = "";
for(let i = hacker2.length - 1; i >= 0; i--) {
  newHacker2Name += hacker2[i]
}
console.log(newHacker2Name)


console.log(hacker1.toUpperCase().split("").join(' '))

console.log(hacker2.split("").reverse('').join(''))

if (hacker1 > hacker2) {
  console.log("The driver's name goes first.")
}
else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.")
}
else {
  console.log("What?! You both have the same name?")
} 
//console.log(names.sort());

/*function compareNames(a, b) {
  if (a < b) {
    return ("The driver's name goes first.")
  } 
  else if (a > b) {
    return ("Yo, the navigator goes first, definitely.")
  }

  return ("What?! You both have the same name?")
}

console.log(compareNames(names))*/


//bonus 1

let longtext = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum tincidunt maximus. Nulla dignissim ultricies nisi, nec viverra felis consequat sed. Nunc quis tempus velit, ut placerat orci. Morbi varius dolor vel tincidunt imperdiet. Morbi eget tellus fringilla, finibus nisl vel, hendrerit magna. Nunc in laoreet odio, sed sollicitudin magna. Fusce feugiat dui et est tristique, non dignissim ante pretium. Donec volutpat mauris nisl, nec iaculis leo maximus nec. Vestibulum purus metus, lobortis id faucibus non, semper eu ipsum. Integer condimentum ex sed hendrerit vehicula. Integer vel cursus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula euismod sapien, sit amet imperdiet erat tempus eu. In luctus convallis interdum. Mauris ante ex, tempor eu consequat in, rhoncus vel mi. Curabitur dictum orci urna, vel imperdiet risus suscipit dapibus. Quisque suscipit eros in arcu lobortis, vitae ultrices tortor luctus. Pellentesque laoreet massa odio, sed commodo nulla tempor sed. Morbi quis magna sagittis, tincidunt leo quis, condimentum lorem. Pellentesque eleifend non ex vel dictum. Pellentesque ligula nunc, posuere nec rhoncus vel, viverra eget justo. Sed et sapien quis magna cursus mattis sed eu tortor. Morbi sollicitudin mauris nec ipsum finibus, eget consequat tortor gravida. Morbi congue tellus id quam feugiat, nec euismod eros accumsan. Pellentesque vehicula sapien eros, sagittis pharetra purus dignissim vel. Fusce eleifend consequat lacinia. Sed iaculis enim sit amet euismod congue. Praesent egestas quam fringilla euismod hendrerit. Aliquam vestibulum fringilla velit non pretium. Sed sit amet ultrices est. Duis aliquam mattis massa ullamcorper finibus. Sed bibendum sollicitudin justo, accumsan auctor justo pellentesque quis. Nulla convallis, odio at pretium tincidunt, tellus nisi ultricies mi, non volutpat risus ex ut tortor. Cras tortor nisl, auctor at augue sit amet, viverra scelerisque diam. Duis lacus lorem, dictum et condimentum eget, hendrerit in urna. Sed et ligula nibh. Nam id diam elementum orci mollis aliquet. Curabitur a nulla magna. Aliquam tempor eget eros vel lacinia."

console.log(longtext.split(" ").length)

console.log(longtext.split("et").length-1)


//bonus 2




function palindrome (text) {
    let lowerText = ""
    for(let i=0; i < text.length; i++) {
      lowerText += text[i].toLowerCase()
    }
    console.log(lowerText)

    let reverseText = "";
    for(let i = lowerText.length - 1; i >= 0; i--) {
      reverseText += lowerText[i]
    }
    console.log(reverseText)
        
  
if (lowerText === reverseText){
return text + " is a palindrome"
}

else {return text + " isn't a palindrome"}
}


console.log(palindrome("thomas"))

  





