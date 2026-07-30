const SUBJECTS = {
  lengua: {
    id: 'lengua',
    name: 'Lengua y Literatura',
    emoji: '📚',
    color: '#ff7eb6',
    urgent: true,
    subtitle: 'Prioridad: examen de mañana',
    description: 'Diálogo, comunicación, diario personal, tema e ideas, fábula, gramática, verbos y ortografía con b, g y j.'
  },
  informatica: {
    id: 'informatica',
    name: 'Informática',
    emoji: '💻',
    color: '#54d6ff',
    urgent: false,
    subtitle: 'Computadora y herramientas digitales',
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
    subtitle: 'Aventura de mapas e historia',
    description: 'Viaja desde el origen del Homo sapiens hasta el Ecuador: rutas, nómadas, herramientas, mapas para pintar, regiones y límites.'
  }
};

const Q = (id, q, options, answer, explain, visual='❓') => ({id,q,options,answer,explain,visual});

const LESSONS = [];