type StatusProps = {
  status: "loading" | "success" | "error";
};

const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "Data Fetched successfully!";
  }
  if (props.status === "error") {
    message = "Error Fetch Data";
  }

  return (
    <div>
      <h2>Status {message}</h2>
    </div>
  );
};

export default Status;
