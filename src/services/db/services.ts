import { containers } from "./config";
import { BaseDatabaseService } from "./base-service";
import {
  Program,
  Grantee,
  Claim,
  Document,
  Business,
  LedgerEntry,
} from "./types";

export class ProgramService extends BaseDatabaseService<Program> {
  constructor() {
    super(containers.programs);
  }

  async getActivePrograms(): Promise<Program[]> {
    return this.query<Program>(
      "SELECT * FROM c WHERE c.status = @status",
      [{ name: "@status", value: "active" }]
    );
  }
}

export class GranteeService extends BaseDatabaseService<Grantee> {
  constructor() {
    super(containers.grantees);
  }

  async getGranteesByProgram(programId: string): Promise<Grantee[]> {
    return this.query<Grantee>(
      "SELECT * FROM c WHERE c.programId = @programId",
      [{ name: "@programId", value: programId }]
    );
  }
}

export class ClaimService extends BaseDatabaseService<Claim> {
  constructor() {
    super(containers.claims);
  }

  async getClaimsByGrantee(granteeId: string): Promise<Claim[]> {
    return this.query<Claim>(
      "SELECT * FROM c WHERE c.granteeId = @granteeId",
      [{ name: "@granteeId", value: granteeId }]
    );
  }

  async getClaimsByProgram(programId: string): Promise<Claim[]> {
    return this.query<Claim>(
      "SELECT * FROM c WHERE c.programId = @programId",
      [{ name: "@programId", value: programId }]
    );
  }
}

export class DocumentService extends BaseDatabaseService<Document> {
  constructor() {
    super(containers.documents);
  }

  async getDocumentsByClaim(claimId: string): Promise<Document[]> {
    return this.query<Document>(
      "SELECT * FROM c WHERE c.claimId = @claimId",
      [{ name: "@claimId", value: claimId }]
    );
  }
}

export class BusinessService extends BaseDatabaseService<Business> {
  constructor() {
    super(containers.businesses);
  }

  async getActiveBusinesses(): Promise<Business[]> {
    return this.query<Business>(
      "SELECT * FROM c WHERE c.status = @status",
      [{ name: "@status", value: "active" }]
    );
  }
}

export class LedgerService extends BaseDatabaseService<LedgerEntry> {
  constructor() {
    super(containers.ledger);
  }

  async getLedgerEntriesByClaim(claimId: string): Promise<LedgerEntry[]> {
    return this.query<LedgerEntry>(
      "SELECT * FROM c WHERE c.claimId = @claimId ORDER BY c.date DESC",
      [{ name: "@claimId", value: claimId }]
    );
  }

  async getLedgerEntriesByProgram(programId: string): Promise<LedgerEntry[]> {
    return this.query<LedgerEntry>(
      "SELECT * FROM c WHERE c.programId = @programId ORDER BY c.date DESC",
      [{ name: "@programId", value: programId }]
    );
  }
}

// Export singleton instances
export const programService = new ProgramService();
export const granteeService = new GranteeService();
export const claimService = new ClaimService();
export const documentService = new DocumentService();
export const businessService = new BusinessService();
export const ledgerService = new LedgerService();
