import app from './app';
import { SERVER_PORT } from './config';

// server
app.listen(SERVER_PORT, () =>
  console.log(`Server is running on port: ${SERVER_PORT}`)
);

export default app;
