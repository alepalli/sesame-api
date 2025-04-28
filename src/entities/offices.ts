import { Meta } from './export/meta';
import { Coordinates } from './export/coordinates';

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

export interface OfficesRequestPut {
  name: string;
  address: string;
  coordinates: Coordinates;
  description: string;
  radio: number;
}
