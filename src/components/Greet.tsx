type GreetProp = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

const Greet = ({ name, messageCount = 0, isLoggedIn }: GreetProp) => {
  return (
    <div>
      {isLoggedIn
        ? ` Welcome ${name}! You have ${messageCount} unread messages `
        : "Welcome Guest!"}
    </div>
  );
};

export default Greet;
