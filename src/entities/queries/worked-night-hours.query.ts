export interface WorkedNightHoursQuery {
  employeeIds?: string[];
  withChecks?: boolean;
  from: string;
  to: string;
  limit?: number;
  page?: number;
}
