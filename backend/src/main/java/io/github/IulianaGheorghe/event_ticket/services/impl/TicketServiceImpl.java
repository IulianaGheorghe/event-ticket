package io.github.IulianaGheorghe.event_ticket.services.impl;

import io.github.IulianaGheorghe.event_ticket.domain.entities.Ticket;
import io.github.IulianaGheorghe.event_ticket.repositories.TicketRepository;
import io.github.IulianaGheorghe.event_ticket.services.TicketService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class TicketServiceImpl implements TicketService {

    private final TicketRepository ticketRepository;

    @Override
    public Page<Ticket> listTicketsForUser(UUID userId, Pageable pageable) {
        return ticketRepository.findByPurchaserId(userId, pageable);
    }
}
