

Using JavaScript, please write a function that checks for the validity of a set of strings given the following rules:
 
  1. There are 15 valid characters: the lower-case letters 'a' through 'j' 
     and the uppercase letters 'Z', 'N', 'L', 'Q', and 'R'.
  2. Every valid lower-case letter by itself is valid, for example, 'j' is a valid set of string,
     but 'fj' is not.
  3. If ♥ is a valid set of strings, then so is Z♥.
  4. If ♥ and ♦ are valid sets of strings, then so are N♥♦, L♥♦, Q♥♦, and R♥♦.
  5. All other strings are invalid.
 
The function should accept a parameter that consists of potential strings separated by whitespace 
and it would return one line per potential strings, followed by 'VALID' if the string passes 
the rules set above or 'INVALID' if it doesn't.

Example:
 
> validateString("Ze");
  Ze VALID
 
> validateString("Za Nj");
  Za VALID
  Nj INVALID
   
> validateString("QZja Rhfa");
  QZja VALID
  Rhfa INVALID
  
> validateString("QRZZaZZaj");
  QRZZaZZaj VALID
  
You may use any JavaScript framework or library of your choice to help solve this problem.
