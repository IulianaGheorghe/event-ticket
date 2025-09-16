import React from "react";
// Concert photo by Aditya Chinchure on Unsplash
import concertImage from "../assets/concert.jpg";
import Button from "../components/Button";

export default function OrganizerLandingPage() {
  return (
    <>
      <div className="flex justify-between items-center min-h-screen p-10">
        <div className="flex-2/3 space-y-6">
          <h1 className="text-5xl font-bold">
            Create, Manage & Sell Event Tickets
          </h1>
          <p className="text-lg">
            A complete platform for event organizers to create events, sell
            tickets and validate attendees with QR Codes.
          </p>
          <div className="space-x-8">
            <Button onClick={() => {}}>Create Event</Button>
            <Button onClick={() => {}}>Browse Events</Button>
          </div>
        </div>
        <div className="flex-2/3">
          <img
            src={concertImage}
            alt="Concert image"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </>
  );
}
