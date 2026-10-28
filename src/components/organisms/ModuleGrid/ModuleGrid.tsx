import { ModuleCard } from '@/components/molecules/ModuleCard';
import type { ModuleItem } from '@/types/module';
import './ModuleGrid.css';

export interface ModuleGridProps {
  modules: ModuleItem[];
  onSelectModule?: (id: string) => void;
}

export const ModuleGrid = ({ modules, onSelectModule }: ModuleGridProps) => {
  return (
    <section className="organism-module-grid">
      <div className="organism-module-grid__header">
        <h2 className="organism-module-grid__title">Asignaturas de 1º DAM</h2>
        <p className="organism-module-grid__subtitle">
          Selecciona un módulo para acceder a resúmenes, chuletas y simuladores de examen.
        </p>
      </div>
      <div className="organism-module-grid__cards">
        {modules.map((item) => (
          <ModuleCard key={item.id} module={item} onExplore={onSelectModule} />
        ))}
      </div>
    </section>
  );
};
