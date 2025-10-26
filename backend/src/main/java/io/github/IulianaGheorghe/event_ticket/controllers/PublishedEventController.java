package io.github.IulianaGheorghe.event_ticket.controllers;

import io.github.IulianaGheorghe.event_ticket.domain.dtos.ListPublishedEventResponseDto;
import io.github.IulianaGheorghe.event_ticket.domain.entities.Event;
import io.github.IulianaGheorghe.event_ticket.mappers.EventMapper;
import io.github.IulianaGheorghe.event_ticket.services.EventService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/v1/published-events")
@RequiredArgsConstructor
public class PublishedEventController {
    private final EventMapper eventMapper;
    private final EventService eventService;

    @GetMapping
    public ResponseEntity<Page<ListPublishedEventResponseDto>> listPublishedEvents(
            @RequestParam(required = false) String q,
            Pageable pageable) {

        Page<Event> publishedEvents;
        if (null != q && !q.trim().isEmpty()) {
            publishedEvents = eventService.searchPublishedEvents(q, pageable);
        } else {
            publishedEvents = eventService.listPublishedEvents(pageable);
        }
        return ResponseEntity.ok(
                publishedEvents.map(eventMapper::toListPublishedEventResponseDto)
        );
    }
}
