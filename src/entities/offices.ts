import { Meta } from './interfaces/meta';

export interface OfficesData {
  id: string;
  name: string;
  address: string;
  coordinates: {
    latitude: number;
    longitude: number;
  }[];
  description: string;
  radio: number;
}

export interface OfficesResponse {
  data: OfficesData;
  meta: Meta;
}

export interface OfficesRequest {
  companyId: string;
  name: string;
  address: string;
  coordinates: {
    latitude: number;
    longitude: number;
  }[];
  description: string;
  radio: number;
}