export enum WorkStatus {
  ONLINE = 'online',
  OFFLINE = 'offline',
  PAUSED = 'paused',
  REMOTE = 'remote',
}

export interface employeeProfile {
  id: string;
  employee: {
    id: string,
    firstName: string,
    lastName: string,
    imageProfileUrl: string,
    email: string,
    workStatus: WorkStatus,
    workCheckTypeColor: string,
    workCheckTypeName: string
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
  }
}