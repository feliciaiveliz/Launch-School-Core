/// JS229 Take Home Project Notes

Assumptions about requirements:
- It was not explicitly stated, but I assumed for input validation that all fields needed to be given, month/year was a string and that month was between 0 and 12.
- I assumed that `isWithinMonthYear` method meant that given a combination of a month and year, we needed to return a todo object that needed to be in exactly that restriction.
- I assumed month/year combination meant that it would be a single string that contained a month number and year number, so I tested with '-' seperating the two numbers that represent month and year.
- I assumed by 'copy of collection anytime a method returns all or a subset' meant that the TodoManager would initialize the TodoList and receive a copy of that list. All TodoManager's methods act on that copy, therefore any chances to the original list means that TodoManager needs to reinitialize the list again to receive the newly updated list. I wasn't quite sure what this requirement meant exactly, but I think if that's what was meant, than I show how I implement it. `list` is private with TodoList and therefore cannot be accessed directly outside of it through a `console.log`, nor through TodoList directly, only through the `copyList` method.

How to Run Tests
- I ran these tests in containers, containers 1, 2 and 3. This made it easier to isolate behaviors of each object to make sure they are working correctly. I ran them in order, and when finished with the current one I commented it out. When finished with container 1, comment all of it and start container 2. The creation of the 'mow lawn' todo is intended to work with both container 2 and 3. Container 1 tests my assumptions of invalid input using LS's 'todoData'. Container 2 uses the same set, though I changed the name slightly to make testing easier (without duplication of declarations of variable names), and uses the 'mow lawn' todo that uses the rest of the tests in the application. I hope this was clear enough.

Thank you for taking time to read my project.