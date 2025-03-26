import axios, { AxiosInstance, AxiosError } from 'axios';

// API configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';
const API_TIMEOUT = 30000; // 30 seconds

// Custom error class for API errors
export class ApiError extends Error {
  constructor(
    message: string,
    public status?: number,
    public data?: any
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

// Create axios instance with default config
const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling errors
apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response) {
      throw new ApiError(
        error.response.data.message || 'An error occurred',
        error.response.status,
        error.response.data
      );
    }
    if (error.request) {
      throw new ApiError('No response received from server');
    }
    throw new ApiError('Error setting up request');
  }
);

export default apiClient;
