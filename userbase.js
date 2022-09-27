class UserBase {
    constructor(users) {
        this.users = users;
    }

    count() {
        return this.users.length;
    }

    getNames() {
        const names = this.users.map((user) => user.getName());
        return names;
    }

    getIntroductions() {
        const introductions = this.users.map((user) => user.getIntroduction());
        return introductions;
    }
}

module.exports = UserBase;