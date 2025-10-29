import User from "./User";

export default {
  title: "Components/User",
  component: User,
  tags: ["autodocs"],
};

export const Default = () => {
  return (
    <div>
      <User />
      {/* <User name="Robin" age="32" color={"#E6D8C3"} />
      <User name="Emma" age="29" color={"#C2A68C"} />
      <User name="Alfons" age="5" color={"#5D866C"} /> */}
    </div>
  );
};
