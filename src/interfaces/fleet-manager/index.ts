import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface FleetManagerInterface {
  id?: string;
  manager_name: string;
  contact_number?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;

  company?: CompanyInterface;
  _count?: {};
}

export interface FleetManagerGetQueryInterface extends GetQueryInterface {
  id?: string;
  manager_name?: string;
  contact_number?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  company_id?: string;
}
