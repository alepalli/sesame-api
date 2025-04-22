import { Employee } from './employee';
import { DepartmentsData } from './departments';

export interface DepartmentsAssignationsData {
  id: string;
  employee: Employee;
  department: DepartmentsData;
  createdAt: string;
  updatedAt: string;
}
export interface DepartmentsAssignationMeta {
  currentPage: number;
  lastPage: number;
  total: number;
  perPage: number;
}

export interface DepartmentsAssignationResponse {
  data: DepartmentsAssignationsData;
  meta: DepartmentsAssignationMeta;
}

export interface DepartmentsAssignationRequest {
  employeeId: string;
  departmentId: string;
}