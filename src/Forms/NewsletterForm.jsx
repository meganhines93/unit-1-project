import { useEffect, useRef, useState } from 'react';

const NewsletterRegistrationForm = () => {
    return (
        <>
            <h4>Stay in the Loop</h4>
            <h3>Join our mailing list for updates on events, new cats, and specials!</h3>
            <form>
                <FormItem classes="email-address-item">
                    <Input 
                        id="emailAddress"
                        label="Email"
                        value={data.emailAddress}
                        ref={inputRef}
                        required={true}
                        />
                </FormItem>
            </form>
        </>
    );
}

export default NewsletterRegistrationForm;