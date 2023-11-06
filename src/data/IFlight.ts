export default interface IFlight { 
    flightNumberPrefix: string;
    flightNumber: number;
    fromIATAAirportCode: string;
    toIATAAirportCode: string;
    departureTime: Date;
    arrivalTime: Date;
    aircraftRegistration: string;
}