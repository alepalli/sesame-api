import { Meta } from './export/meta';

export interface CompanyRequest {
  name: string;
  notificationEmail: string;
  language: string;
}

export interface CompanyData {
  id: string;
  name: string;
  notificationEmail: string;
  language: string;
  createdAt: string;
  updatedAt: string;
}

export interface CompanyResponse {
  data: CompanyData;
  meta: Meta;
}
