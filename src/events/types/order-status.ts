export enum OrderStatus {
    //when the order has been create, but the ticket it is trying to order has not been reserved
    Created = 'created',
    
    // The ticket the order is trying to reserve has already been reserved, 
    // When the user cancelled the order.
    // The order expires boefore the payment
    Cancelled = 'cancelled',

    //The order has successfully reserved the ticket.
    AwaitingPayment = 'awaiting:payment',

    //the order hase reserved the ticket and the user has provided payment succesfully
    Complete = 'complete'
}