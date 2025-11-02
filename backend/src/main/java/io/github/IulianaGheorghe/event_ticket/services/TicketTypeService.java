package io.github.IulianaGheorghe.event_ticket.services;

import io.github.IulianaGheorghe.event_ticket.domain.entities.Ticket;

import java.util.UUID;

public interface TicketTypeService {
    Ticket purchaseTicket(UUID userId, UUID ticketType);
}
