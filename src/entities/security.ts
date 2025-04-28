import { Meta } from './export/meta';

export interface CoreInfo {
  id: string;
  name: string;
  notificationEmail: string;
  language: string;
  createdAt: string;
  updatedAt: string;
}

export interface CoreInfoResponse {
  data: CoreInfo;
  meta: Meta;
}