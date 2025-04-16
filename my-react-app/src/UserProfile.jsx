function UserProfile() {
  function clickExample() {
    alert("You clicked me!");
  }
  return (
    <div>
      <button onClick={clickExample}>I am a button</button>
    </div>
  );
}

export default UserProfile;
