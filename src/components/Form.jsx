import { useState } from "react";

const Form = () => {
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Name : ' , name)
        console.log('Email:' , email)
        console.log('Password' , password)

        setName('')
        setEmail('')
        setPassword('')

    };

    return(
        <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    )
}

export default Form