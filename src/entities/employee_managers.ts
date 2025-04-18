import { Manager } from './manager';
import { Employee } from './employee';
import { Permission } from './enum/permission';
import { Order } from './enum/order';

export interface EmployeeManagersRequest {
  employeeId: string;
  managerId: string;
  permission: string;
  order: number;
}

export interface EmployeeManagersData {
  id: string;
  manager: Manager;
  employee: Employee;
  permission: Permission;
  order: Order;
  createdAt: string;
  updatedAt: string;
}

export interface EmployeeManagerMeta {
  currentPage: number;
  lastPage: number;
  total: number;
  perPage: number;
}

export interface EmployeeManagerResponse {
  data: EmployeeManagersData;
  meta: EmployeeManagerMeta;
}
