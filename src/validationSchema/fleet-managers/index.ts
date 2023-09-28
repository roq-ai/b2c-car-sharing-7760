import * as yup from 'yup';

export const fleetManagerValidationSchema = yup.object().shape({
  manager_name: yup.string().required(),
  contact_number: yup.string().nullable(),
  address: yup.string().nullable(),
  city: yup.string().nullable(),
  state: yup.string().nullable(),
  zip_code: yup.string().nullable(),
  company_id: yup.string().nullable().required(),
});
