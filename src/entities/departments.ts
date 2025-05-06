import { Meta } from './export/meta';

export interface DepartmentsRequest {
  companyId: string;
  name: string;
}

export interface DepartmentsData {
  id: string;
  name: string;
}

export interface DepartmentsResponse {
  data: DepartmentsData;
  meta: Meta;
}

export interface DepartmentsRequestPut {
  name: string;
}

export interface DepartmentsListResponse {
  data: DepartmentsData[];
  meta: Meta;
}
