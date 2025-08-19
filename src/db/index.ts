import { drizzle } from 'drizzle-orm/postgres-js';
import { schema } from './schema';

export const db = drizzle(process.env.POSTGRES_URL!, { schema });

