package io.github.IulianaGheorghe.event_ticket.mappers;

import io.github.IulianaGheorghe.event_ticket.domain.CreateEventRequest;
import io.github.IulianaGheorghe.event_ticket.domain.CreateTicketTypeRequest;
import io.github.IulianaGheorghe.event_ticket.domain.dtos.CreateEventRequestDto;
import io.github.IulianaGheorghe.event_ticket.domain.dtos.CreateEventResponseDto;
import io.github.IulianaGheorghe.event_ticket.domain.dtos.CreateTicketTypeRequestDto;
import io.github.IulianaGheorghe.event_ticket.domain.entities.Event;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface EventMapper {

    CreateTicketTypeRequest fromDto(CreateTicketTypeRequestDto dto);

    CreateEventRequest fromDto(CreateEventRequestDto dto);

    CreateEventResponseDto toDto(Event event);
}
