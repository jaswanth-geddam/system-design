class Address {
    constructor(
        public city: string,
        public state: string
    ) {}

    copy(): Address {
        return new Address(this.city, this.state);
    }
}

class User {
    constructor(
        public name: string,
        public age: number,
        public address: Address
    ) {}

    setName(name: string): void {
        this.name = name;
    }

    copy(): User {
        return new User(
            this.name,
            this.age,
            this.address.copy() // Deep copy
        );
    }
}

const user1 = new User(
    "Alice",
    30,
    new Address("Hyderabad", "Telangana")
);

const user2 = user1.copy();

user2.setName("Bob");
user2.address.city = "Bangalore";

console.log(user1.name); // Alice
console.log(user1.address.city); // Hyderabad

console.log(user2.name); // Bob
console.log(user2.address.city); // Bangalore