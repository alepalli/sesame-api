export interface WorkedHoursByEmployeeQuery {
  employeeIds?: string[];
  withChecks?: boolean;
  from: string;
  to: string;
  limit?: number;
  page?: number;
}
