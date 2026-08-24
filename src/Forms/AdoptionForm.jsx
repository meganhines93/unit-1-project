import { useState } from 'react';
import InputErrorMessage from './input/InputErrorMessage';
import Button from './input/Button';
import Spacer from '../common/Spacer';
import FormItem from './input/FormItem';
import Input from './input/Input';
import { catData } from '../components/mockData/catData';

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
            data.phoneNumber.trim() !== '' &&
            data.streetAddress.trim() !== '' &&
            data.city.trim() !== '' &&
            data.state.trim() !== '' &&
            data.zipCode.trim() !== '' &&
            data.aboutYourHome.trim() !== '' &&
            data.typeOfHome.trim() !== '' &&
            data.catInterestedIn.trim() !== '' &&
            data.whyAdopt.trim() !== '' &&
            data.describeYourLifestyle.trim() !== '' &&
            data.newCatLife.trim() !== '' &&
            data.commitmentEntireLife.trim() !== '' &&
            data.keepIndoors.trim() !== ''
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
                        type="tel"
                        min="10"
                        value={data.phoneNumber}
                        handleChange={handleDataChange}
                    />
                    <InputErrorMessage
                        hasError={hasErrors && Number(data.phoneNumber) < 10}
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

                <Spacer marginY="20px" />

                <h2>About Your Home</h2>

                <FormItem classes="about-your-home-item">
                    <label htmlFor="aboutYourHome">
                        Do you rent or own your home?
                    </label>
                    <p></p>
                    <select
                        id="aboutYourHome"
                        value={data.aboutYourHome}
                        onChange={handleDataChange}
                    >
                        <option value="">Select one</option>
                        <option value="rent">Rent</option>
                        <option value="own">Own</option>
                    </select>
                    
                    <InputErrorMessage
                        hasError={hasErrors && data.aboutYourHome === ''}
                        msg={errorMessages['aboutYourHomeRequired']}
                    />
                </FormItem>

                <Spacer marginY="20px" />

                <FormItem classes="type-of-home-item">
                    <label htmlFor="typeOfHome">
                        What type of home do you live in?
                    </label>
                    <p></p>
                    <select
                        id="typeOfHome"
                        value={data.typeOfHome}
                        onChange={handleDataChange}
                    >
                        <option value="">Select one</option>
                        <option value="house">House</option>
                        <option value="apartment">Apartment</option>
                        <option value="condo">Condo</option>
                        <option value="townhouse">Townhouse</option>
                        <option value="other">Other</option>
                    </select>

                    <InputErrorMessage
                        hasError={hasErrors && data.typeOfHome === ''}
                        msg={errorMessages['typeOfHomeRequired']}
                    />
                </FormItem>

                <Spacer marginY="20px" />

                <h2>Adoption Details</h2>

                <FormItem classes="cat-interested-in-item">
                    <label htmlFor="catInterestedIn">
                        Which cat are you interested in adopting?
                    </label>
                    <p></p>
                    <select
                        id="catInterestedIn"
                        value={data.catInterestedIn}
                        onChange={handleDataChange}
                    >
                        <option value="">Select a cat</option>

                        {catData
                            .filter((cat) => cat.available)
                            .map((cat) => (
                                <option key={cat.id} value={cat.id}>
                                    {cat.name}
                                </option>
                            ))
                        }
                    </select>

                    <InputErrorMessage
                        hasError={hasErrors && data.catInterestedIn === ''}
                        msg={errorMessages['catInterestedInRequired']}
                    />
                </FormItem>

                <Spacer marginY="20px" />

                <FormItem classes="why-adopt-item">
                    <label htmlFor="whyAdopt">
                        Why do you want to adopt?
                    </label>
                    <p></p>
                    <textarea
                        id="whyAdopt"
                        value={data.whyAdopt}
                        onChange={handleDataChange}
                        rows="5"
                        required={true}
                    />

                    <InputErrorMessage
                        hasError={hasErrors && data.whyAdopt === ''}
                        msg={errorMessages['whyAdoptRequired']}
                    />
                </FormItem>

                <Spacer marginY="20px" />

                <FormItem classes="describe-your-lifestyle-item">
                    <label htmlFor="describeYourLifestyle">
                        How would you descibe your lifestyle?
                    </label>
                    <p></p>
                    <select
                        id="describeYourLifestyle"
                        value={data.describeYourLifestyle}
                        onChange={handleDataChange}
                    >
                        <option value="">Select one</option>
                        <option value="veryActive">Very Active</option>
                        <option value="active">Active</option>
                        <option value="moderate">Moderate</option>
                        <option value="relaxed">Relaxed</option>
                        <option value="mostlyHome">Mostly Home</option>
                    </select>

                    <InputErrorMessage
                        hasError={hasErrors && data.describeYourLifestyle === ''}
                        msg={errorMessages['describeYourLifestyleRequired']}
                    />
                </FormItem>

                <Spacer marginY="20px" />

                <FormItem classes="new-cat-life-item">
                    <label htmlFor="newCatLife">
                        Where will your new cat spend most of their time?
                    </label>
                    <p></p>
                    <select
                        id="newCatLife"
                        value={data.newCatLife}
                        onChange={handleDataChange}
                    >
                        <option value="">Select one</option>
                        <option value="indoorsThroughoutHome">
                            Indoors Throughout the Home
                        </option>
                        <option value="specificIndoorArea">
                            Specific Indoor Area
                        </option>
                        <option value="indoorOutdoor">
                            Indoor/Outdoor
                        </option>
                    </select>

                    <InputErrorMessage
                        hasError={hasErrors && data.newCatLife === ''}
                        msg={errorMessages['newCatLifeRequired']}
                    />
                </FormItem>

                <Spacer marginY="20px" />

                <h2>Commitment</h2>

                <FormItem classes="commitment-entire-life-item">
                    <label htmlFor="commitmentEntireLife">
                        Are you prepared to provide for this cat for their entire life?
                    </label>
                    <p></p>
                    <select
                        id="commitmentEntireLife"
                        value={data.commitmentEntireLife}
                        onChange={handleDataChange}
                    >
                        <option value="">Select one</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>

                    <InputErrorMessage
                        hasError={hasErrors && data.commitmentEntireLife === ''}
                        msg={errorMessages['commitmentEntireLifeRequired']}
                    />
                </FormItem>

                <Spacer marginY="20px" />

                <FormItem classes="keep-indoors-item">
                    <label htmlFor="keepIndoors">
                        Do you understand that all cats must be kept indoors?
                    </label>
                    <p></p>
                    <select
                        id="keepIndoors"
                        value={data.keepIndoors}
                        onChange={handleDataChange}
                    >
                        <option value="">Select one</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>

                    <InputErrorMessage
                        hasError={hasErrors && data.keepIndoors === ''}
                        msg={errorMessages['keepIndoorsRequired']}
                    />
                </FormItem>
                
                <Spacer marginY="20px" />

                <h2>Additional Comments (Optional) </h2>

                <FormItem classes="additional-comments-item">
                    <label htmlFor="additionalComments">
                        Anything else you'd like us to know?
                    </label>
                    <p></p>
                    <textarea
                        id="additionalComments"
                        value={data.additionalComments}
                        onChange={handleDataChange}
                        rows="5"
                        required={false}
                    />
                </FormItem>
                
                <Spacer marginY="20px" />

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