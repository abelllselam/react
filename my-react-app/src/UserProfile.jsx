function UserProfile() {
  let name = "Abel";
  let message;
  if (name === "Abel") {
    message = <p>the person name is {name}</p>;
  } else {
    message = <p>The person name is not {name}</p>;
  }
  return <div>{message}</div>;
}

export default UserProfile;
