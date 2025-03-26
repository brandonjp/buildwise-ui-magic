export interface Claim {
  id: string;
  title: string;
  description: string;
  status: 'draft' | 'pending' | 'approved' | 'rejected';
  createdAt: string;
  updatedAt: string;
  files: File[];
}

export interface Job {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled';
  claimId: string;
  assignedTo?: string;
  createdAt: string;
  updatedAt: string;
}

export interface File {
  id: string;
  name: string;
  url: string;
  type: string;
  size: number;
  uploadedAt: string;
}

export interface CreateClaimRequest {
  title: string;
  description: string;
  files?: File[];
}

export interface CreateJobRequest {
  title: string;
  description: string;
  claimId: string;
  assignedTo?: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  status: number;
}
