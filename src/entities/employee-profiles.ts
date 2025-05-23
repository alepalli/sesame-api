import { WorkStatus } from './enum/work-status';
import { Meta } from './export/meta';

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
