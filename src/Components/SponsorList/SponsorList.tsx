import type { Sponsorship } from '@/types/typeSponsor';
import { PackageOpen } from 'lucide-react';
import { SponsorCard } from '../SponsorCard/SponsorCard';

interface SponsorshipListProps {
  sponsorships: Sponsorship[];
}

export function SponsorList({ sponsorships }: SponsorshipListProps) {
  if (sponsorships.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
          <PackageOpen className="h-8 w-8 text-muted-foreground" />
        </div>
        <h3 className="mt-4 text-lg font-semibold">Nenhum patrocínio encontrado</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Não há patrocínios com o filtro selecionado.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {sponsorships.map((sponsorship, index) => (
        <SponsorCard key={sponsorship.id} sponsorship={sponsorship} index={index} />
      ))}
    </div>
  );
}
