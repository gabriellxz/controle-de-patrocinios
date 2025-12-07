import type { SponsorshipStatus } from "@/types/typeSponsor";

interface StatusFilterProps {
    activeFilter: SponsorshipStatus | 'all';
    onFilterChange: (filter: SponsorshipStatus | 'all') => void;
    counts: Record<SponsorshipStatus | 'all', number>;
}

const filters: { key: SponsorshipStatus | 'all'; label: string }[] = [
    { key: 'all', label: 'Todos' },
    { key: 'approved', label: 'Aprovados' },
    { key: 'pending', label: 'Pendentes' },
    { key: 'rejected', label: 'Rejeitados' },
];

export default function StatusFilter({ activeFilter, onFilterChange, counts }: StatusFilterProps) {
    return (
        <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
                <button
                    key={filter.key}
                    onClick={() => onFilterChange(filter.key)}
                    className={
                        `inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all ${activeFilter === filter.key
                            ? 'bg-blue-600 text-primary-foreground shadow-sm'
                            : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                        }`}
                >
                    {filter.label}
                    <span
                        className={
                            `inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-xs font-semibold ${activeFilter === filter.key
                                ? 'bg-primary-foreground/20 text-primary-foreground'
                                : 'bg-muted text-muted-foreground'
                            }`}
                    >
                        {counts[filter.key]}
                    </span>
                </button>
            ))}
        </div>
    )
}