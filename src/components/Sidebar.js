import React, { useState } from 'react';
import Ticket from './Ticket';

const Sidebar = ({}) => {

  const [tickets, setTickets] = useState([
    {
      description: "Free Day - Youtube, Games, Movies, Articles, Books",
    },
    {
      description: "Architecture - Wikipedia, Articles, Videos",
    }
  ]);

  return (
    <aside>
      {
        tickets.map(ticket => <Ticket description={ticket.description} />)
      }
    </aside>
  );
};

export default Sidebar;