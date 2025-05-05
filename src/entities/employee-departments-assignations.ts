import { Employee } from './export/employee';
import { DepartmentsData } from './departments';
import { Meta } from './export/meta';

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