const SUBJECTS = {
  informatica: {
    id: 'informatica',
    name: 'Informática',
    emoji: '💻',
    color: '#54d6ff',
    urgent: true,
    subtitle: 'Prioridad: examen de mañana',
    description: 'Aprende las partes de la computadora, hardware y software, mouse, teclado, carpetas, ventanas y atajos.'
  },
  ciencias: {
    id: 'ciencias',
    name: 'Ciencias Naturales',
    emoji: '🌊',
    color: '#48e0a4',
    urgent: false,
    subtitle: 'Galápagos, calor y energía',
    description: 'Ecosistema marino, biodiversidad, veda, biótico/abiótico, temperatura, calor y energía del Sol.'
  },
  estudios: {
    id: 'estudios',
    name: 'Estudios Sociales',
    emoji: '🗺️',
    color: '#ffd166',
    urgent: false,
    subtitle: 'Historia y Ecuador',
    description: 'Homo sapiens, primeros pobladores de América, nómadas, herramientas, regiones y límites del Ecuador.'
  }
};

const Q = (id, q, options, answer, explain, visual='❓') => ({id,q,options,answer,explain,visual});

const LESSONS = [];
