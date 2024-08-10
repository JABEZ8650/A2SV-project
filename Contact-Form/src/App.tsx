import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;

  const onSubmit = (data: any) => {
    alert(`Full Name: ${data.name}, Email: ${data.email}, Message: ${data.message}`);
    reset(); 
  };

  return (
    <>
      <div className="container">
        <p className="header">Contact Form</p>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              {...register("name", {
                required: {
                  value: true,
                  message: "Full name is required",
                },
              })}
            />
            <p style={{ color: 'red' }}>{errors.name?.message?.toString()}</p>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              {...register("email", {
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Email is not valid",
                },
                required: {
                  value: true,
                  message: "Email is required",
                },
              })}
            />
            <p style={{ color: 'red' }}>{errors.email?.message?.toString()}</p>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              className="form-control"
              {...register("message", {
                required: {
                  value: true,
                  message: "Message is required",
                },
              })}
            ></textarea>
            <p style={{ color: 'red' }}>{errors.message?.message?.toString()}</p>
          </div>
          <button type="submit" className="btn">
            Send
          </button>
        </form>
      </div>
    </>
  );
}

export default App;