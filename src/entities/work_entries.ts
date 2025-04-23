import { Employee } from './interfaces/employee';
import { Coordinates } from './interfaces/coordinates';
import { Meta } from './interfaces/meta';
import { WorkEntryType } from './enum/work_entry_type';

export interface WorkEntriesData {
  id: string;
  workCheckTypeId: string;
  employee: Employee;
  workEntryType: string;
  workEntryIn: {
    origin: string;
    date: string;
    coordinates: Coordinates;
  }[];
  workEntryOut: {
    origin: string;
    date: string;
    coordinates: Coordinates;
  }[];
  createdAt: string;
  updatedAt: string;
}

export interface WorkEntriesResponse {
  data: WorkEntriesData;
  meta: Meta;
}

export interface WorkEntriesRequest {
  workEntryType: string;
  workEntryIn: {
    date: string;
    coordinates: Coordinates;
  }[];
  workEntryOut: {
    date: string;
    coordinates: Coordinates;
  }[];
}

export interface WorkEntriesRequestClockIn {
  workEntryType: string;
  workEntryIn: {
    date: string;
    coordinates: Coordinates;
  }[];
  workEntryOut: {
    date: string;
    coordinates: Coordinates;
  }[];
}

export interface WorkEntriesRequestClockOut {
  employeeId: string;
  workEntryOut: {
    coordinates: Coordinates;
  };
}

export interface WorkEntriesRequestCreate {
  employeeId: string;
  workEntryType: WorkEntryType;
  workBreakId: string;
  workCheckTypeId: string;
  workEntryIn: {
    date: string;
    coordinates: Coordinates;
  }[];
  workEntryOut: {
    date: string;
    coordinates: Coordinates;
  };
}
