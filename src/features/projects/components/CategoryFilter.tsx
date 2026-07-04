import { PROJECT_CATEGORIES } from '../types';
import type { ProjectCategory } from '../types';

type FilterValue = ProjectCategory | 'All';

interface CategoryFilterProps {
  active: FilterValue;
  onChange: (category: FilterValue) => void;
}

const CategoryFilter = ({ active, onChange }: CategoryFilterProps) => (
  <div className="projects-filter" role="tablist" aria-label="Filter projects by category">
    {PROJECT_CATEGORIES.map((category) => (
      <button
        key={category}
        type="button"
        role="tab"
        aria-selected={active === category}
        className={`projects-filter__btn ${active === category ? 'projects-filter__btn--active' : ''}`}
        onClick={() => onChange(category)}
      >
        {category}
      </button>
    ))}
  </div>
);

export default CategoryFilter;
