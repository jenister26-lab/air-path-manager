import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Plane } from "lucide-react";

export const FlightSearchForm = () => {
  const [searchData, setSearchData] = useState({
    from: "",
    to: "",
    departDate: "",
    returnDate: "",
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search functionality will be implemented later with backend
    console.log("Search flights:", searchData);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto p-6 shadow-[var(--shadow-flight-card)] backdrop-blur-sm bg-card/95">
      <form onSubmit={handleSearch} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="from" className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              From
            </Label>
            <Input
              id="from"
              placeholder="Departure city"
              value={searchData.from}
              onChange={(e) => setSearchData({ ...searchData, from: e.target.value })}
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="to" className="flex items-center gap-2">
              <Plane className="w-4 h-4 text-primary" />
              To
            </Label>
            <Input
              id="to"
              placeholder="Destination city"
              value={searchData.to}
              onChange={(e) => setSearchData({ ...searchData, to: e.target.value })}
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="depart" className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              Departure Date
            </Label>
            <Input
              id="depart"
              type="date"
              value={searchData.departDate}
              onChange={(e) => setSearchData({ ...searchData, departDate: e.target.value })}
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="return" className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              Return Date (Optional)
            </Label>
            <Input
              id="return"
              type="date"
              value={searchData.returnDate}
              onChange={(e) => setSearchData({ ...searchData, returnDate: e.target.value })}
              className="h-12"
            />
          </div>
        </div>

        <Button type="submit" size="lg" className="w-full md:w-auto md:min-w-[200px]">
          Search Flights
        </Button>
      </form>
    </Card>
  );
};
