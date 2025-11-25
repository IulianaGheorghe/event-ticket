package io.github.IulianaGheorghe.event_ticket.domain.dtos;

import io.github.IulianaGheorghe.event_ticket.domain.entities.TicketStatusEnum;
import io.github.IulianaGheorghe.event_ticket.domain.entities.TicketType;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GetTicketResponseDto {
    private UUID id;
    private TicketStatusEnum status;
    private String name;
    private Double price;
    private String description;
    private String eventName;
    private String eventVenue;
    private LocalDateTime eventStart;
    private LocalDateTime eventEnd;
}
