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
  data: CustomersData[];
  meta: Meta;
}

export interface CustomersRequest {
  companyId: string;
  customerName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  description: string;
}