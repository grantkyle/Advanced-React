import { config, createSchema } from '@keystone-next/keystone/schema';
import 'dotenv/config';

const databaseURL =
  process.env.DATABASE_URL || 'mongoDB://localhost/keystone-clothes-for-bros';
// session sign in length
const sessionConfig = {
  maxAge: 60 * 60 * 24 * 60,
  secret: process.env.COOKIE_SECRET,
};

export default config({
  // @ts-ignore
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
    // TODO: add data seeding here
  },
  lists: createSchema({
    // schema items
  }),
  ui: {
    // TODO: change for roles access
    isAccessAllowed: () => true,
  },
  // TODO: Add session values here
});
