import { Employee } from './interfaces/employee';
import { Meta } from './interfaces/meta';

export interface VacationConfigurationsAssignationsData {
  employee: Employee;
  year: number;
}

export interface VacationConfigurationsAssignationsResponse {
  data: VacationConfigurationsAssignationsData;
  meta: Meta;
}
export interface VacationConfigurationsAssignationsRequest {
  employeeId: string;
  year: number;
}
