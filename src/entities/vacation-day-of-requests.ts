import { Type } from './enum/type';
import { Meta } from './export/meta';
import { VacationCalendarsData } from './vacation-calendars';
import { Employee } from './export/employee';
import { Status } from './enum/status';

export interface VacationDayOffRequestsData {
  id: string;
  vacationCalendar: VacationCalendarsData;
  employee: Employee;
  daysOff: {
    date: string;
    seconds: number;
  };
  status: Status;
  type: Type;
  comment: string;
  resolutionComment: string;
  resolvedAt: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export interface VacationDayOffRequestsResponse {
  data: VacationDayOffRequestsData;
  meta: Meta;
}

export interface VacationDayOffRequestsRequest {
  employeeId: string;
  calendarId: string;
  type: Type;
  daysOff: {
    date: string;
  }[];
  comment: string;
  onlyWithSchedule: boolean;

}