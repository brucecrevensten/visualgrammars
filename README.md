# Visualization of grammars

The objective of this project is to create a Javascript renderer that transforms grammar strings into visual representations.  A grammar string is the output of some finite-state automata that produces a well-formed string over the set of alphanumeric characters.

Strings are consumed left-to-right as a stack, and each symbol corresponds to a function invocation.  The functions are passed the current stack, and the stack is built from references to functions.

