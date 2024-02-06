export default interface IFlight {
    id?: string, 
    flightNumberPrefix: string;
    flightNumber: number;
    fromIATAAirportCode: string;
    toIATAAirportCode: string;
    departureDate: Date;
    aircraftRegistration: string;
}