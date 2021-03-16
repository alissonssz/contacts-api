const express = require('express');
const routes = express.Router();
const cors = require('cors');

const authRoutes = require('./auth.routes');
const usersRoutes = require('./users.routes');

routes.use('/auth', authRoutes);
routes.use('/users', usersRoutes);

module.exports = routes;