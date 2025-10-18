import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plane, Clock, Calendar } from "lucide-react";

interface FlightCardProps {
  flightNumber: string;
  airline: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  date: string;
  price: string;
  duration: string;
  available: boolean;
}

export const FlightCard = ({
  flightNumber,
  airline,
  from,
  to,
  departureTime,
  arrivalTime,
  date,
  price,
  duration,
  available,
}: FlightCardProps) => {
  return (
    <Card className="p-6 hover:shadow-[var(--shadow-hover)] transition-all duration-300 shadow-[var(--shadow-flight-card)]">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg text-primary">{airline}</h3>
              <p className="text-sm text-muted-foreground">{flightNumber}</p>
            </div>
            {available ? (
              <Badge className="bg-accent text-accent-foreground">Available</Badge>
            ) : (
              <Badge variant="secondary">Fully Booked</Badge>
            )}
          </div>

          <div className="flex items-center gap-6">
            <div className="flex-1">
              <p className="text-2xl font-bold text-foreground">{departureTime}</p>
              <p className="text-sm text-muted-foreground">{from}</p>
            </div>

            <div className="flex flex-col items-center px-4">
              <Plane className="w-5 h-5 text-accent rotate-90 mb-1" />
              <div className="h-px w-24 bg-border" />
              <p className="text-xs text-muted-foreground mt-1">{duration}</p>
            </div>

            <div className="flex-1 text-right">
              <p className="text-2xl font-bold text-foreground">{arrivalTime}</p>
              <p className="text-sm text-muted-foreground">{to}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {duration}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-end gap-3 md:min-w-[160px]">
          <div className="text-right">
            <p className="text-sm text-muted-foreground">From</p>
            <p className="text-3xl font-bold text-primary">{price}</p>
          </div>
          <Button 
            size="lg" 
            disabled={!available}
            variant="accent"
            className="w-full"
          >
            {available ? "Book Now" : "Sold Out"}
          </Button>
        </div>
      </div>
    </Card>
  );
};
