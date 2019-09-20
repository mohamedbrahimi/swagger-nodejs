const initializerEndpoints = (app) => {
    /**
     * @swagger
     * /users:
     *   get:
     *     description: This should return all users list without any filter.
     */
    app.get('/users', (req, res) => res.end('get all users'));
    app.get('/users/:id', (req, res) => res.end(`get the user that have id ${req.params.id}`));
}

export {
    initializerEndpoints
}
