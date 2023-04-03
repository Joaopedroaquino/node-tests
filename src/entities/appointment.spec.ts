import { expect, test } from 'vitest'
import { Appointment } from './appointment'

test('create an appointment', () => {
    const appointment = new Appointment({
        customer: 'Any customer',
        startsAt: new Date(),
        endsAt: new Date()
    });
    expect(appointment).toBeInstanceOf(Appointment);
    expect(appointment.customer).toEqual('Any customer');
});

test('cannot create appointment with end dat before strat date', () => {
    const startsAt = new Date()
    const endsAt = new Date()

    endsAt.setDate(endsAt.getDate() - 1)

    expect(() => {
        return new Appointment({
            customer: 'Any customer',
            startsAt,
            endsAt
        });
    }).toThrow()

})