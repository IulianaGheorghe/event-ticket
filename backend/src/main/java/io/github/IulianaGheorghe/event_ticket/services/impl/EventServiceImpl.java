package io.github.IulianaGheorghe.event_ticket.services.impl;

import io.github.IulianaGheorghe.event_ticket.domain.CreateEventRequest;
import io.github.IulianaGheorghe.event_ticket.domain.entities.Event;
import io.github.IulianaGheorghe.event_ticket.domain.entities.TicketType;
import io.github.IulianaGheorghe.event_ticket.domain.entities.User;
import io.github.IulianaGheorghe.event_ticket.exceptions.UserNotFoundException;
import io.github.IulianaGheorghe.event_ticket.repositories.EventRepository;
import io.github.IulianaGheorghe.event_ticket.repositories.UserRepository;
import io.github.IulianaGheorghe.event_ticket.services.EventService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class EventServiceImpl implements EventService {

    private final UserRepository userRepository;
    private final EventRepository eventRepository;

    @Override
    public Event createEvent(UUID organizerID, CreateEventRequest event) {
        User organizer = userRepository.findById(organizerID)
                .orElseThrow(() -> new UserNotFoundException(
                        String.format(("User with ID '%s' not found"), organizerID)
                ));

        List<TicketType> ticketTypesToCreate = event.getTicketTypes().stream().map(
                ticketType -> {
                    TicketType ticketTypeToCreate = new TicketType();
                    ticketTypeToCreate.setName(ticketType.getName());
                    ticketTypeToCreate.setPrice(ticketType.getPrice());
                    ticketTypeToCreate.setDescription(ticketType.getDescription());
                    ticketTypeToCreate.setTotalAvailable(ticketType.getTotalAvailable());
                    return ticketTypeToCreate;
                }).toList();

        Event eventToCreate = new Event();
        eventToCreate.setName(event.getName());
        eventToCreate.setStart(event.getStart());
        eventToCreate.setEnd(event.getEnd());
        eventToCreate.setVenue(event.getVenue());
        eventToCreate.setSalesStart(event.getSalesStart());
        eventToCreate.setSalesEnd(event.getSalesEnd());
        eventToCreate.setStatus(event.getStatus());
        eventToCreate.setOrganizer(organizer);
        eventToCreate.setTicketTypes(ticketTypesToCreate);

        return eventRepository.save(eventToCreate);
    }
}
