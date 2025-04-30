import { ParentProject } from './export/parent-project';
import { Customer } from './export/customer';
import { Status } from './enum/status';
import { Manager } from './export/manager';
import { Meta } from './export/meta';

export interface ProjectsData {
  id: string;
  name: string;
  parentProject: ParentProject;
  customer: Customer;
  price: number;
  startDate: string;
  endDate: string;
  manager: Manager;
  description: string;
  status: Status;
}

export interface ProjectsResponse {
  data: ProjectsData[];
  meta: Meta;
}

export interface ProjectsRequest {
  companyId: string;
  name: string;
  parentProjectId: string;
  customerId: string;
  price: number;
  startDate: string;
  endDate: string;
  managerId: string;
  description: string;
  status: Status;
}

export interface UpdateProjectsRequest {
  name: string;
  parentProjectId: string;
  customerId: string;
  price: number;
  startDate: string;
  endDate: string;
  managerId: string;
  description: string;
  status: Status;
}
