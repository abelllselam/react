**React** - React apps are made out of components. - **A component** is a piece of the UI (user interface) that has its own logic and appearance. - React components are javascript functions that return markup. Which means its javascript that returns HTML - React component names should always start with uppercase lie "MyButton" -
The "export default" could be add to the component or at the end. e.g
export default function MyApp() {
return (

<div>
<h1>Welcome to my app</h1>
<MyButton />
</div>
);
}

or it can be added at the end

function UserProfile() {
return (

<div>
<h1>Abel Woldemichael</h1>
<p>Software Developer</p>
</div>
);
}

export default UserProfile;

- The markup language seen above is called JSX
  - JSX is more stricter than HTML as all tags must be closed. Your component can only return one JSX tags. It has to be rapped into an empty rapper like this <>....</> or <div>.....</div>

**Adding styles:**

-In CSS you specify a class with className
e.g: <img className="avatar">

    then in a CSS separate file
    .avatar {
        border-radius:50%;
    }

- to add a CSS file you will add a <link> tag

**Displaying Data**

- JSX lets you markup into JavaScript curly braces lets you scape back {}.
- You can also put more complex expressions inside JSX curly braces lie String Concatenation
  e.g: alt{'Photo of ' + user.name}

**Conditional**

- There are two ways to do conditionals one is the regular conditional and the other one is ternary type of conditional.
  e.g:
  let content;
  if (isLoggedIn) {
  content = <AdminPanel />;
  } else {
  content = <LoginForm />;
  }
  return (
  <div>
  {content}
  </div>
  );

        the turnery is added directly to the return statement:
            <div>
                {isLoggedIn ? (
                    <AdminPanel />
                ) : (
                    <LoginForm />
                )}
            </div>

- When you dont need the else statement you can use a shorter logical && syntax
  e.g:
    <div>
        {isLoggedIn && <AdminPanel />}
    </div>

**Rendering lists:**

- This is how you render a list in react:
  function UserProfile() {
  const names = [
  { fname: "Abel", id: 1 },
  { fname: "Meti", id: 2 },
  { fname: "Hirut", id: 3 },
  ];

  const listNames = names.map((name) =>
  <li key={name.id}>
  {name.fname}
  </li>);
  return <div>{listNames}</div>;
  }

export default UserProfile;

- The key attribue is a unique number usually the id from the database and it should be used to identify siblings. React uses keys to know what happened if you later insert, delete, or reorder the items.

**Responding to events:**

- You can respond to event handlers by having a function inside your components.
  e.g:function UserProfile() {
  function clickExample() {
  alert("You clicked me!");
  }
  return (
  <div>
  <button onClick={clickExample}>
  I am a button
  </button>
  </div>
  );
  }

        export default UserProfile;

- notice that there is no parenthesis on onClick={clickExample}. No need to call the function. You only need to pass it down. React will call event handler when the user clicks the button.

**Updating the Screen:**
