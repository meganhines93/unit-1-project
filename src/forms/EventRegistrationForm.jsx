import { useState } from 'react';
import InputErrorMessage from './input/InputErrorMessage';
import Button from './input/Button';
import Spacer from '../common/Spacer';
import FormItem from './input/FormItem';
import Input from './input/Input';

const initialData = {
    eventId: null,
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    numberOfGuests: '',
};

const errorMessages = {
    firstNameRequired: 'First name is required.',
    lastNameRequired: 'Last name is required',
    emailAddressRequired: 'Email is required.',
    phoneNumberRequired: 'Phone Number is required.',
    numberOfGuestsRequired: 'At least 1 guest required.'
};

const EventRegistrationForm = ({ event, registration, setRegistration, handleCloseForm, setShowSuccess }) => {
    const [data, setData] = useState( registration || { ...initialData, eventId: event.id });
    const [hasErrors, setHasErrors] = useState(false);

    const isValid = () => {
        return (
            data.firstName.trim() !== '' &&
            data.lastName.trim() !== '' &&
            data.emailAddress.trim() !== '' &&
            data.phoneNumber.trim() !== '' &&
            Number(data.numberOfGuests) >= 1
        );
    }; 

    const handleDataChange = (domEvent) => {
        const { id, value } = domEvent.target;
        setData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = (domEvent) => {
        domEvent.preventDefault();
        if (!isValid()) {
            setHasErrors(true);
        } else {
            setRegistration(data);
            setShowSuccess(true);
            handleCloseForm();
        }

        setTimeout(() => {
            setShowSuccess(false);
        }, 3000)
    };

    return (
        <>
            <h4>Register for This Event</h4>
            <h5 className="event-registration-event-title">{event.title}</h5>
            <Spacer marginY="10px" />
            <form className="register-form-grid" onSubmit={handleSubmit}>
                <FormItem classes="first-name-item">
                    <Input 
                        id="firstName"
                        label="First Name"
                        type="text"
                        value={data.firstName}
                        required={true}
                        handleChange={handleDataChange}
                    />
                    <InputErrorMessage
                        hasError={hasErrors && data.firstName === ''}
                        msg={errorMessages['firstNameRequired']}
                    />
                </FormItem>

                <FormItem classes="last-name-item">
                    <Input 
                        id="lastName"
                        label="Last Name"
                        type="text"
                        value={data.lastName}
                        required={true}
                        handleChange={handleDataChange}
                    />
                    <InputErrorMessage
                        hasError={hasErrors && data.lastName === ''}
                        msg={errorMessages['lastNameRequired']}
                    />
                </FormItem>

                <FormItem classes="email-address-item">
                    <Input 
                        id="emailAddress"
                        label="Email"
                        type="text"
                        value={data.emailAddress}
                        required={true}
                        handleChange={handleDataChange}
                    />
                    <InputErrorMessage
                        hasError={hasErrors && data.emailAddress === ''}
                        msg={errorMessages['emailAddressRequired']}
                    />
                </FormItem>

                <FormItem classes="phone-number-item">
                    <Input 
                        id="phoneNumber"
                        label="Phone Number"
                        type="text"
                        value={data.phoneNumber}
                        required={true}
                        handleChange={handleDataChange}
                    />
                    <InputErrorMessage
                        hasError={hasErrors && Number(data.phoneNumber) < 10}
                        msg={errorMessages['phoneNumberRequired']}
                    />
                </FormItem>

                <FormItem classes="number-of-guests-item">
                    <Input 
                        id="numberOfGuests"
                        label="Number of Guests"
                        type="number"
                        min="1"
                        value={data.numberOfGuests}
                        required={true}
                        handleChange={handleDataChange}
                    />
                    <InputErrorMessage
                        hasError={hasErrors && Number(data.numberOfGuests) < 1}
                        msg={errorMessages['numberOfGuestsRequired']}
                    />
                </FormItem>

            <div className="registration-button-container">
                <Button
                    id={`cancel-event-${event.id}`}
                    type="button"
                    label="Cancel"
                    classes="cancel-registration-button"
                    handleClick={handleCloseForm}
                />

                <Button
                    id={`submit-event-${event.id}`}
                    type="submit"
                    label={registration
                            ? "Save Changes"
                            : "Reserve"
                            }
                    classes="submit-register-button"
                />
            </div>
            </form>
        </>
    );
}

export default EventRegistrationForm;