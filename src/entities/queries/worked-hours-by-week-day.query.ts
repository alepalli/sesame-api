// usato per metodo findAllWorkedHoursByEmployeeAndWeekDay

export interface WorkedHoursByWeekDayQuery {
  employeeIds?: string[];
  from: string;
  to: string;
  limit?: number;
  page?: number;
}

