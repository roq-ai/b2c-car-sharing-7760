interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: [
    'Owner',
    'Fleet Manager',
    'Admin',
    'Business Owner',
    'Operations Manager',
    'Operations Staff',
    'Customer Service Representative',
    'End Customer',
  ],
  tenantName: 'Company',
  applicationName: 'B2C Car sharing',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View car details',
    'View company information',
    'View booking details',
    'View operations dashboard',
  ],
  ownerAbilities: ['Manage user data', 'Manage company data', 'Manage car data', 'Manage booking data'],
  getQuoteUrl: 'https://app.roq.ai/proposal/e6fe3b53-2ed3-448e-b1f9-e94b66d98f28',
};
