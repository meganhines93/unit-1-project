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
    daysAvailable: [],
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
    daysAvailableRequired: 'Available Days is required',
    timeAvailableRequired: 'Available Times is required',
    experienceRequired: 'Experience is required'
};

const VolunteerForm = ({ handleCloseForm, setShowSuccess }) => {
    const [data, setData] = useState({ ...initialData });
    const [hasErrors, setHasErrors] = useState(false);

    const isValid = () => {
        return (
            data.firstName.trim() !== '' &&
            data.lastName.trim() !== '' &&
            data.emailAddress.trim() !== '' &&
            data.phoneNumber.trim() !== '' &&
            data.streetAddress.trim() !== '' &&
            data.city.trim() !== '' &&
            data.state.trim() !== '' &&
            data.zipCode.trim() !== '' &&
            data.daysAvailable.length > 0 &&
            data.timeAvailable.trim() !== '' &&
            data.experience.trim() !== ''
        );
    };

    const handleDataChange = (domEvent) => {
        const { id, value, type, checked } = domEvent.target;

        if (type === "checkbox") {
            if (checked) {
                setData((prevData) => ({
                    ...prevData,
                    daysAvailable: [...prevData.daysAvailable, value],
                }));
            } else {
                setData((prevData) => ({
                    ...prevData,
                    daysAvailable: prevData.daysAvailable.filter(
                        (day) => day !== value
                    ),
                }));
            }
        } else {
            setData((prevData) => ({
                ...prevData,
                [id]: value,
            }));
        }
    };

    const handleSubmit = (domEvent) => {
        domEvent.preventDefault();

        if (!isValid()) {
            setHasErrors(true);
        } else {
            console.log(data);

            setData({ ...initialData });
            setHasErrors(false);
            setShowSuccess(true);

            if (handleCloseForm) {
                handleCloseForm();
            }
        }
    };

    return (
        <>
            <div className="volunteer-form-content">
                <h3>Volunteer</h3>
                <h4>Make a Pawsitive Difference</h4>
                <p>Thank you for your interest in volunteering at The Daily Purr Cat Cafe!</p>
                <p>Your time and compassion help us care for our cats and create a welcoming experience for our community.</p>
            </div>

            <form className="volunteer-form-grid" onSubmit={handleSubmit}>
                <h2>PERSONAL INFORMATION</h2>
                <section className='personal-information-section'>
                <FormItem classes="first-name-item">
                    <label htmlFor="firstname">First Name</label>
                    <p></p>
                    <Input 
                        id="firstName"
                        type="text"
                        value={data.firstName}
                        handleChange={handleDataChange}
                    />
                    <InputErrorMessage
                        hasError={hasErrors && data.firstName === ''}
                        msg={errorMessages['firstNameRequired']}
                    />
                </FormItem>

                <Spacer marginY="20px" />

                <FormItem classes="last-name-item">
                    <label htmlFor="lastName">Last Name</label>
                    <p></p>
                    <Input 
                        id="lastName"
                        type="text"
                        value={data.lastName}
                        handleChange={handleDataChange}
                    />
                    <InputErrorMessage
                        hasError={hasErrors && data.lastName === ''}
                        msg={errorMessages['lastNameRequired']}
                    />
                </FormItem>

                <Spacer marginY="20px" />

                <FormItem classes="email-address-item">
                    <label htmlFor="emailAddress">Email Address</label>
                    <p></p>
                    <Input 
                        id="emailAddress"
                        type="email"
                        value={data.emailAddress}
                        handleChange={handleDataChange}
                    />
                    <InputErrorMessage
                        hasError={hasErrors && data.emailAddress === ''}
                        msg={errorMessages['emailAddressRequired']}
                    />
                </FormItem>

                <Spacer marginY="20px" />

                <FormItem classes="phone-number-item">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <p></p>
                    <Input 
                        id="phoneNumber"
                        type="text"
                        value={data.phoneNumber}
                        handleChange={handleDataChange}
                    />
                    <InputErrorMessage
                        hasError={hasErrors && data.phoneNumber === ''}
                        msg={errorMessages['phoneNumberRequired']}
                    />
                </FormItem>

                <Spacer marginY="20px" />

                <FormItem classes="street-address-item">
                    <label htmlFor="streetAddress">Street Address</label>
                    <p></p>
                    <Input 
                        id="streetAddress"
                        type="text"
                        value={data.streetAddress}
                        handleChange={handleDataChange}
                    />
                    <InputErrorMessage
                        hasError={hasErrors && data.streetAddress === ''}
                        msg={errorMessages['streetAddressRequired']}
                    />
                </FormItem>

                <Spacer marginY="20px" />

                <FormItem classes="city-item">
                    <label htmlFor="city">City</label>
                    <p></p>
                    <Input 
                        id="city"
                        type="text"
                        value={data.city}
                        handleChange={handleDataChange}
                    />
                    <InputErrorMessage
                        hasError={hasErrors && data.city === ''}
                        msg={errorMessages['cityRequired']}
                    />
                </FormItem>

                <Spacer marginY="20px" />

                <FormItem classes="state-item">
                    <label htmlFor="state">State</label>
                    <p></p>
                    <Input 
                        id="state" 
                        type="text"
                        value={data.state}
                        handleChange={handleDataChange}
                    />
                    <InputErrorMessage
                        hasError={hasErrors && data.state === ''}
                        msg={errorMessages['stateRequired']}
                    />
                </FormItem>

                <Spacer marginY="20px" />

                <FormItem classes="zip-code-item">
                    <label htmlFor="zipCode">Zip Code</label>
                    <p></p>
                    <Input 
                        id="zipCode"
                        type="text"
                        value={data.zipCode}
                        handleChange={handleDataChange}
                    />
                    <InputErrorMessage
                        hasError={hasErrors && data.zipCode === ''}
                        msg={errorMessages['zipCodeRequired']}
                    />
                </FormItem>
                </section>

                <Spacer marginY="20px" />

                <section className="availability-section">
                <h2>AVAILABILITY</h2>

                <FormItem classes="days-available-item">
                    <p>What days are you available?*</p>

                    <Input
                        id="monday"
                        name="daysAvailable"
                        label="Monday"
                        type="checkbox"
                        value="Monday"
                        checked={data.daysAvailable.includes("Monday")}
                        handleChange={handleDataChange}
                    />

                    <Input
                        id="tuesday"
                        name="daysAvailable"
                        label="Tuesday"
                        type="checkbox"
                        value="Tuesday"
                        checked={data.daysAvailable.includes("Tuesday")}
                        handleChange={handleDataChange}
                    />

                    <Input
                        id="wednesday"
                        name="daysAvailable"
                        label="Wednesday"
                        type="checkbox"
                        value="Wednesday"
                        checked={data.daysAvailable.includes("Wednesday")}
                        handleChange={handleDataChange}
                    />

                    <Input
                        id="thursday"
                        name="daysAvailable"
                        label="Thursday"
                        type="checkbox"
                        value="Thursday"
                        checked={data.daysAvailable.includes("Thursday")}
                        handleChange={handleDataChange}
                    />

                    <Input
                        id="friday"
                        name="daysAvailable"
                        label="Friday"
                        type="checkbox"
                        value="Friday"
                        checked={data.daysAvailable.includes("Friday")}
                        handleChange={handleDataChange}
                    />

                    <Input
                        id="saturday"
                        name="daysAvailable"
                        label="Saturday"
                        type="checkbox"
                        value="Saturday"
                        checked={data.daysAvailable.includes("Saturday")}
                        handleChange={handleDataChange}
                    />

                    <Input
                        id="sunday"
                        name="daysAvailable"
                        label="Sunday"
                        type="checkbox"
                        value="Sunday"
                        checked={data.daysAvailable.includes("Sunday")}
                        handleChange={handleDataChange}
                    />

                    <InputErrorMessage
                        hasError={hasErrors && data.daysAvailable.length === 0}
                        msg={errorMessages['daysAvailableRequired']}
                    />
                </FormItem>

                <Spacer marginY="20px" />

                <FormItem classes="time-available-item">
                    <label htmlFor="timeAvailable">What time(s) are you generally available?</label>
                    <p></p>
                    <Input 
                        id="timeAvailable"
                        type="text"
                        value={data.timeAvailable}
                        handleChange={handleDataChange}
                    />
                    <InputErrorMessage
                        hasError={hasErrors && data.timeAvailable === ''}
                        msg={errorMessages['timeAvailableRequired']}
                    />
                </FormItem>
                </section>
                <Spacer marginY="20px" />

                <section className="tell-us-about-you">
                <h2>TELL US ABOUT YOU</h2>

                <FormItem classes="experience-item">
                    <label htmlFor="experience-item">Why do you want to volunteer at The Daily Purr?</label>
                    <p></p>
                    <textarea
                        id="experience"
                        value={data.experience}
                        onChange={handleDataChange}
                        rows="5"
                    />
                </FormItem>
                <p></p>
                <FormItem classes="additional-information-item">
                    <label htmlFor="additionalInformation">
                        Is there anything else we should know?
                    </label>
                    <p></p>
                    <textarea
                        id="additionalInformation"
                        value={data.additionalInformation}
                        onChange={handleDataChange}
                        rows="5"
                    />
                </FormItem>
                </section>
                <Spacer marginY="20px" />

                <Button
                    id="submit-volunteer-request"
                    type="submit"
                    label="Submit Application"
                    classes="submit-volunteer-button"
                />
            </form>
        </>
    );
};

export default VolunteerForm;