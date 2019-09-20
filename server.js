import express from 'express';
import { initializerEndpoints } from './endpoints'
import { swagger } from './swagger';
const app = express();

initializerEndpoints(app);
swagger(app);

app.listen(3600, () =>
    console.log(`Server is listening on port 3600`));
