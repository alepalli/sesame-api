import { WorkStatus } from './enum/work_status';
import { Meta } from './interfaces/meta';

export interface EmployeeProfilesRequest {
  organizationChartManagerId: string;
}

export interface EmployeeProfilesData {
  id: string;
  employee: {
    id: string;
    firstName: string;
    lastName: string;
    imageProfileUrl: string;
    email: string;
    workStatus: WorkStatus;
    workCheckTypeColor: string;
    workCheckTypeName: string;
  }[];
  organizationChartManager: {
    id: string;
    firstName: string;
    lastName: string;
    imageProfileUrl: string;
    email: string;
    workStatus: WorkStatus;
    workCheckTypeColor: string;
    workCheckTypeName: string;
  };
}

export interface EmployeeProfilesResponse {
  data: EmployeeProfilesData;
  meta: Meta;
}
