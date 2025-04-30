import { Employee } from './export/employee';
import { Coordinates } from './export/coordinates';
import { Meta } from './export/meta';

export interface TimeEntriesData {
  id: string;
  employee: Employee;
  projectId: string;
  tagIds: string[];
  timeEntryIn: {
    date: string;
    coordinates: Coordinates;
  };
  timeEntryOut: {
    date: string;
    coordinates: Coordinates;
  };
  comment: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export interface TimeEntriesResponse {
  data: TimeEntriesData[];
  meta: Meta;
}

export interface TimeEntriesInRequest {
  employeeId: string;
  projectId: string;
  tagIds: string[];
  comment: string;
  coordinates: Coordinates;
}

export interface TimeEntriesOutRequest {
  employeeId: string;
  coordinates: Coordinates;
}

export interface TimeEntriesRequest {
  employeeId: string;
  projectId: string;
  tagIds: string[];
  comment: string;
  timeEntryIn: {
    date: string;
    coordinates: Coordinates;
  };
  timeEntryOut: {
    date: string;
    coordinates: Coordinates;
  };
}
