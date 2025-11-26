package io.github.IulianaGheorghe.event_ticket.services;

import io.github.IulianaGheorghe.event_ticket.domain.entities.QrCode;
import io.github.IulianaGheorghe.event_ticket.domain.entities.Ticket;

import java.util.Optional;
import java.util.UUID;

public interface QrCodeService {

    QrCode generateQrCode(Ticket ticket);
    byte[] getQrCodeImageForUserAndTicket(UUID userId, UUID ticketId);
}
