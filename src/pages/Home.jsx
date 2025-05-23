import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



export default function Home() {
  const [universities, setUniversities] = useState([]);
  const [budget, setBudget] = useState(0);
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/universities")
      .then((res) => res.json())
      .then((data) => setUniversities(data));
  }, []);

  const filtered = universities.filter(
    (u) =>
      u.budget <= budget &&
      u.location.toLowerCase().includes(location.toLowerCase())
  );

  return (

    <>
    <Navbar/>

    <div style={{display:"flex",justifyContent:"center",alignItems:"center",justifyItems:"center",background:"#80C8EA",height:"30vh", flexDirection:"column", marginTop:"60px"}}>
        <h1 style={{color:"#155CDE", fontWeight:"bold", fontSize: '56px'}}>
          Campus Mate
        </h1>
        <p  style={{fontSize:"30px"}}>
          Find the best university for yourself that fullfills your needs
        </p>


      </div>


    <div className="p-4 max-w-3xl mx-auto">
      

      <div >
        <select
  style={{
    borderRadius: "25px",
    border: "2px solid #155CDE",
    margin: "20px",
    background: "#80C8EA"
  }}
  className="border p-2 rounded w-full"
  onChange={(e) => {
    const max = Number(e.target.value.split('-')[1]);
    setBudget(max); 
  }}
  defaultValue=""
>
   <option value="" disabled>Select your budget range</option>
  <option value="500000-700000">Upto 7 Lakh</option>
  <option value="700000-900000">Upto 9 Lakh</option>
  <option value="900000-1100000">Upto 11 Lakh</option>
  <option value="1100000-1500000">Upto 15 Lakh</option>
</select>

        <input
         style={{borderRadius:"25px", border:" 2px solid #155CDE", margin:"20px", background:"#80C8EA"}}
          type="text"
          placeholder="Enter location"
          className="border p-2 rounded w-full"
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div className="space-y-4">
        {filtered.map((uni) => (
          <div
            key={uni.id}
            onClick={() => navigate(`/university/${uni.id}`)}
            className="shadow-xl rounded-lg p-4 shadow cursor-pointer hover:bg-gray-100"
          >
            <h2 className="text-xl font-semibold">{uni.name}</h2>
            <img
              src={uni.image}
              alt={`${uni.name} Campus`}
              className="mt-2 w-full h-48 object-cover rounded"
            />
            <p>{uni.location}</p>
            <p>Fee: {uni.fee}</p>
            <p>Required Marks in FSC: {uni.requiredMarks}%</p>
            <a
              href={uni.website}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline"
              onClick={(e) => e.stopPropagation()}
            >
              Visit Website
            </a>
            
            <p className="mt-2">Courses: {uni.courses.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>

    <Footer/>
    </>
  );
}
