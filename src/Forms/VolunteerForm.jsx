import { useState } from 'react';
import InputErrorMessage from './input/InputErrorMessage';
import Button from './input/Button';
import Spacer from '../common/Spacer';
import FormItem from './input/FormItem';
import Input from './input/Input';

const initialData = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    daysAvailable: '',
    timeAvailable: '',
    experience: '',
    additionalInformation: ''    
};

const errorMessages = {
    firstNameRequired: 'First name is required.',
    lastNameRequired: 'Last name is required',
    emailAddressRequired: 'Email is required.',
    phoneNumberRequired: 'Phone Number is required.',
    numberOfGuestsRequired: 'At least 1 guest required.',
    streetAddressRequired: 'Street Address is required.',
    cityRequired: 'City is required.',
    stateRequired: 'State is required.',
    zipCodeRequired: 'Zip Code is required.',
    daysAvailable: 'Available Days is required',
    timeAvailable: 'Available Times is required',
};

const VolunteerForm = ({ handleCloseForm }) => {
    const [data, setData] = useState({ ...initialData });
    const [hasErrors, setHasErrors] = useState(false);

    const isValid = () => {
        return (
            data.firstName.trim() !== '' &&
            data.lastName.trim() !== '' &&
            data.emailAddress.trim() !== '' &&
            Number(data.phoneNumber) <= 10 &&
            data.streetAddress.trim() !== '' &&
            data.city.trim() !== '' &&
            data.state.trim() !== '' &&
            Number(data.zipCode) <= 5 &&
            data.daysAvailable.trim() !== '' &&
            data.timeAvailable.trim() !== '' &&
            data.experience.trim() !== '' &&
            data.additionalInformation.trim() !== ''
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
            handleCloseForm();
        }
    };

    return (
        <>
            <form className ="volunteer-form-grid" onSubmit={handleSubmit}>
                <h2>PERSONAL INFORMATION</h2>
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
                            value={data.firstName}
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
                            label="Email Address"
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
                            type="number"
                            min="10"
                            value={data.phoneNumber}
                            required={true}
                            handleChange={handleDataChange}
                        />
                        <InputErrorMessage
                            hasError={hasErrors && Number(data.phoneNumber) < 10}
                            msg={errorMessages['phoneNumberRequired']}
                        />
                    </FormItem>
                    <FormItem classes="street-address-item">
                        <Input 
                            id="streetAddress"
                            label="Street Address"
                            type="text"
                            value={data.streetAddress}
                            required={true}
                            handleChange={handleDataChange}
                        />
                        <InputErrorMessage
                            hasError={hasErrors && data.streetAddress === ''}
                            msg={errorMessages['streetAddressRequired']}
                        />
                    </FormItem>
                    <FormItem classes="state-item">
                        <Input 
                            id="state"
                            label="State"
                            type="text"
                            value={data.state}
                            required={true}
                            handleChange={handleDataChange}
                        />
                        <InputErrorMessage
                            hasError={hasErrors && data.state === ''}
                            msg={errorMessages['stateRequired']}
                        />
                    </FormItem>
                    <FormItem classes="zip-code-item">
                        <Input 
                            id="zipCode"
                            label="Zip Code"
                            type="number"
                            min="5"
                            value={data.zipCode}
                            required={true}
                            handleChange={handleDataChange}
                        />
                        <InputErrorMessage
                            hasError={hasErrors && Number(data.zipCode) < 5}
                            msg={errorMessages['zipCodeRequired']}
                        />
                        </FormItem>

                <h2>AVAILABILITY</h2>
                    <FormItem classes="days-available-item">
                        <Input 
                            id="daysAvailable"
                            label="What days are you available?"
                            type="text"
                            value={data.daysAvailable}
                            required={true}
                            handleChange={handleDataChange}
                        />
                        <InputErrorMessage
                            hasError={hasErrors && data.daysAvailable === ''}
                            msg={errorMessages['daysAvailableRequired']}
                        />
                    </FormItem>
                    <FormItem classes="time-available-item">
                        <Input 
                            id="timeAvailable"
                            label="What time(s) are you generally available?"
                            type="text"
                            value={data.timeAvailable}
                            required={true}
                            handleChange={handleDataChange}
                        />
                        <InputErrorMessage
                            hasError={hasErrors && data.timeAvailable === ''}
                            msg={errorMessages['timeAvailableRequired']}
                        />
                    </FormItem>

                <h2>TELL US ABOUT YOU</h2>
                    <FormItem classes="experience-item">
                        <Input 
                            id="experience"
                            label="Why do you want to volunteer at The Daily Purr?"
                            type="text"
                            value={data.experience}
                            required={true}
                            handleChange={handleDataChange}
                        />
                        <InputErrorMessage
                            hasError={hasErrors && data.experience === ''}
                            msg={errorMessages['experienceRequired']}
                        />
                    </FormItem>
                    <FormItem classes="additional-information-item">
                        <Input 
                            id="additionalInformation"
                            label="Is there anything else we should know?"
                            type="text"
                            value={data.additionalInformation}
                            required={true}
                            handleChange={handleDataChange}
                        />
                    </FormItem>

                    <Button
                    id={`submit-adoption-request`}
                    type="submit"
                    label="Submit Application"
                    classes="submit-adotpion-button"
                    />
            </form>
        </>
     );
}

export default VolunteerForm;
