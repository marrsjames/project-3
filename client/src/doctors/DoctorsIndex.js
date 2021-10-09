import React from "react";
import { getAllDoctors } from "../../lib/api";

const DoctorIndex = () => {
  const [state, setState] = React.useState({ doctors: [] });
  const fetchDoctorsFromApi = async () => {
    try {
      const res = await getAllDoctors();
      setState({ doctors: res.data });
    } catch (err) {
      console.error("Error occurred checking all doctors", err);
    }
  };

  React.useEffect(() => {
    fetchDoctorsFromApi();
  }, []);
  console.log("State from Doctor index", state);
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {state.doctors.map((doctor) => (
            <p>Single Doctor</p>
          ))}
        </div>
      </div>
    </section>
  );
};
export default DoctorIndex;
