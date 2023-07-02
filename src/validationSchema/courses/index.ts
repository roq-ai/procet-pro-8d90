import * as yup from 'yup';

export const courseValidationSchema = yup.object().shape({
  name: yup.string().required(),
  progress: yup.number().integer().required(),
  user_id: yup.string().nullable(),
});
