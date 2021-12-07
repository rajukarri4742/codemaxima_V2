import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public listOfTopics = [
    {
      "name": "Introduction",
      "listOfPrograms": [
        {"value":"Java Installation","Link":""},
        {"value":"Introduction","Link":""},
        {"value":"Data Types","Link":""},
        {"value":"Arthematic Operators","Link":""},
        {"value":"Relational Operators","Link":""},
        {"value":"Logical Operators","Link":""},
        {"value":"Assignment Operators","Link":""},
        {"value":"Control Statements","Link":""},
        {"value":"Flow/Iterative Statements","Link":""},
      ],
    },
    {
      "name": "Basic Problems",
      "listOfPrograms": [
        {"value":"Even or Odd","Link":"basic_program/Even_or_Odd"},
        {"value":"Smaller Number","Link":"basic_program/smaller_number"},
        {"value":"Grater Number","Link":"basic_program/grater_number"},
        {"value":"Reverse of Number","Link":"basic_program/Reverse_of_number"},
        {"value":"Palindrome","Link":"basic_program/Palindrome"},
        {"value":"Armstrong Number","Link":"basic_program/Armstrong_number"},
        {"value":"Neon Number","Link":"basic_program/Neon_number"},
        {"value":"SPY Number","Link":"basic_program/SPY_number"},
        {"value":"Automorphic Number","Link":"basic_program/Automorphic_number"}, 
        {"value":"Factorial","Link":"basic_program/Factorial"},
        {"value":"Perfect Number","Link":"basic_program/Perfect_number"},
        {"value":"Strong Number","Link":"basic_program/Strong_Number"},
        {"value":"Prime Number","Link":"basic_program/Prime_number"},
        {"value":"Fibonacci Series","Link":"basic_program/Fibonacci_Series"},
        {"value":"Pronic Number","Link":"basic_program/Pronic_Number"},
        {"value":"Sunny Number","Link":"basic_program/Sunny_Number"},
        {"value":"Trimorphic Number","Link":"basic_program/Trimorphic_Number"},
        {"value":"Weighted Sum of Digits","Link":"basic_program/Weighted_Sum_of_Digits"}],
    },
    {
      "name": "Patterns",
      "listOfPrograms": [

        {"value":"Pattern 1","Link":"pattren/pattren1"},
        {"value":"Pattern 2","Link":"pattren/pattren2"},
        {"value":"Pattern 3","Link":"pattren/pattren3"},
        {"value":"Pattern 4","Link":"pattren/pattren4"},
        {"value":"Pattern 5","Link":"pattren/pattren5"},
        {"value":"Pattern 6","Link":"pattren/pattren6"},
        {"value":"Pattern 7","Link":"pattren/pattren7"},
        {"value":"Pattern 8","Link":"pattren/pattren8"},
        {"value":"Pattern 9","Link":"pattren/pattren9"},
        {"value":"Pattern 10","Link":"pattren/pattren10"},
        {"value":"Pattern 11","Link":"pattren/pattren11"},
        {"value":"Pattern 12","Link":"pattren/pattren12"},
        {"value":"Pattern 13","Link":"pattren/pattren13"},
        {"value":"Pattern 14","Link":"pattren/pattren14"},
        {"value":"Pattern 15","Link":"pattren/pattren15"}
      ],
    },
    {
      "name": "Methods",
      "listOfPrograms": [

        {"value":"Introduction","Link":"methods/introduction"},
        {"value":"Example","Link":"methods/example"},
        {"value":"EvenOdd(Method)","Link":"methods/evenoddmethod"},
        {"value":"Reverse of Number(Method)","Link":"methods/revnumbermethod"},
        {"value":"Palindrom or not(Method)","Link":"methods/palindromemethod"},
        {"value":"Method Overloading","Link":"methods/methodoverloading"}
      ],
    },
    {
      "name": "Arrays",
      "listOfPrograms": [

        {"value":"Introduction","Link": "arrays/introductionarray"},
        {"value":"Static Array","Link": "arrays/static"},
        {"value":"Dynamic Array","Link": "arrays/dynamic"},
        {"value":"Read and Print","Link": "arrays/readandprint"},
        {"value":"Find Element","Link": "arrays/findelement"},
        {"value":"Key Count","Link": "arrays/keycount"},
        {"value":"Find Key Positions","Link": "arrays/findkeypositions"},
        {"value":"Max of Array","Link": "arrays/maxofarray"},
        {"value":"Min of Array","Link": "arrays/minofarray"},
        {"value":"Reverse of Array","Link": "arrays/reverseofarray"},
        {"value":"Second Max","Link": "arrays/secondmax"},
        {"value":"Count Primes in Array","Link": "arrays/countprimes"},
        {"value":"Reverse Each Element","Link": "arrays/reverseeachelement"},
        {"value":"Exclude Value","Link": "arrays/excludenumber"},
        {"value":"Each Number Count","Link": "arrays/eachnumbercount"},  
        {"value":"Number of Pairs","Link": "arrays/numberofpairs"},       
        {"value":"Super Array","Link": "arrays/superarray"}

      ],
    },
    {
      "name": "Wrapper Classes",
      "listOfPrograms": [],
    },
    {
      "name": "Strings",
      "listOfPrograms": [
        {"value":"Introduction","Link": "strings/stringintro"},
        {"value":"String Pool Memory","Link": "strings/stringpool"},
        {"value":"Different Strings","Link": "strings/diffstrings"},
        {"value":"Find Letter","Link": "strings/findletter"},
        {"value":"Reverse Of String","Link": "strings/reverse"},
        {"value":"Palindrome","Link": "strings/palindromestring"},
        {"value":"Swap First Last Letters","Link": "strings/swapfirstlast"},
        {"value":"Vowels Count","Link": "strings/vowels"},
        {"value":"Vowel and Consonents Count","Link": "strings/vowelsconsonents"},
        {"value":"Different Characters","Link": "strings/diffchars"},
        {"value":"Special String","Link": "strings/specialstring"}
      ],
    },
    
    {
      "name": "Multi Dimention Arrays",
      "listOfPrograms": [],
    },
    {
      "name": "Collections",
      "listOfPrograms": [],
    },
    {
      "name": "Hash Map",
      "listOfPrograms": [],
    },
    {
      "name": "Keywords",
      "listOfPrograms": [],
    },
    {
      "name": "Classes & Objects",
      "listOfPrograms": [],
    },
    {
      "name": "Classes Relations",
      "listOfPrograms": [],
    },
    {
      "name": "Management Systems",
      "listOfPrograms": [],
    },
    {
      "name": "Exceptions",
      "listOfPrograms": [],
    },
    {
      "name": "File Handling",
      "listOfPrograms": [],
    },
    {
      "name": "Object Oriented Concepts",
      "listOfPrograms": [],
    },
    {
      "name": "Multi Threading",
      "listOfPrograms": [],
    }
  ];


  public topis = [
    {
      "name": "Even or Odd",
      "problemStatement": ["A number which is divisible by 2 and generates a remainder of 0 is called an even   number.","A number which is divisible by 2 and generates a remainder of 0 is called an even number.","E.g.: - (10%2------we need to tell number is odd number or even number."," 2) 10 (5 ","   10"," Remainder  So, 10 is an even number","  E.g.: - (11%2------we need to tell number is odd number or even number."," 2) 11 (5","   10 "," Remainder  So, 11 is an odd number"],
      "inputOutput": ["Input:"," 23"," 44 ","Output:"," odd"," even "],
      "program":"/assets/even_odd.JPG"
    },

    {
      "name": "Reverse of number",
      "problemStatement": ["Display the input number in reverse order as a number."," Example 1: if your program reads the value 123456 from the keyboard it should print to the screen the value 654321."," Example 2:  if your program reads the value 123400 from the keyboard it should print to the screen the value 4321 (NOT 004321)."],
      "inputOutput": ["Input:"," 12345"," 56789","Output:"," 54321 "," 98765  "],
      "program": "/assets/img/reverse.JPG"
    },
    {
      "name": "Palindrome",
      "problemStatement": ["A palindrome number is a number that is same after reverse. In simple words, Palindrome is the reverse of a number is equal to its original number"],
      "inputOutput": ["Input:", "36523", "124421", "Output:", "palindrome", "not palindrome"],
      "program": "/assets/img/palindrome.JPG"
    },

    {
      "name": "Armstrong Number",
      "problemStatement": ["An Armstrong number is a number which equals to the sum of the cubes of its individual digits.", "For example:", "153 is an Armstrong number as", "153 = (1)3 + (5)3 + (3)3 ", "   = 1 + 125 + 27=153.","Here, we are adding cubes of individual digits which is equal to its original number 153."],
      "inputOutput": ["Input:", "153", "Output:", "Armstrong Number"],
      "program": "/assets/armstrong.JPG"
    },
    {
      "name": "Neon number",
      "problemStatement": ["A neon number is a number where the sum of digits of square of the number is equal to the number. ", "For example: 12", "First, we need to perform square of the number that is 9*9 = 81 and then add the digits of the square that is 8 + 1 = 9 which is not equal to 9So, 9 is a neon number"],
      "inputOutput": ["Input:", "12", "9", "Output:", "not a neon number","Neon number"],
      "program": "/assets/img/neon.JPG"
    },
    {
      "name": "SPY Number",
      "problemStatement": ["A number is said to be a Spy number if the sum of all the digits is equal to the product of all digits.", "For Example:", "Consider a number, 22", "sum = 2 + 2 = 4", "product = 2 * 2 = 4", "Here, sum of all the digits in 22 and product of all the digits in a number 22 is equal. So, 22 is a spy number.", "Consider a number, 34","Here, sum of all the digits in 34 and product of all the digits in a number 34 is not equal. So, 34 is not a spy number."],
      "inputOutput": ["Input:", "22", "Output:", "SPY Number"],
      "program": "/assets/img/hello_world.jpeg"
    },
    {
      "name": "Automorphic number",
      "problemStatement": ["A number is called an automorphic number if and only if the square of the given number ends with the same number itself.", "For example:", "25, 76 are automorphic numbers because their square is 625 and 5776, respectively and the last two digits of the square represent the number itself.", "25 = 25*25 = 625 ----- last two digits of the number is same as the number 25. So, 25 is an Automorphic number","7 = 7*7= 49 -------------- last digit of the number is not equal to the number 7. So, it is not an automorphic number."],
      "inputOutput": ["Input:", "25", "9", "Output:", "Automorphic number","Not an automorphic number"],
      "program": "/assets/img/hello_world.jpeg"
    },
    {
      "name": "Factorial",
      "problemStatement": ["Factorial of a number is the product(multiplication) of all positive descending numbers. Factorial.", "of a number (suppose take number as 4) is denoted by number! (that is 4!)", "For example: 4! = 4*3*2*1 = 24.", "Here, 4! Means we can go through reverse order from 4 to 1 and multiply all the numbers from number 4 to number 1.", "i.e., 4*3*2*1", "consider 15!","15*14*13*12*11*10*9*8*7*6*5*4*3*2*1"],
      "inputOutput": ["Input:", "4", "Output:", "24"],
      "program": "/assets/img/hello_world.jpeg"
    },
    {
      "name": "Perfect number",
      "problemStatement": ["Perfect number is a positive integer that is equal to the sum of its factors except itself. The smallest perfect number is 6, which is the sum of 1, 2, and 3. Other perfect numbers are 28, 496, and 8,128.", "For example:", "The factors of 6 is", "1*6 = 6","2 * 3 = 6","3 * 2 = 6","The factors of 6 is 1, 2 and 3 and the sum of these factors is 1 + 2 + 3 is 6 which is equal to its original number.","So, 6 is a perfect number.","The factor of 10 is","1 * 10 = 10","2 * 5 = 10","5 * 2 = 10","The factors of 10 is 1, 2 and 5 and the sum of these factors is 1 + 2 + 5 is 8 which is not equal to its original number.","So, 6 is not a perfect number."],
      "inputOutput": ["Input:", "6", "Output:", "Perfect number"],
      "program": "/assets/img/hello_world.jpeg"
    },
    {
      "name": "Strong Number",
      "problemStatement": ["A strong number is a special number that can be defined as an addition of factorial of each digit of the number, which is equal to the number itself."," The number 145 is a strong number.This is because if we add the factorials of each digit of this number, you will get the number, which is 145 itself.","The number 23 is not a strong number.This is because if we add the factorials of each digit of this number, you will get the number which is not equal to 23 itself.","For example:","145 = 1! + 4! + 5! = 1 + 24 + 120 = 145.","23 = 2! + 3! = 2+6= 8(which is not equal to 23)"],
      "inputOutput": ["Input:", "145", "23", "Output:", "Strong number"," Not a Strong number"],
      "program": "/assets/img/hello_world.jpeg"
    },
    {
      "name": "Prime number",
      "problemStatement": ["•	A prime number is a number greater than 1 with only two factors – themselves and"," •	A prime number cannot be divided by any other numbers without leaving a remainder."," For example:","Let us Consider a number 13 ------- need to check whether 13 is a prime or not.","Step 1: find the factors of 13","Step 2: In table 1 and table 13 the number 13 will be divisible"," Like, 1 * 13 = 13 and 13 * 1=13","Step 3: The factors of 13 is 1 and the number 13 itself.So, prime number should have the","factors like 1 and itself then 13 is a prime number.","Let us Consider a number 10 ------- need to check whether 10 is a prime or not.","Step 1: find the factors of 10","Step 2: In table 1, 2, 5, 10 the number 10 will be divisible"," Like, 1 * 10 = 10","10 * 1=10","2 * 5 = 10","5 * 2 = 10","Step 3: The factors of 10 is 1, 2, 5, 10 itself.So, prime number should have the        factors like 1 and it self."],
      "inputOutput": ["Input:", "", "Output:", ""],
      "program": "/assets/img/hello_world.jpeg"
    },
    {
      "name": "Fibonacci Series",
      "problemStatement": ["The Fibonacci sequence begins with the numbers 0 and 1. The third number in the sequence is the first two numbers added together (0 + 1 = 1). The fourth number in the sequence is the second and third numbers added together (1 + 1 = 2). Each number is the addition (the sum) of the previous two numbers in the sequence. The sequence ends up looking like this.","For example:","0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144……………………….","Looking at it, you can see that each number in the sequence is the addition or sum of the two previous numbers.For example, 34 is the addition of 21 and 13. 144 is the addition of 89 and 55."," Try it out yourself and check other numbers in the sequence to see if they follow the rule.","We want a number after 144 then what we need to do is add the last two numbers","Then 89 + 144 = 233","0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233………………………."],
      "inputOutput": ["Input:", "5", "Output:", "0,1,1,2,3 (first 5 values will come)"],
      "program": "/assets/img/hello_world.jpeg"
    },
    {
      "name": "Pronic Number",
      "problemStatement": ["A pronic number is a number which is the product of two consecutive integers, that is, a number in the form n (n + 1).","For example:","if n = 0 the n(n+ 1) = 0(0 + 1) = 0","if n = 1 the n(n + 1) = 1(1 + 1) = 2","if n = 2 the n(n + 1) = 2(2 + 1) = 6","if n = 3 the n(n + 1) = 3(3 + 1) = 12","if n = 4 the n(n + 1) = 4(4 + 1) = 20","Result is as below:","0, 2, 6, 12, 20, 30, 42, 56, 72, 90, 110, 132, 156, 182, 210, 240, 272, 306, 342, 380, 420, 462 …"],
      "inputOutput": ["Input:", "4", "Output:", "12"],
      "program": "/assets/img/hello_world.jpeg"
    },
    {
      "name": "Sunny Number",
      "problemStatement": ["A number N is called sunny number if the square root of the number N+1 is an integer number."," Example: - 24 is a sunny number because 24 + 1 = 25 has a square root of 5 which is an integer.","Procedure to develop method to check the given number is sunny number or not,","1) Take a number","2) Add 1 in the given number","3) Find its square root value","4) If the square root is an integer, then the given number is a sunny number else the given number is not a sunny number.","If a number is completely divisible by 1 then the number is integer number, but if it leaves some remainder then it is not an integer number."],
      "inputOutput": ["Input:", "3", "8", "Output:", "Sunny Number","Sunny Number"],
      "program": "/assets/img/hello_world.jpeg"
    },
    {
      "name": "Trimorphic Number",
      "problemStatement": ["A number is called a trimorphic number if and only if the cubes of the given number end with the same number itself.","For example:","5, 24 are trimorphic numbers because their cubes are 125 and 13824, respectively and the last digits of the cubes represent the number itself.","5 = 25 * 25 = 125 ----- last digit of the number is same as the number 5. So, 5 is a trimorphic number","24 = 24 * 24 * 24= 13824--------------last digit of the number is not equal to the number 24. So, it is not a trimorphic number."],
      "inputOutput": ["Input:", "24", "10", "Output:", "trimorphic number","Not a trimorphic number"],
      "program": "/assets/img/hello_world.jpeg"
    },
    {
      "name": "Weighted Sum of Digits",
      "problemStatement": ["Compute the weighted sum of digits of a number read from the keyboard in the following sense:","Let us calculate sum of digits multiplying each digit by its position(counting from the left, starting from 1).For example, given the value 1971 we calculate such weighted sum of digits","(1971) = 1 * 1 + 9 * 2 + 7 * 3 + 1 * 4 = 44"],
      "inputOutput": ["Input:", "", "Output:", ""],
      "program": "/assets/img/hello_world.jpeg"
    }
  ];

}
