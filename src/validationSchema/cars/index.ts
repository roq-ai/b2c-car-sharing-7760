import * as yup from 'yup';

export const carValidationSchema = yup.object().shape({
  model: yup.string().required(),
  make: yup.string().required(),
  year: yup.number().integer().required(),
  color: yup.string().nullable(),
  license_plate: yup.string().nullable(),
  availability: yup.boolean().nullable(),
  company_id: yup.string().nullable().required(),
});
