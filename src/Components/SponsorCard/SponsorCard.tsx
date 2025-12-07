import { Calendar, Mail, Target, FileText, Tag } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/Components/ui/card';
import type { Sponsorship, SponsorshipStatus } from '@/types/typeSponsor';
import { Badge } from '../ui/badge';

interface SponsorCardProps {
    sponsorship: Sponsorship;
    index: number;
}

const statusLabels: Record<SponsorshipStatus, string> = {
    approved: 'Aprovado',
    pending: 'Pendente',
    rejected: 'Rejeitado',
};

export function SponsorCard({ sponsorship, index }: SponsorCardProps) {
    const formatDate = (date: string) => {
        return new Date(date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        });
    };

    return (
        <Card
            className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
        >
            <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                        <h3 className="font-semibold leading-tight tracking-tight group-hover:text-primary transition-colors">
                            {sponsorship.sponsorName}
                        </h3>
                        <p className="text-sm text-muted-foreground">{sponsorship.eventName}</p>
                    </div>
                    <Badge>
                        {statusLabels[sponsorship.status]}
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center justify-between rounded-lg bg-secondary/50 p-3">
                    <span className="text-sm text-muted-foreground">Valor</span>
                    <span className="text-lg font-bold text-blue-600">
                        {sponsorship.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </span>
                </div>

                <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                        <FileText className="h-4 w-4 mt-0.5 text-muted-foreground shrink-0" />
                        <div>
                            <p className="font-medium text-foreground">Condições</p>
                            <p className="text-muted-foreground line-clamp-2">{sponsorship.conditions}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-2">
                        <Target className="h-4 w-4 mt-0.5 text-muted-foreground shrink-0" />
                        <div>
                            <p className="font-medium text-foreground">Resultados Esperados</p>
                            <p className="text-muted-foreground line-clamp-2">{sponsorship.expectedResults}</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-border/50 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{formatDate(sponsorship.startDate)} - {formatDate(sponsorship.endDate)}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Tag className="h-3.5 w-3.5" />
                        <span>{sponsorship.category}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Mail className="h-3.5 w-3.5" />
                        <span className="truncate max-w-[150px]">{sponsorship.contactEmail}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
