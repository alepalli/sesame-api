import { OfficesData } from './offices';
import { Employee } from './interfaces/employee';
import { Meta } from './interfaces/meta';

export interface EmployeeOfficeAssignationsData {
  id: string;
  employee: Employee;
  office: OfficesData;
  created_at: string;
  updated_at: string;
}

export interface EmployeeOfficeAssignationsResponse {
  data: EmployeeOfficeAssignationsData;
  meta: Meta;
}

export interface EmployeeOfficeAssignationsRequest {
  employeeId: string;
  officeId: string;
}
