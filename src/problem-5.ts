{

    //

    const getProperty = <T, Q extends keyof T>(object: T, propertyName: Q): T[Q] => {
        return object[propertyName];
    }

    const person = { name: "Alice", age: 30 };
    console.log(getProperty(person, "name"));

    //


}