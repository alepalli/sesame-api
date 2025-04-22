export interface DepartmentsRequest {
  companyId: string;
  name: string;
}

export interface DepartmentsData {
  id: string;
  name: string;
}

export interface DepartmentsMeta {
  currentPage: number;
  lastPage: number;
  total: number;
  perPage: number;
}

export interface DepartmentsResponse {
  data: DepartmentsData;
  meta: DepartmentsMeta;
}
