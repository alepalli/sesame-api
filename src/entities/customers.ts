import { Meta } from './export/meta';

export interface CustomersData {
  id: string;
  customerName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export interface CustomersResponse {
  data: CustomersData;
  meta: Meta;
}

export interface CustomersListResponse {
  data: CustomersData[];
  meta: Meta;
}

export interface CustomersRequestPost {
  companyId: string;
  customerName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  description: string;
}
export interface CustomersRequest {
  customerName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  description: string;
}
