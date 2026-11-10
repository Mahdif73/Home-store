import UpdateInfo from "./UpdateInfo";
import UpdatePassword from "./UpdatePassword";

function Dashboard() {
  return (
    <div className="rounded-2xl">
      <UpdateInfo />
      <UpdatePassword />
    </div>
  );
}

export default Dashboard;
