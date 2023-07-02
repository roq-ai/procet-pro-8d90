import * as yup from 'yup';

export const toolValidationSchema = yup.object().shape({
  name: yup.string().required(),
  usage_progress: yup.number().integer().required(),
  user_id: yup.string().nullable(),
});
