import * as React from "react";

const Title = ({ todoCount }) => {
  return (
    <div>
      <div>
        <h1>To-do Items ({todoCount})</h1>
      </div>
    </div>
  );
};

export default Title;
