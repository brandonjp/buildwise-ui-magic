import apiClient from './api-client';
import { File, ApiResponse } from './types';

export const filesService = {
  async uploadFile(file: File): Promise<ApiResponse<File>> {
    try {
      const formData = new FormData();
      formData.append('file', file as any);

      const response = await apiClient.post<ApiResponse<File>>('/files/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async uploadMultipleFiles(files: File[]): Promise<ApiResponse<File[]>> {
    try {
      const formData = new FormData();
      files.forEach((file) => {
        formData.append('files', file as any);
      });

      const response = await apiClient.post<ApiResponse<File[]>>('/files/upload-multiple', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async deleteFile(id: string): Promise<ApiResponse<void>> {
    try {
      const response = await apiClient.delete<ApiResponse<void>>(`/files/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getFile(id: string): Promise<ApiResponse<File>> {
    try {
      const response = await apiClient.get<ApiResponse<File>>(`/files/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getFileUrl(id: string): Promise<string> {
    return `${apiClient.defaults.baseURL}/files/${id}/download`;
  }
};
