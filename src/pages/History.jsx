import { useEffect, useState }
from "react";

import {
  getInterviewHistory,
} from "../utils/storage";

const History = () => {

  const [history,
    setHistory] =
    useState([]);

  useEffect(() => {

    setHistory(
      getInterviewHistory()
    );

  }, []);

  return (
    <div
      style={{
        padding:"30px",
      }}
    >

      <h1>
        Interview History
      </h1>

      {history.length === 0 ? (

        <p>
          No interviews yet.
        </p>

      ) : (

        history.map(
          (
            item,
            index
          ) => (

            <div
              key={index}
              className="card"
              style={{
                marginTop:"20px",
              }}
            >

              <h3>
                Interview #{index + 1}
              </h3>

              <p>
                Score:
                {" "}
                {item.score}
              </p>

              <p>
                Date:
                {" "}
                {item.date}
              </p>

            </div>

          )
        )

      )}

    </div>
  );
};

export default History;