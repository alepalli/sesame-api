import { Employee } from './export/employee';
import { VacationConfigurationData } from './vacation-configurations';
import { Meta } from './export/meta';

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

export interface VacationCalendarListResponse {
  data: VacationCalendarsData[];
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
