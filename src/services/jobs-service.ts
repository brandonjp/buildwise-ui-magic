import apiClient from './api-client';
import { Job, CreateJobRequest, ApiResponse } from './types';

export const jobsService = {
  async createJob(data: CreateJobRequest): Promise<ApiResponse<Job>> {
    try {
      const response = await apiClient.post<ApiResponse<Job>>('/jobs', data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getJob(id: string): Promise<ApiResponse<Job>> {
    try {
      const response = await apiClient.get<ApiResponse<Job>>(`/jobs/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async listJobs(): Promise<ApiResponse<Job[]>> {
    try {
      const response = await apiClient.get<ApiResponse<Job[]>>('/jobs');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async listJobsByClaim(claimId: string): Promise<ApiResponse<Job[]>> {
    try {
      const response = await apiClient.get<ApiResponse<Job[]>>(`/jobs/claim/${claimId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async updateJobStatus(id: string, status: Job['status']): Promise<ApiResponse<Job>> {
    try {
      const response = await apiClient.patch<ApiResponse<Job>>(`/jobs/${id}/status`, { status });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async assignJob(id: string, userId: string): Promise<ApiResponse<Job>> {
    try {
      const response = await apiClient.patch<ApiResponse<Job>>(`/jobs/${id}/assign`, { userId });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};
