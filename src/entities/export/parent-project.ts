import { Customer } from './customer';
import { Manager } from './manager';
import { Status } from '../enum/status';

export interface ParentProject {
  id: string;
  name: string;
  parentProject: string;
  customer: Customer;
  price: number;
  startDate: string;
  endDate: string;
  manager: Manager;
  description: string;
  status: Status;
}
