
function App () {
    return (
        <div className="container">
            <h1>Form In React</h1>
            <form>
                <label htmlFor="firstName">First Name*</label>
                <input type="text" placeholder="Enter First Name" name="firstname"/>

                <label htmlFor="lastName">Last Name*</label>
                <input type="text" placeholder="Enter Last Name" name="lastname"/>

                <label htmlFor="email">Email*</label>
                <input type="text" placeholder="Enter Email" name="email"/>

                <label htmlFor="contact">Contact*</label>
                <input type="text" placeholder="Enter Phone #" name="contact"/>

                <label htmlFor="gender">Gender</label>
                <input type="radio" name="gender" /> Male
                <input type="radio" name="gender" /> Female
                <input type="radio" name="gender" /> Other

                <label htmlFor="subject">Subject</label>
                <select name="subject" id="subject">
                    <option value="math">Math</option>
                    <option value="math">Physics</option>
                    <option value="math">English</option>
                </select>

                <label htmlFor="resume">Resume</label>
                <input type="file" placeholder="Select Resume" name="resume"/>

                <label htmlFor="url">URL</label>
                <input type="text" name="url" placeholder="Enter Image URL" />

                <label htmlFor="about">About</label>
                <textarea name="about" id="about" cols="30" rows="10" placeholder="Enter description"></textarea>
                
                <button type="button">Reset</button>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}