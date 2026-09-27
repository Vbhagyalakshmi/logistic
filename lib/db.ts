import "server-only";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

// This module must never be imported from a Client Component.
// DATABASE_URL lives only in .env.local / the server environment and is
// never bundled into client JavaScript.

declare global {
  // eslint-disable-next-line no-var
  var __chowra_pg_client: ReturnType<typeof postgres> | undefined;
}

const connectionString = process.env.DATABASE_URL;

function createClient() {
  if (!connectionString) {
    throw new Error(
      "DATABASE_URL is not set. Add it to .env.local before using the database."
    );
  }
  return postgres(connectionString, { max: 5 });
}

// Reuse the connection across hot reloads in development.
const client = global.__chowra_pg_client ?? createClient();
if (process.env.NODE_ENV !== "production") {
  global.__chowra_pg_client = client;
}

export const db = drizzle(client, { schema });
