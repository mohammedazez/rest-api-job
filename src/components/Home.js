import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getJobAction } from "../redux/actions/Joblist.actions";
import "../styles/Home.css";

function Home() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.joblist);
  //  const {job, loading, error} = selector;
  console.log("ini adalah data jobnya ", selector);
  useEffect(() => {
    dispatch(getJobAction());
  }, [dispatch]);

  return (
    <div>
      {/* Search */}
      <div className="container-search">
        <h1>Job Description</h1>
        <form>
          <input
            type="text"
            placeholder="Search by description"
            name="search description"
          />
          <input
            type="text"
            placeholder="Search by location"
            name="search location"
          />
          <button type="submit">Submit</button>
        </form>
        <h1>Location</h1>

        <h1>Full time</h1>
      </div>
      {/* End Search */}

      {/* API Show */}
      <div className="container-pageapi">
        <h1>This is for show API</h1>
      </div>
      {/* End API Show */}

      {/* Pagination */}
      <div className="container-pagination">
        <h1>This is for Pagination</h1>
      </div>
      {/* End pagination */}
    </div>
  );
}

export default Home;
