import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UniversityDetail() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/universities/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [id]);

  if (!details) return <p>Loading...</p>;

  const { university, hostels } = details;

  return (
    <div className="max-w-full mx-auto">
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",justifyItems:"center",background:"#80C8EA",height:"30vh", flexDirection:"column"}}>
        <h1 style={{color:"#155CDE", fontWeight:"bold", fontSize: '56px'}}>{university.name}</h1>
      <p className="mt-2">{university.about}</p>

      </div>
      
      <img
        src={university.image}
        alt={university.name}
        className=" w-full h-100  object-cover rounded"
      />
      <div style={{justifyContent:"center",alignContent:"center",alignItems:"center",textAlign:"center"}}>
        <p className="mt-2">Location: {university.location}</p>
      <p>Fee: {university.fee}</p>
      <p>Required Marks: {university.requiredMarks}%</p>
      <p>Courses: {university.courses.join(", ")}</p>
      <a
        href={university.website}
        className="text-blue-600 underline"
        target="_blank"
        rel="noreferrer"
      >
        Visit Website
      </a>
      </div>

      <h2 className="text-xl font-bold mt-6">Nearby Hostels</h2>
      <div className="space-y-4 mt-2">
        {hostels.map((hostel, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <h3 className="text-lg font-semibold">{hostel.name}</h3>
            <p>Distance: {hostel.distance}</p>
            <p>Price: {hostel.price}</p>
            <p>Mess: {hostel.mess ? "Available" : "Not Available"}</p>
            <p>Room Type: {hostel.sharing}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
