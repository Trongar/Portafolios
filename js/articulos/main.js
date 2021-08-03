import {proyectos} from '/js/articulos/proyectos';
import {habilidades} from '/js/articulos/habilidades';
import {experiencias} from '/js/articulos/experiencias';
import {contacto} from '/js/articulos/contacto';
let main =[
{
        title:    'No se encontraron resultados',
        type:     '',
        icon:     'close-o',            
        subtitle: '',
        mirar:    '',
        source:   '',
        img:      '',
        paragraph:'',
        tags:     '',
},{
        title:    'Curriculum Vitae',
        type:     'info',
        icon:     'file-document',            
        subtitle: 'Hoja de vida',
        mirar:    'https://github.com/Trongar/Portafolios/blob/main/CV.pdf',
        source:   '',
        img:      'https://i.imgur.com/QRzbHN4.png',
        paragraph:'',
        tags:     'cv curriculum',
},{
        title:    'Habilidades',
        type:     'info',
        icon:     'bolt',            
        subtitle: 'Mis habilidades y conocimientos.',
        mirar:    '',
        source:   '',
        img:      '',
        paragraph:'',
        tags:     '',
},{
        title:    'Proyectos',
        type:     'info',
        icon:     'coffee',            
        subtitle: 'los proyectos en los que he trabajado',
        mirar:    '',
        source:   '',
        img:      '',
        paragraph:'',
        tags:     '',
},{
        title:    'Contacto',
        type:     'info',
        icon:     'work-alt',            
        subtitle: 'Informaion de contacto.',
        mirar:    '',
        source:   '',
        img:      '',
        paragraph:'',
        tags:     '',
},
];
export const articulos = main.concat(habilidades, proyectos, experiencias, contacto);