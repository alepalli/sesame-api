import { Employee } from './interfaces/employee';
import { VacationConfigurationData } from './vacation_configurations';
import { Meta } from './interfaces/meta';

export interface VacationCalendarsData {
  id: string;
  employee: Employee;
  daysOff: {
    date: string;
    seconds: number;
  }[];
  maxDaysOff: number;
  year: number;
  vacationConfiguration: VacationConfigurationData;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export interface VacationCalendarResponse {
  data: VacationCalendarsData;
  meta: Meta;
}

export interface VacationCalendarRequest {
  employeeId: string;
  vacationConfigurationId: string;
  year: number;
  daysOff: {
    date: string;
  }[];
}

export interface VacationCalendarRequestPut {
  daysOff: {
    date: string;
  }[];
  maxDaysOff: number;
}
