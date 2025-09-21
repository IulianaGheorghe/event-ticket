// Concert photo by Aditya Chinchure on Unsplash
import { useNavigate } from "react-router-dom";
import concertImage from "../assets/concert.jpg";
import Button from "../components/Button";

export default function OrganizerLandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-center items-center gap-x-[clamp(0.5rem,7vw,10rem)] min-h-screen p-10 w-[min(100%,80rem)] mx-auto">
        <div className="flex-2/3 space-y-6">
          <h1 className="text-5xl font-bold">
            Create, Manage & Sell Event Tickets with Ease
          </h1>
          <p className="text-lg">
            A complete platform for event organizers to create events, sell
            tickets and validate attendees with QR Codes.
          </p>
          <div className="space-x-8">
            <Button
              type="button"
              onClick={() => navigate("/dashboard/create-event")}
            >
              Create Event
            </Button>
            <Button type="button" onClick={() => {}}>
              Browse Events
            </Button>
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
