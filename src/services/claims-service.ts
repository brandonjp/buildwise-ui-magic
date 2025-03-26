import apiClient from './api-client';
import { Claim, CreateClaimRequest, ApiResponse } from './types';

export const claimsService = {
  async createClaim(data: CreateClaimRequest): Promise<ApiResponse<Claim>> {
    try {
      const response = await apiClient.post<ApiResponse<Claim>>('/claims', data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getClaim(id: string): Promise<ApiResponse<Claim>> {
    try {
      const response = await apiClient.get<ApiResponse<Claim>>(`/claims/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async listClaims(): Promise<ApiResponse<Claim[]>> {
    try {
      const response = await apiClient.get<ApiResponse<Claim[]>>('/claims');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async updateClaim(id: string, data: Partial<CreateClaimRequest>): Promise<ApiResponse<Claim>> {
    try {
      const response = await apiClient.patch<ApiResponse<Claim>>(`/claims/${id}`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async deleteClaim(id: string): Promise<ApiResponse<void>> {
    try {
      const response = await apiClient.delete<ApiResponse<void>>(`/claims/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};
