import * as Yup from 'yup'

const travelFormValidation = Yup.object().shape({
  budget: Yup.number().min(0, '¡El presupuesto no puede ser negativo!'),
  description: Yup.string().min(2, '¡Descripción muy corta!'),
  endDate: Yup.date()
    .min(new Date(+1), 'La fecha de fin no puede ser la misma que la de inicio')
    .required('Es necesario asignar una fecha de fin'),
  name: Yup.string()
    .min(2, '¡Nombre muy corto!')
    .max(30, '¡Nombre muy largo!')
    .required('Es necesario asignar un nombre'),
  startDate: Yup.date()
    .min(new Date())
    .required('Es necesario asignar una fecha de inicio'),
  travelers: Yup.number().min(1, 'Debe ir al menos 1 viajero'),
})

const activityFormValidation = Yup.object().shape({
  description: Yup.string().min(2, '¡Descripción muy corta!'),
  endDate: Yup.date()
    .min(new Date(+1), 'La fecha de fin no puede ser la misma que la de inicio')
    .required('Es necesario asignar una fecha de fin'),
  name: Yup.string()
    .min(2, '¡Nombre muy corto!')
    .required('Es necesario asignar un nombre'),
  startDate: Yup.date()
    .min(new Date())
    .required('Es necesario asignar una fecha de inicio'),
})

export default { activityFormValidation, travelFormValidation }
