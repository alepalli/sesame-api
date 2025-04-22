import { Employee } from './interfaces/employee';
import { DepartmentsData } from './departments';
import { Meta } from './interfaces/meta';

export interface EmployeeDepartmentAssignationsData {
  id: string;
  employee: Employee;
  department: DepartmentsData;
  createdAt: string;
  updatedAt: string;
}

export interface EmployeeDepartmentAssignationsResponse {
  data: EmployeeDepartmentAssignationsData;
  meta: Meta;
}

export interface EmployeeDepartmentAssignationsRequest {
  employeeId: string;
  departmentId: string;
}