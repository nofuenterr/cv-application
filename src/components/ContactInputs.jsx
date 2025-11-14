import InputBlock from "./InputBlock"

function ContactsInputs({ onChange }) {
  return (
    <>
      <InputBlock
        label="Full name"
        inputID="fullName"
        inputName="fullName"
        inputType="text"
        placeholder="Gehrmann Sparrow"
        maxlength={70}
        onChange={onChange}
      />
      <InputBlock
        label="Desired job title"
        inputID="desiredJobTitle"
        inputName="desiredJobTitle"
        inputType="text"
        placeholder="Nighthawks"
        maxlength={75}
        onChange={onChange}
      />
      <InputBlock
        label="Phone"
        inputID="phone"
        inputName="phone"
        inputType="tel"
        placeholder="+63-907-341-8545"
        maxlength={16}
        autocomplete="tel"
        onChange={onChange}
      />
      <InputBlock
        label="Email"
        inputID="email"
        inputName="email"
        inputType="email"
        placeholder="gsparrow@example.com"
        maxlength={50}
        autocomplete="email"
        onChange={onChange}
      />
      <InputBlock
        label="Address"
        inputID="address"
        inputName="address"
        inputType="text"
        placeholder="Tingen City, Loen Kingdom"
        onChange={onChange}
      />
    </>
  )
}

export default ContactsInputs