class User {
    constructor(name) {
        this.name = name;
    }
}
class DecoratedUser {
    constructor(user, street, city) {
        this.user = user;
        this.name = user.name; 
        this.street = street;
        this.city = city;
    }
    logger() {
        console.log("Decorated User: " + this.name + ", " +
            this.street + ", " + this.city);
    };
}
