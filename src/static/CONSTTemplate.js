import moment from 'moment';
import 'moment/locale/es';

export const FORMAT_DATE_CL = 'MMM YYYY'

export function chooseLanguage (languaje) {
  if (languaje) {
    return en;
  }
  return es;
}

moment.locale('en');
export const en = {
  name: '',
  profileImage: process.env.PUBLIC_URL + '/perfil.jpg',
  onlyName: '',
  title: 'Hello!',
  doneBy: 'Done by Daniel Tapia',
  aboutMe: 'About me',
  curriculum: 'Curriculum',
  experience: 'Experience',
  study: 'Studies',
  presentation: 'Presentation',
  misc: 'Miscellaneous',
  contact: 'Contact',
  preview: 'Preview',
  email: {
    title: 'email@email.com',
    url: 'mailto:email@email.com',
  },
  linkedin: {
    title: 'linkedin',
    url: 'https://www.linkedin.com/in/.../',
  },
  github: {
    title: 'github',
    url: 'https://github.com/.../',
  },
  facebook: {
    title: 'facebook',
    url: 'https://www.facebook.com/.../',
  },
  canContact: 'You can contact me through',
  //Reply this object with same template
  experiences: [{
    institution: 'institution',
    start_dt: moment('date', 'YYYYMM').format(FORMAT_DATE_CL),
    end_dt: moment('date', 'YYYYMM').format(FORMAT_DATE_CL),
    avatar: process.env.PUBLIC_URL + '/institution.jpg',
    jobs: [
        'jobs',
    ]
  }],
  //Same as above
  studies: [{
    institution: 'institution',
    start_dt: moment('date', 'YYYYMM').format(FORMAT_DATE_CL), 
    end_dt: moment('date', 'YYYYMM').format(FORMAT_DATE_CL),
    avatar: process.env.PUBLIC_URL + '/institution.png',
  }]
}

moment.locale('es');
export const es = {
  name: '',
  profileImage: process.env.PUBLIC_URL +  '/perfil.jpg',
  onlyName: '',
  title: 'Hola!',
  doneBy: 'Realizado por Daniel Tapia',
  aboutMe: 'Sobre mí',
  curriculum: 'Curriculum',
  experience: 'Experiencia',
  study: 'Estudios',
  presentation: 'Presentación',
  misc: 'Misceláneo',
  contact: 'Contacto',
  preview: 'Vista previa',
  email: {
    title: 'email@email.com',
    url: 'mailto:email@email.com',
  },
  linkedin: {
    title: 'linkedin',
    url: 'https://www.linkedin.com/in/.../',
  },
  github: {
    title: 'github',
    url: 'https://github.com/.../',
  },
  facebook: {
    title: 'facebook',
    url: 'https://www.facebook.com/.../',
  },
  canContact: 'Puedes contactarme conmigo a través de',
  //Replica este objeto con la misma plantilla
  experiences: [{
    institution: 'institution',
    start_dt: moment('date', 'YYYYMM').format(FORMAT_DATE_CL),
    end_dt: moment('date', 'YYYYMM').format(FORMAT_DATE_CL),
    avatar: process.env.PUBLIC_URL + '/institution.jpg',
    jobs: [
        'jobs',
    ]
  }],
  //Lo mismo que arriba
  studies: [{
    institution: 'institution',
    start_dt: moment('date', 'YYYYMM').format(FORMAT_DATE_CL),
    end_dt: moment('date', 'YYYYMM').format(FORMAT_DATE_CL),
    avatar: process.env.PUBLIC_URL + '/institution.png',
  }]
}