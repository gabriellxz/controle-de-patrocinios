import CardStats from "@/Components/CardStats/CardStats";
import Header from "@/Components/Header/Header";
import ModalAddSponsor from "@/Components/ModalAddSponsor/ModalAddSponsor";
import { SponsorList } from "@/Components/SponsorList/SponsorList";
import StatusFilter from "@/Components/StatusFilter/StatusFilter";
import { mockSponsorships } from "@/data/mockSponsors";
import type { SponsorshipStatus } from "@/types/typeSponsor";
import { useMemo, useState } from "react";

export default function Dahsboard() {

    const [openModal, setOpenModal] = useState(false);
    const [activeFilter, setActiveFilter] = useState<SponsorshipStatus | 'all'>('all');

    const filteredSponsorships = useMemo(() => {
        if (activeFilter === 'all') return mockSponsorships;
        return mockSponsorships.filter((s) => s.status === activeFilter);
    }, [mockSponsorships, activeFilter]);

    const counts = useMemo(() => ({
        all: mockSponsorships.length,
        approved: mockSponsorships.filter((s) => s.status === 'approved').length,
        pending: mockSponsorships.filter((s) => s.status === 'pending').length,
        rejected: mockSponsorships.filter((s) => s.status === 'rejected').length,
    }), [mockSponsorships]);

    return (
        <div className="min-h-screen">
            <Header openModal={openModal} setOpenModal={setOpenModal} />
            <main className="pt-[130px] w-full flex px-5 flex-col items-center">

                <section className="w-full max-w-[1200px]">
                    <h1 className="font-bold text-xl">Visão geral</h1>
                    <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                        <CardStats sponsors={mockSponsorships} />
                    </div>
                </section>

                <section className="mt-5 w-full max-w-[1200px] mb-5">
                    <div className="sm:flex sm:items-center sm:justify-between mb-5">
                        <h1 className="font-bold text-xl">Patrocínios</h1>
                        <div>
                            <StatusFilter
                                activeFilter={activeFilter}
                                onFilterChange={setActiveFilter}
                                counts={counts}
                            />
                        </div>
                    </div>
                    <SponsorList sponsorships={filteredSponsorships} />
                </section>
            </main>

            <ModalAddSponsor openModal={openModal} setOpenModal={setOpenModal} />
        </div>
    )
}