export interface AppointmentProps {
    customer: string;
    startsAt: Date;
    endsAt: Date
}

export class Appointment {
    private props: AppointmentProps;

    get customer() {
        return this.customer;
    };

    get startsAt() {
        return this.startsAt;
    };

    get endsAt() {
        return this.endsAt;
    }

    constructor(props: AppointmentProps) {
        this.props = props
    }
}
