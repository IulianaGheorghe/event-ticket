package io.github.IulianaGheorghe.event_ticket.services;

import io.github.IulianaGheorghe.event_ticket.domain.CreateEventRequest;
import io.github.IulianaGheorghe.event_ticket.domain.entities.Event;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.UUID;

public interface EventService {
    Event createEvent(UUID organizerID, CreateEventRequest event);
    Page<Event> listEventsForOrganizer(UUID organizerId, Pageable pageable);
}
