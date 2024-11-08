{
    //  

    interface Profile {
        name: string;
        age: number;
        email: string;
    }

    const updateProfile = (value: Profile, updates: Partial<Profile>): Profile => {
        return { ...value, ...updates };
    }

    // const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    // console.log(updateProfile(myProfile, { age: 26 }));

    //
}