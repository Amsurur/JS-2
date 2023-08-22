# **_JAVA SCRIPT_**

## Methods in JS

- A method is a block of code which only runs when it is called.
  You can pass data, known as parameters, into a method.
  Methods are used to perform certain actions, and they are
  also known as functions.

## **_String_** - methods

1. **_CharAt()_** - The charAt() method returns the character at a specified index (position) in a string.
   The index of the first character is 0, the second 1, ...
   The index of the last character is string length - 1 .
   and
   The **_at()_** method takes an integer value and returns a new String.
   This method allows for positive and negative integers. Negative integers count
   back from the last string character. they are similar
   ![](Снимок%20экрана%202023-08-22%20110432.png)
2. The **_concat()_** method joins two or more strings.
   The concat() method does not change the existing strings.
   The concat() method returns a new string.

![](Снимок%20экрана%202023-08-22%20110756.png) 3. The replace() method searches a string for a value or a regular expression.
The **_replace()_** method returns a new string with the value(s) replaced.
The replace() method does not change the original string. and The **_replaceAll()_** method returns a new string with all matches of a pattern replaced by
a replacement. ![](Снимок%20экрана%202023-08-22%20111440.png) 4. The **_split()_** method splits a string into an array of substrings. The split() method returns the new
array. The split() method does not change the original string. If (" ") is used as separator, the string
is split between words. 5. The substring() method extracts characters, between two indices (positions), from a string, and
returns the substring.
The substring() method extracts characters from start to end (exclusive).
The **_substring()_** method does not change the original string.
If start is greater than end, arguments are swapped: (4, 1) = (1, 4).
Start or end values less than 0, are treated as 0.
![](Снимок%20экрана%202023-08-22%20111710.png) 6. **_The slice()_** method returns a shallow copy of a portion of an array into a new array object
selected from start to end ( end not included) where start and end represent the index of items
in that array. Show's the slice u cated 7. The **_toLowerCase()_** method converts a string to lowercase letters.
The toLowerCase() method does not change the original string. && ![](Снимок%20экрана%202023-08-22%20112225.png)
The **_toUpperCase()_** method converts a string to uppercase letters, using current locale.
The toUpperCase() method does not change the original string. 8. Method **_trim()_** removes whitespace from both sides of a string.
The trim() method does not change the original string. 9. The **_includes()_** method returns true if a string contains a specified string.
Otherwise it returns false.
The **_includes()_** method is case sensitive. 10. The toString() method returns a string representing the object.
By default toString() takes no parameters. 11. The \_**\_indexOf()\_\_** method returns the position of the first occurrence of a value in a string.
The indexOf() method returns -1 if the value is not found.
The indexOf() method is case sensitive. 12. The **_repeat()_** method creates a new string by repeating the given string a specified number of
times and returns it.
![](Снимок%20экрана%202023-08-22%20112903.png)

## **_JavaScript Number_** - methods

1.  **_Math.round(),ceil(),floor()_**

- The Math.floor() function rounds down a number to the next smallest integer
- The Math.round() function returns the number rounded to the nearest integer.
- The ceil() method rounds a decimal number up to the next largest integer and returns it.

2. **_Math.max()_** and **_Math.min()_**
   - The max() method finds the maximum value among the specified values and returns it.
   - The min() method finds the minimum value among the specified values and returns it
3. **_Math.pow()_** and **_Math.sqrt()_**

- The pow() method computes the power of a number by raising the second argument
  to the power of the first argument.
- The sqrt() method computes the square root of a specified number and returns it

4.  **_isNaN()_**

-
- ![](Снимок%20экрана%202023-08-22%20114034.png)
- The isNaN() function checks if a value is NaN (Not-a-Number) or not.

5.  **_Math.abs()_** and **_Math.random()_**

- The abs() method finds the absolute value of the specified number (without any sign) and returns it.
- The Math.random() function returns a floating-point, pseudo-random number between 0 (inclusive)
  and 1 (exclusive).

# **_Array in JavaScript_**

- An array is an object that holds values (of any type) not particularly in named properties/keys, but rather in numerically indexed position In JavaScript, an array is an ordered list of values. Each value is called an element specified by an index. ... First, an array can hold values of mixed types. An array is a special variable, which can hold more than one value:

## **_JS Array_** - method
