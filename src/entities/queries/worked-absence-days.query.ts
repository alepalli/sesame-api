export interface WorkedAbsenceDaysQuery {
  employeeIds?: string[];
  from: string;
  to: string;
  limit?: number;
  page?: number;
}
