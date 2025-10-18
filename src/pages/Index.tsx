import { Header } from "@/components/Header";
import { FlightSearchForm } from "@/components/FlightSearchForm";
import { FlightCard } from "@/components/FlightCard";
import heroImage from "@/assets/hero-airplane.jpg";

const Index = () => {
  // Sample flight data - will be replaced with real data from backend
  const sampleFlights = [
    {
      id: 1,
      flightNumber: "SK101",
      airline: "SkyLine Airways",
      from: "New York (JFK)",
      to: "London (LHR)",
      departureTime: "10:30",
      arrivalTime: "22:45",
      date: "Dec 15, 2025",
      price: "$459",
      duration: "7h 15m",
      available: true,
    },
    {
      id: 2,
      flightNumber: "EA205",
      airline: "Eagle Air",
      from: "Los Angeles (LAX)",
      to: "Tokyo (NRT)",
      departureTime: "14:20",
      arrivalTime: "18:35+1",
      date: "Dec 16, 2025",
      price: "$689",
      duration: "11h 15m",
      available: true,
    },
    {
      id: 3,
      flightNumber: "OA412",
      airline: "Ocean Airlines",
      from: "Dubai (DXB)",
      to: "Singapore (SIN)",
      departureTime: "08:15",
      arrivalTime: "18:30",
      date: "Dec 18, 2025",
      price: "$549",
      duration: "7h 15m",
      available: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
        
        <div className="relative z-10 container mx-auto px-4 text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Your Journey Begins Here
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Search and book flights to destinations worldwide with ease and confidence
          </p>
        </div>
      </section>

      {/* Search Form */}
      <section className="container mx-auto px-4 -mt-20 relative z-20 mb-16">
        <FlightSearchForm />
      </section>

      {/* Featured Flights */}
      <section className="container mx-auto px-4 pb-20">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Featured Flights</h2>
          <p className="text-muted-foreground">Popular routes and best deals</p>
        </div>
        
        <div className="grid gap-6">
          {sampleFlights.map((flight) => (
            <FlightCard key={flight.id} {...flight} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
