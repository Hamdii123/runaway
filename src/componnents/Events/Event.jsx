// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Event = () => {
//   const [events, setEvents] = useState([]);
//     const a="http://192.168.1.7:8000/media/Capture%20d%E2%80%99%C3%A9cran%20du%202024-02-05%2014-39-48_j1CZtOA.png";
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://192.168.1.7:8000/event");
//         setEvents(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="container">
        
//       <h1>Events</h1>
//       <div className="row">
//         {events.slice(0,3).map((event, index) => (
//           <div key={index} className="col-md-4 mb-4">
//             <div className="card shadow">
//               <img className="card-img-top" src={a} alt="Event" />
//               <div className="card-body">
//                 <h5 className="card-title">{event.titre}</h5>
//                 <p className="card-text">{event.description}</p>
//                 <a href="#" className="btn btn-primary">Details</a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Event;
