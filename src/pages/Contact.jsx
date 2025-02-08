const Contact = () => {

  const handleFormSubmit = (formData) => {
    const formDataInput = Object.fromEntries(formData.entries())
    console.log(formDataInput);
  };

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            type="text"
            required
            autoComplete="false"
            placeholder="Enter Your Name"
            name="username"
          />
          <input
            type="email"
            className="form-control"
            required
            autoComplete="false"
            placeholder="Enter Your Email"
            name="email"
          />
          <textarea
            name="message"
            id=""
            className="form-control"
            rows="10"
            placeholder="Enter Your Message"
            autoComplete="false"
            required
          ></textarea>
          <button type="submit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
