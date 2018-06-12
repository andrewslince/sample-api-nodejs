'use strict';

const User = require('../models/user');

class UserRepository {
    constructor() {
        this.users = new Map([
            [1, new User(1, 'Andrews Lince', 'andrews.lince@gmail.com')],
            [2, new User(2, 'Thayana Coelho', 'oliveirathay1@gmail.com')]
        ]);
    }

    getById(id) {
        return this.users.get(id);
    }

    getAll() {
        return Array.from(this.users.values());
    }

    remove() {
        const keys = Array.from(this.users.keys());
        this.users.delete(keys[keys.length - 1]);
    }

    save(user) {
        if (this.getById(user.id) !== undefined) {
            this.users[user.id] = user;
            return 'Updated User with id=' + user.id;
        } else {
            this.users.set(user.id, user);
            return 'Added User with id=' + user.id;
        }
    }
}

const userRepository = new UserRepository();

module.exports = userRepository;
