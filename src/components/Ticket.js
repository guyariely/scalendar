import React, { useState } from 'react';

const Ticket = ({ description }) => {

  return (
    <div className="ticket">
      <p className="description">{description}</p>
    </div>
  );
};

export default Ticket;