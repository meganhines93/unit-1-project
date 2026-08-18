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
    aboutYourHome: '',
    typeOfHome:'',
    catInterestedIn:'',
    whyAdopt:'',
    describeYourLifestyle: '',
    newCatLife:'',
    commitmentEntireLife:'',
    keepIndoors:'',
    additionalComments:''
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
    aboutYourHomeRequired: 'About Your Home is required.',
    typeOfHomeRequired: 'Type of Home is required.',
    catInterestedInRequired: 'Which Cat your Interested in is required.',
    whyAdoptRequired: 'Why you want to adopt is required.',
    describeYourLifestyleRequired: 'Describing your lifestyle is required.',
    newCatLifeRequired: 'Describing your cat life is required.',
    commitmentEntireLifeRequired: 'Commitment to the cats entire life is required.',
    keepIndoorsRequired: 'Keep indoors is required.',
};

const AdoptionForm = ({ handleCloseForm }) => {
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
            data.aboutYourHome.trim() !== '' &&
            data.typeOfHome.trim() !== '' &&
            data.catInterestedIn.trim() !== '' &&
            data.whyAdopt.trim() !== '' &&
            data.describeYourLifestyle.trim() !== '' &&
            data.newCatLife.trim() !== '' &&
            data.commitmentEntireLife.trim() !== '' &&
            data.keepIndoors.trim() !== '' &&
            data.additionalComments.trim() !== ''
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
            <form className="adoption-form-grid" onSubmit={handleSubmit}>
                <h2>Your Information</h2>
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

                <h2>About Your Home</h2>
                <FormItem classes="about-your-home-item">
                    <Input 
                        id="aboutYourHome"
                        label="Do you rent or own your home?"
                        type="text"
                        value={data.aboutYourHome}
                        required={true}
                        handleChange={handleDataChange}
                    />
                    <InputErrorMessage
                        hasError={hasErrors && data.aboutYourHome === ''}
                        msg={errorMessages['aboutYourHomeRequired']}
                    />
                </FormItem>
                <FormItem classes="type-of-home-item">
                    <Input 
                        id="typeOfHome"
                        label="What type of home do you live in?"
                        type="text"
                        value={data.typeOfHome}
                        required={true}
                        handleChange={handleDataChange}
                    />
                    <InputErrorMessage
                        hasError={hasErrors && data.typeOfHome === ''}
                        msg={errorMessages['typeOfHomeRequired']}
                    />
                </FormItem>

                <h2>Adoption Details</h2>
                <FormItem classes="cat-interested-in-item">
                    <Input 
                        id="catInterestedIn"
                        label="Which cat are you interested in adopting?"
                        type="text"
                        value={data.catInterestedIn}
                        required={true}
                        handleChange={handleDataChange}
                    />
                    <InputErrorMessage
                        hasError={hasErrors && data.catInterestedIn === ''}
                        msg={errorMessages['catInterestedInRequired']}
                    />
                </FormItem>
                <FormItem classes="why-adopt-item">
                    <Input 
                        id="whyAdopt"
                        label="Why do you want to adopt?"
                        type="text"
                        value={data.whyAdopt}
                        required={true}
                        handleChange={handleDataChange}
                    />
                    <InputErrorMessage
                        hasError={hasErrors && data.whyAdopt === ''}
                        msg={errorMessages['whyAdoptRequired']}
                    />
                </FormItem>
                <FormItem classes="describe-your-lifestyle-item">
                    <Input 
                        id="describeYourLifestyle"
                        label="How would you describe your lifestyle?"
                        type="text"
                        value={data.describeYourLifestyle}
                        required={true}
                        handleChange={handleDataChange}
                    />
                    <InputErrorMessage
                        hasError={hasErrors && data.describeYourLifestyle === ''}
                        msg={errorMessages['describeYourLifestyleRequired']}
                    />
                </FormItem>
                <FormItem classes="new-cat-life-item">
                    <Input 
                        id="newCatLife"
                        label="Where will your new cat spend most of their time?"
                        type="text"
                        value={data.newCatLife}
                        required={true}
                        handleChange={handleDataChange}
                    />
                    <InputErrorMessage
                        hasError={hasErrors && data.newCatLife === ''}
                        msg={errorMessages['newCatLifeRequired']}
                    />
                </FormItem>

                <h2>Commitment</h2>
                <FormItem classes="commitment-entire-life-item">
                    <Input 
                        id="commitmentEntireLife"
                        label="Are you prepared to provide for this cat for their entire life (up to 15-20 years)?"
                        type="text"
                        value={data.commitmentEntireLife}
                        required={true}
                        handleChange={handleDataChange}
                    />
                    <InputErrorMessage
                        hasError={hasErrors && data.commitmentEntireLife === ''}
                        msg={errorMessages['commitmentEntireLifeRequired']}
                    />
                </FormItem>
                <FormItem classes="keep-indoors-item">
                    <Input 
                        id="keepIndoors"
                        label="Do you understand that all cats must be kept indoors for their safety and well-being?"
                        type="text"
                        value={data.keepIndoors}
                        required={true}
                        handleChange={handleDataChange}
                    />
                    <InputErrorMessage
                        hasError={hasErrors && data.keepIndoors === ''}
                        msg={errorMessages['keepIndoorsRequired']}
                    />
                </FormItem>
                <h2>Additional Comments (Optional) </h2>
                <FormItem classes="additional-comments-item">
                    <Input 
                        id="additionalComments"
                        label="Anything else you'd like us to know?"
                        type="text"
                        value={data.additionalComments}
                        required={true}
                        handleChange={handleDataChange}
                    />
                    <InputErrorMessage
                        hasError={hasErrors && data.additionalComments === ''}
                        msg={errorMessages['additionalCommentsRequired']}
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

export default AdoptionForm;
