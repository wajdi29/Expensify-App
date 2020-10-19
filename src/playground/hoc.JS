// Higher Order Component (HOC) A Component(HOC) that renders another component
// reuse
// render hijacking
// prop manipulation
// abstract state

import React from "react";
import ReactDOM from "react-dom";
const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isADmin && <p>This is private info please don't share !</p>}
      <WrappedComponent {...props} />
    </div>
  );
};
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please log in to view private Info </p>
      )}
    </div>
  );
};
const AuthInfo = requireAuthentication(Info);
const AdminInfo = withAdminWarning(Info);
// ReactDOM.render(
//   <AdminInfo isADmin={true} info='These are the details' />,
//   document.getElementById("app")
// );
ReactDOM.render(
  <AuthInfo isAuthenticated={true} info='These are the details' />,
  document.getElementById("app")
);
