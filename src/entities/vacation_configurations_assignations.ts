import { Employee } from './export/employee';
import { Meta } from './export/meta';

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
