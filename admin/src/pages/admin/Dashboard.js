import AdminLinks from "../../components/AdminLinks";
import Wrapper from "../../assets/wrappers/Dashboard";
import { Chart } from "../../components";

const Dashboard = () => {
  return (
    <Wrapper>
      <div className="form">
        <h1>Dashboard</h1>
        <Chart title="Active Daily Users" />
        <AdminLinks />
      </div>
    </Wrapper>
  );
};
export default Dashboard;
