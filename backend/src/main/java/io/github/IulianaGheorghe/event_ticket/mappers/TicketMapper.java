package io.github.IulianaGheorghe.event_ticket.mappers;

import io.github.IulianaGheorghe.event_ticket.domain.dtos.ListTicketResponseDto;
import io.github.IulianaGheorghe.event_ticket.domain.dtos.ListTicketTicketTypeResponseDto;
import io.github.IulianaGheorghe.event_ticket.domain.entities.Ticket;
import io.github.IulianaGheorghe.event_ticket.domain.entities.TicketType;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface TicketMapper {

    ListTicketTicketTypeResponseDto toListTicketTicketTypeResponseDto(TicketType ticketType);

    ListTicketResponseDto toListTicketResponseDto(Ticket ticket);

}
