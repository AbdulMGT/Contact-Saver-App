const ContactForm = ()=> {

    return (
        <div className="contact-form">
            <form>
                <input 
                    type="text"
                    placeholder="Enter Name"
                />
                <input 
                    type="tel" 
                    name="phone"
                    placeholder="Enter Phone number"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required
                />
                <div className="Create-todos">
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;