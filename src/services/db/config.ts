import { CosmosClient } from "@azure/cosmos";

// Database configuration
const COSMOS_ENDPOINT = `https://gobuildwise.documents.azure.com:443/`;
const COSMOS_KEY = import.meta.env.VITE_COSMOS_KEY;
const DATABASE_NAME = "gobuildwise";

// Container names
export const CONTAINERS = {
  PROGRAMS: "programs",
  GRANTEES: "grantees",
  CLAIMS: "claims",
  DOCUMENTS: "documents",
  BUSINESSES: "businesses",
  LEDGER: "ledger",
} as const;

// Validate required environment variables
if (!COSMOS_KEY) {
  throw new Error("VITE_COSMOS_KEY environment variable is required");
}

// Create Cosmos client
export const cosmosClient = new CosmosClient({
  endpoint: COSMOS_ENDPOINT,
  key: COSMOS_KEY,
});

// Get database instance
export const database = cosmosClient.database(DATABASE_NAME);

// Get container instances
export const containers = {
  programs: database.container(CONTAINERS.PROGRAMS),
  grantees: database.container(CONTAINERS.GRANTEES),
  claims: database.container(CONTAINERS.CLAIMS),
  documents: database.container(CONTAINERS.DOCUMENTS),
  businesses: database.container(CONTAINERS.BUSINESSES),
  ledger: database.container(CONTAINERS.LEDGER),
};
