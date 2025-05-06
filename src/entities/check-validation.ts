import { Employee } from './export/employee';
import { Meta } from './export/meta';

export interface CheckValidationData {
  id: string;
  employee: Employee;
  startDate: string;
  endDate: string;
  status: string;
  lastSent: string;
  timesSent: number;
  createdAt: string;
  updatedAt: string;
}

export interface CheckValidationResponse {
  data: CheckValidationData;
  meta: Meta;
}
