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
        <h1>Search Job</h1>
        <form>
          {/* Description */}
          <input
            type="text"
            placeholder="Search by description"
            name="search description"
          />
          {/* Location */}
          <input
            type="text"
            placeholder="Search by location"
            name="search location"
          />
          {/* Time */}
          <label>Choose a time:</label>
          <select name="time" id="time">
            <option value="fulltime">Full Time </option>
            <option value="partime">Part Time</option>
          </select>
          <button type="submit" value="Submit">
            Submit
          </button>
        </form>
      </div>
      {/* End Search */}

      {/* API Show */}
      <div className="container-pageapi">
        <h1>This is for show API</h1>
      </div>
      {/* End API Show */}

      {/* Pagination */}
      <div className="container-pagination">
        <div className="pagination">
          <a href="/#">&laquo;</a>
          <a href="/#">1</a>
          <a href="/#">2</a>
          <a href="/#">3</a>
          <a href="/#">4</a>
          <a href="/#">5</a>
          <a href="/#">6</a>
          <a href="/#">&raquo;</a>
        </div>
      </div>
      {/* End pagination */}
    </div>
  );
}

export default Home;
