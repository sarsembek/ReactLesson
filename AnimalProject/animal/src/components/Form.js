import { useState } from 'react';

export function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('inputs', JSON.stringify(inputs))
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>First name:
      <input 
        type="text" 
        name="fname" 
        value={inputs.fname || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Last name:
        <input 
          type="text" 
          name="lname" 
          value={inputs.lname || ""} 
          onChange={handleChange}
        />
       </label>
       <label>Age:
       <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
       </label>
       <label>Gender:
       <input 
          type="radio" 
          name="gender" 
          value={inputs.gender || "Male"} 
          onChange={handleChange}
        />
        <label for="gender">Male</label>
        <input 
          type="radio" 
          name="gender" 
          value={inputs.gender || "Female"} 
          onChange={handleChange}
        />
        <label for="gender">Female</label>
       </label>
       <input type="submit" value="Submit"/>
    </form>
  )
}