import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose, DialogFooter } from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Textarea } from "../ui/textarea";

interface ModalAddSponsorProps {
    openModal: boolean;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ModalAddSponsor({ openModal, setOpenModal }: ModalAddSponsorProps) {
    const [dataInicio, setDataInicio] = useState<Date | undefined>(undefined);
    const [dataFim, setDataFim] = useState<Date | undefined>(undefined);

    return (
        <Dialog open={openModal} onOpenChange={setOpenModal}>
            <form>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Novo patrocínio</DialogTitle>
                    </DialogHeader>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="nomePatrocinador" className="block text-sm font-medium">Nome do Patrocinador</label>
                            <Input id="nomePatrocinador" placeholder="Ex: TechCorp Brasil" />
                        </div>
                        <div>
                            <label htmlFor="nomeEvento" className="block text-sm font-medium">Nome do Evento</label>
                            <Input id="nomeEvento" placeholder="Ex: Conferência Tech 2024" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                            <label htmlFor="valor" className="block text-sm font-medium">Valor (R$)</label>
                            <Input id="valor" placeholder="5000" />
                        </div>
                        <div>
                            <label htmlFor="categoria" className="block text-sm font-medium">Categoria</label>
                            <Input id="categoria" placeholder="Ex: Tecnologia" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="status" className="block text-sm font-medium">Status</label>
                            <Select>
                                <SelectTrigger id="status" className="w-full">
                                    <SelectValue placeholder="Selecione um status" />
                                </SelectTrigger>
                                <SelectContent className="w-full">
                                    <SelectItem value="pendente">Pendente</SelectItem>
                                    <SelectItem value="aprovado">Aprovado</SelectItem>
                                    <SelectItem value="rejeitado">Rejeitado</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="dataInicio" className="block text-sm font-medium">Data de Início</label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {dataInicio ? format(dataInicio, "dd/MM/yyyy") : "Selecione uma data"}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent align="start" className="w-auto p-0">
                                    <Calendar mode="single" selected={dataInicio} onSelect={setDataInicio} />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div>
                            <label htmlFor="dataFim" className="block text-sm font-medium">Data de Término</label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {dataFim ? format(dataFim, "dd/MM/yyyy") : "Selecione uma data"}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent align="start" className="w-auto p-0">
                                    <Calendar mode="single" selected={dataFim} onSelect={setDataFim} />
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="emailContato" className="block text-sm font-medium">E-mail de Contato</label>
                        <Input id="emailContato" placeholder="contato@empresa.com" />
                    </div>
                    <div>
                        <label htmlFor="condicoesPatrocinador" className="block text-sm font-medium">Condições do Patrocínio</label>
                        <Textarea placeholder="Observações adicionais" className="w-full" rows={4} />
                    </div>
                    <DialogFooter>
                        <DialogClose>
                            <Button className="w-full" variant="outline">Cancelar</Button>
                        </DialogClose>
                        <Button className="bg-blue-600 hover:bg-blue-700">Salvar</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}