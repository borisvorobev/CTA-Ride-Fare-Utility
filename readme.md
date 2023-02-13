# CTA Ride Fare Utility 
---
Run `npm install` if you want to use integrated tests (Jest).

### Run The App
---
To run the application, you can use the following command:
`node index.js`
This will start the application and display the prompt for entering the fare amount and Gaavo pieces. The user can enter the Gaavo pieces in the following format: `7 1 4 6`.
The output of the application will either be the combination of Gaavo pieces that add up to the fare or "You cannot make the fare" if no combination of pieces adds up to the fare.

### To run Test
`npm install` to install dev dependencies - Jest
`npm jest`

### Solution
---
The problem can be solved using dynamic programming. The algorithm is based on finding all the possible combinations of pieces which add up to the fare. To make this process more efficient, we can use memoization, which is caching the results of expensive function calls and returning the cached result when the same inputs occur again. This approach can be implemented using the concept of recursion.

I wrote a function `findGaavoCoinsRec` that takes two parameters, the `fare` amount and an array of `pieces`. In the function, we will loop through all the pieces and check if the current piece is equal to the fare, if yes we return an array containing only that piece. If the current piece is less than the fare, we subtract the current piece from the fare and recursively call the function with the remaining fare and the remaining pieces, excluding the current piece. We store the result of each call in a cache so that we don't recalculate the result for the same input. If no combination of pieces adds up to the fare, we return a message "You cannot make the fare".

This utility application has been developed using Node.js, which will allow the user to enter the `fare` and the `pieces` they have, and it will output the combination of pieces that add up to the fare or a message "You cannot make the fare".