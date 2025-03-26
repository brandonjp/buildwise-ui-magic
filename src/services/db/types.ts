import { Resource } from "@azure/cosmos";

export interface Program extends Resource {
  name: string;
  description: string;
  status: "active" | "inactive";
  startDate: string;
  endDate?: string;
  budget: number;
  createdAt: string;
  updatedAt: string;
}

export interface Grantee extends Resource {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  status: "active" | "inactive";
  programId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Claim extends Resource {
  title: string;
  description: string;
  status: "draft" | "pending" | "approved" | "rejected";
  amount: number;
  granteeId: string;
  programId: string;
  documents: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Document extends Resource {
  name: string;
  type: string;
  size: number;
  url: string;
  claimId: string;
  uploadedBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface Business extends Resource {
  name: string;
  type: string;
  address: string;
  phone: string;
  email: string;
  status: "active" | "inactive";
  createdAt: string;
  updatedAt: string;
}

export interface LedgerEntry extends Resource {
  type: "credit" | "debit";
  amount: number;
  description: string;
  claimId: string;
  programId: string;
  businessId: string;
  date: string;
  createdAt: string;
  updatedAt: string;
}
