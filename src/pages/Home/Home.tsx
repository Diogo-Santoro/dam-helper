import { ModuleGrid } from '@/components/organisms/ModuleGrid';
import type { ModuleItem } from '@/types/module';
import './Home.css';

const FIRST_YEAR_MODULES: ModuleItem[] = [
  {
    id: 'prog',
    sigla: 'PROG',
    name: 'Programación',
    description:
      'Fundamentos de Java, programación orientada a objetos, estructuras y colecciones.',
    topicsCount: 6,
  },
  {
    id: 'bd',
    sigla: 'BD',
    name: 'Bases de Datos',
    description: 'Modelado E/R, normalización, diseño relacional y consultas SQL avanzadas.',
    topicsCount: 5,
  },
  {
    id: 'lmsgi',
    sigla: 'LMSGI',
    name: 'Lenguajes de Marcas',
    description: 'HTML5, CSS3, XML, esquemas XSD, transformaciones XSLT y sindicación.',
    topicsCount: 4,
  },
  {
    id: 'si',
    sigla: 'SI',
    name: 'Sistemas Informáticos',
    description: 'Hardware, gestión de Linux y Windows, permisos, redes y comandos bash.',
    topicsCount: 5,
  },
  {
    id: 'ed',
    sigla: 'ED',
    name: 'Entornos de Desarrollo',
    description:
      'Control de versiones con Git, diagramas UML, refactorización y testing con JUnit.',
    topicsCount: 4,
  },
  {
    id: 'fol',
    sigla: 'FOL',
    name: 'Formación y Orientación Laboral',
    description: 'Derecho laboral, contratos, nóminas, prevención de riesgos y búsqueda activa.',
    topicsCount: 3,
  },
];

export const Home = () => {
  const handleSelectModule = (id: string) => {
    alert(
      `Módulo seleccionado: ${id.toUpperCase()}. Próximamente se conectará con el visor de apuntes.`
    );
  };

  return (
    <div className="page-home">
      <section className="page-home__hero">
        <h1 className="page-home__title">Apuntes y Recursos Compartidos</h1>
        <p className="page-home__lead">
          Centraliza resúmenes, chuletas y simuladores de examen de toda la clase en un único lugar.
          Contribuye con tus propios resúmenes abriendo un Pull Request.
        </p>
      </section>

      <ModuleGrid modules={FIRST_YEAR_MODULES} onSelectModule={handleSelectModule} />
    </div>
  );
};
