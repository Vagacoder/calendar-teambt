import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './Calendar';

const events = [
    {
        balance: 0,
        budget: 0,
        client: "client 1",
        date: new Date(),
        id: "123456",
        lastModifiedDate: new Date(),
        name: "Event 1",
        planner: "Planner 1",
        progress: "INQUIRY",
        total: 1000,
        type: "WEDDING",
        status: 'LEAD',
    },
]

ReactDOM.render(<Calendar events={events} />, document.getElementById('root'));
