export interface CompanyRequest {
  name: string;
  notificationEmail: string;
  language: string;
}

export interface CompanyMeta {
  currentPage: number;
  lastPage: number;
  total: number;
  perPage: number;
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
  meta: CompanyMeta;
}
