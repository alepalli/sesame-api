import { Meta } from './interfaces/meta';

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
