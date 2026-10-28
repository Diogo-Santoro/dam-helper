import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';
import type { ModuleItem } from '@/types/module';
import './ModuleCard.css';

export interface ModuleCardProps {
  module: ModuleItem;
  onExplore?: (id: string) => void;
}

export const ModuleCard = ({ module, onExplore }: ModuleCardProps) => {
  return (
    <article className="molecule-module-card">
      <div className="molecule-module-card__header">
        <Badge variant="primary">{module.sigla}</Badge>
        <span className="molecule-module-card__count">
          {module.topicsCount} {module.topicsCount === 1 ? 'tema' : 'temas'}
        </span>
      </div>
      <h3 className="molecule-module-card__title">{module.name}</h3>
      <p className="molecule-module-card__description">{module.description}</p>
      <div className="molecule-module-card__footer">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onExplore?.(module.id)}
          aria-label={`Ver apuntes de ${module.name}`}
        >
          Ver apuntes →
        </Button>
      </div>
    </article>
  );
};
