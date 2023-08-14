import * as Yup from 'yup'

const travelFormValidation = Yup.object().shape({
  budget: Yup.number().min(0, '¡El presupuesto no puede ser negativo!'),
  description: Yup.string().min(2, '¡Descripción muy corta!'),
  endDate: Yup.date()
    .min(
      Yup.ref('startDate'),
      'La fecha de fin no puede ser anterior a la de inicio',
    )
    .required('Es necesario asignar una fecha de fin'),
  name: Yup.string()
    .min(2, '¡Nombre muy corto!')
    .max(30, '¡Nombre muy largo!')
    .required('Es necesario asignar un nombre'),
  startDate: Yup.date().required('Es necesario asignar una fecha de inicio'),
  travelers: Yup.number().min(1, 'Debe ir al menos 1 viajero'),
})

const activityFormValidation = Yup.object().shape({
  description: Yup.string().min(2, '¡Descripción muy corta!'),
  endDate: Yup.date()
    .min(
      Yup.ref('startDate'),
      'La fecha de fin no puede ser anterior a la de inicio',
    )
    .required('Es necesario asignar una fecha de fin'),
  name: Yup.string()
    .min(2, '¡Nombre muy corto!')
    .required('Es necesario asignar un nombre'),
  rooms: Yup.number().min(1, 'Debe haber al menos una habitación'),
  startDate: Yup.date().required('Es necesario asignar una fecha de inicio'),
  transportType: Yup.string().required(
    'Es necesario asignar un tipo de transporte',
  ),
})

export { activityFormValidation, travelFormValidation }
