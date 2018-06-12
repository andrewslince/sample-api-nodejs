'use strict';

const Router = require('express');
const userRepo = require('../repo/userRepository');

const getUserRoutes = (app) => {
    app.use(
        '/users',
        (new Router())

            // get a specific user (by id)
            .get('/:id', (req, res) => {
                const id = parseInt(req.params.id);
                const result = userRepo.getById(id);
                res.send(result);
            })

            // get all users
            .get('/', (req, res) => {
                const result = userRepo.getAll();
                res.send(result);
            })

            // remove a user
            .get('/remove', (req, res) => {
                userRepo.remove();
                const result = 'Last user remove. Total count: '
                    + userRepo.users.size;
                res.send(result);
            })

            // save a new user
            .post('/save', (req, res) => {
                const user = req.body;
                const result = userRepo.save(user);
                res.send(result);
            })
    );
};

module.exports = getUserRoutes;
