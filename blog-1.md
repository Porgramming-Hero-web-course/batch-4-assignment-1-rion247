# Blog-01: The significance of union and intersection types in Typescript. 

In TypeScript, both union types and intersection types offer powerful features that provide greater flexibility and precision in defining types. 

**Union Types:** 
A union type in TypeScript is a type that allows a variable to hold one of several types. It is defined using the pipe ( | ) symbol between the possible types.

**Definition:** 
A union type is a type that can represent a value that is one of multiple types. When defining a union type, we are specifying that a variable, parameter or return type can be one of the types in the union.

**Basic Syntax:**
type TypeName = Type1 | Type2 | Type3;
where, Type1, Type2, Type3 etc. are the types that the variable or value can be. The value can be one of the types, not necessarily all of them at the same time.

**Example:**
type Shape = “circle” | “square” | “triangle”;
 
function checkTheShape(input: Shape): string{
    if(input === “circle”){
    console.log(“I am circle”);
    }else if(input === “square”){
    console.log(“I am square”);
}else{
    console.log(“I am triangle”);
}

}

console.log(checkTheShape(“circle”)); // I am circle
console.log(checkTheShape(“square”)); // I am square
console.log(checkTheShape(“triangle”)); // I am triangle
console.log(checkTheShape(“rectangle”)); // Error will Occur

**Significance of Union Types:**

- **Flexibility:** It's easy to assign values of different types to the same variable.
- **Type Safety:** TypeScript will enforce that only the allowed types are assigned to the variable, ensuring no unexpected values are used.
- **Better Function Flexibility:** Functions can accept different types of parameters and handle multiple cases based on the type of the argument passed.

**Intersection Types:** 
An intersection type allows to combine multiple types into a single type that includes all the properties and methods of the intersected types. In other words, an intersection type creates a new type by combining two or more existing types, and the resulting type must have all properties and methods from every type involved in the intersection. Intersection types are denoted using the ampersand (&) symbol.

**Definition:** 
An intersection type is a type that represents a value that must satisfy all the types that are combined together.

**Basic Syntax:**
type TypeName = Type1 & Type2 & Type3;
where Type1, Type2, and Type3 are the types being combined, and the resulting type will include properties and methods from all of them.

**Example:**

interface Person{
    name: string;
    age: number;
}

interface Contact{
    email: string;
    phone: string;
}

type PersonWithContact = Person & Contact;

const person: PersonWithContact = {
    name:"Alice",
    age: 30,
    email: "example@gmail.com",
    phone: "123-456-7890"
}

**Significance of Intersection Types:**

- **Combining Types:** Useful for merging multiple types (e.g., combining object types) into a single type.
- **Type Safety:** Ensures that the value satisfies all the types involved in the intersection.
- **Extending Objects:** Intersection types are often used to create more complex or extended types by combining simpler types.

**Conclusion:**

- Union types are ideal when we need flexibility, allowing a value to be one of several types. They provide versatility while still maintaining type safety.

- Intersection types are ideal for combining types, ensuring that the resulting type has all properties and methods from multiple sources. They provide composability and extensibility, especially when working with complex objects.