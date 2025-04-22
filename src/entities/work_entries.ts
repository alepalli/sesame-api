import { Employee } from './interfaces/employee';
import { Coordinates } from './interfaces/coordinates';
import { Meta } from './interfaces/meta';

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
