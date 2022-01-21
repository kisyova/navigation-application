import React from 'react';

const data = [
	{ exam: "INFM301", 
	  date: "18.01.2022", 
	  time: "18:00", 
	  subject: "ESUOES" 
	},
	{ exam: "INFM308", 
	  date: "24.01.2022", 
	  time: "18:00", 
	  subject: "Mobile App" 
	},
	{ exam: "INFM310", 
	  date: "26.01.2022", 
	  time: "18:00", 
	  subject: "Oracle Database Admin Task" 
	},
	{ exam: "INFM313", 
	  date: "20.01.2022", 
	  time: "19:40", 
	  subject: "Personal blog" 
	},
	{ exam: "INFM316", 
	  date: "21.01.2022", 
	  time: "19:40", 
	  subject: "React App - Student panel" 
	}
  ]

const Events = () => {
return (
	<div id="eventsDiv">
	<h1>Exam schedule</h1>
	<table id="examsTable">
		<tr>
			<th>Exam</th>
			<th>Date</th>
			<th>Time</th>
			<th>Subject</th>
		</tr>
		{data.map((val, key) => {
			return (
				<tr key={key}>
					<td>{val.exam}</td>
					<td>{val.date}</td>
					<td>{val.time}</td>
					<td>{val.subject}</td>
				</tr>
			)
		})}
	</table>
	<div id="footer">
        <h5>Created by Kamelia Kisyova, F102570</h5>
    </div>
	</div>
);
};

export default Events;
