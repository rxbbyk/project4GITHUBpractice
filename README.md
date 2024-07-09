# project4GITHUBpractice
a repository for project 4 github submission

using VSCode terminal, i am copy pasting the code from the zyBooks Labs 7.15 to 8.19, going in order and committing each file to this GitHub repository
created folders for the labs 8.15 to 8.19 because those labs had more than just a JS file, labs 7.15 to 7.22 did not have more than a JS file so those are without a folder and just the JS file alone 

OVERVIEW FOR ALL LABS WITHIN REPOSITORY
7.15 LAB: Complete the drawTriangle() function in index.js. The function should draw a triangle with asterisks (*) based on the triangleSize parameter.

7.17 LAB: Complete the sortEvens() function, which has a single numArray parameter containing an array of integers. The function should create a new array containing only the even integers in numArray. Then the function should sort the array of even integers and return the sorted array.

Ex: The call sortEvents([4, 2, 9, 1, 8]) should return the array [2, 4, 8].

sortEvens() should return an empty array if no even numbers exist in the numArray parameter.

Ex: The call sortEvens([3, 1, 95]) should return [].

7.18 LAB: Modify the game object in index.js:

- Add two properties: lives - initially 3, and coins - initially 0.
- Add a getter called points that returns coins * 10.
- Add a playerDies() method that subtracts 1 from lives if lives is greater than 0.
- Add a newGame() method that sets lives to 3 and coins to 0.

7.19 LAB: Write the function calcWordFrequencies() that has a single words parameter. calcWordFrequencies() is called with a string argument containing a list of words separated by spaces. The function should output those words and their frequencies to the console.

7.20 LAB: Complete the printSum() function in index.js. The function has x and y parameters, which are assigned with strings when printSum() is called. If the strings can be converted into numbers, printSum() should output a message with the numbers' sum to the console.

Ex: printSum("3", "6") outputs the sum of 3 + 6 to the console:

Sum is 9.

If one of the arguments is not a number, then printSum() should output which argument is not a number.

Ex: printSum("hello", "6") outputs:

'hello' is not a number.

If both arguments are not numbers, printSum() should indicate so.

Ex: printSum("hello", "hi") outputs:

'hello' and 'hi' are not numbers.


7.21 LAB: A triangle's three vertices can be defined with three (x, y) coordinates. Ex: The figure below shows a triangle with vertices (1, 0), (2, 4), and (4, 3). Write two functions: trianglePerimeter() and triangleArea(). Both functions have six integer parameters representing the coordinates of a triangle's three vertices.

7.22 LAB: Complete the isStrongPassword() function that has a single password parameter. The function should return true only if all the following conditions are true:

- The password is at least 8 characters long.
- The password does not contain the string "password".
- The password contains at least one uppercase character.
- The password contains at least one number.
- The password contains at least one special character.
- The password contains repeat character or number sequences (such as "1111" or "bbbb") of a length four or less.
- If any of the above conditions are false, isStrongPassword() should return false.


LABS BELOW CONTAIN MULTIPLE FILES SO FOLDERS WERE CREATED FOR EACH OF THEM
8.14 LAB: In this lab, you will write three JavaScript functions to generate a bar graph of letter grades from a distribution of scores, Implement the parseScores() function to take a space-separated string of scores as an argument and return an array of score strings. Each score is a number in the range [0, 100]. Implement the buildDistributionArray() function to take an array of scores, built by parseScores(), as an argument. The function should return a grade distribution array of length 5.

The function should loop through the scores array and tally up the number of A, B, C, D, and F scores using the standard scoring system (90 and above = A, 80-89 = B, 70-79 = C, 60-69 = D, 59 and below = F). The grade totals should be stored in a distribution array where the number of As is the first number, number of Bs is the second number, etc. Implement the setTableContent() function to take a space-separated string of scores as an argument. setTableContent() should call parseScores() and buildDistributionArray() and produce a grade distribution graph by setting the table row's inner HTML.

The table's first row (id="first-row") should use a <div> for each bar. Each bar gains 10 pixels in height per grade occurrence. Ex: If 3 As exist in the distribution array, then the A bar's <div> height should be 3 * 10px = 30px.

8.15 LAB: In this lab, you will implement a temperature converter in JavaScript. The user may type a temperature in either the Celsius or Fahrenheit textbox and press Convert to convert the temperature. An image displays based on the converted temperature.

8.16 LAB: In this lab, you will implement a Tic-Tac-Toe game with JavaScript. The human is X, and the computer is O. A "New game" button starts a new game

8.17 LAB: In this lab, you will use a web API to fetch and display quotes on a selected topic.

8.18 LAB: In this lab, you will use a JavaScript timer to animate the movement of a heart image to the location where the mouse clicks, as shown below.

8.19 LAB: In this lab, you will implement a "to-do" list in JavaScript. The user can type a task into the text box and click Add to add the task to the task list. Clicking a task's ✖ button removes the task from the list.

