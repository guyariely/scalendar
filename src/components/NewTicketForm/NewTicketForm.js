import React from "react";
import { useInput } from "../../hooks/hooks";
import { Form, Input, SubmitButton } from "./style";

const NewTicketForm = ({ addNewTicket }) => {
  const { input, onChangeInput, onSubmitInput } = useInput("");

  return (
    <Form>
      <Input
        type="text"
        value={input}
        onChange={onChangeInput}
        placeholder="Add new ticket ..."
      />
      <SubmitButton
        onClick={() => onSubmitInput(addNewTicket)}
        disabled={!input}
      >
        +
      </SubmitButton>
    </Form>
  );
};

export default NewTicketForm;
