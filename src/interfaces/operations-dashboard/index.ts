import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OperationsDashboardInterface {
  id?: string;
  dashboard_name: string;
  dashboard_description?: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface OperationsDashboardGetQueryInterface extends GetQueryInterface {
  id?: string;
  dashboard_name?: string;
  dashboard_description?: string;
  user_id?: string;
}
