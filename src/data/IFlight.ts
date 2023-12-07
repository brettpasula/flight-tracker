export default interface IFlight { 
    flightNumberPrefix: string;
    flightNumber: number;
    fromIATAAirportCode: string;
    toIATAAirportCode: string;
    departureDate: Date;
    aircraftRegistration: string;
}