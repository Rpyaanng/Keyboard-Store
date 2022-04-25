import { useAppContext } from "../../context/appContext";
import { useState } from "react";
import { FormRow, Alert } from "../../components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

const Profile = () => {
  const {
    user,
    showAlert,
    displayAlert,
    displayCustomAlert,
    updateUser,
    isLoading,
  } = useAppContext();
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [address, setAddress] = useState(user?.address);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName) {
      displayCustomAlert("Please enter your first and last name", "danger");
      return;
    }
    const updatedUser = {
      firstName,
      lastName,
      address,
    };
    await updateUser(updatedUser);
    displayAlert();
  };
  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Profile</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow
            type="text"
            labelText="Email"
            name="firstName"
            value={user.email}
            disabled={true}
          />
          <FormRow
            type="text"
            labelText="First Name*"
            name="firstName"
            value={firstName}
            handleChange={(e) => setFirstName(e.target.value)}
          />
          <FormRow
            type="text"
            labelText="Last Name*"
            name="lastName"
            value={lastName}
            handleChange={(e) => setLastName(e.target.value)}
          />
          <FormRow
            type="text"
            labelText="Address"
            name="address"
            value={address}
            handleChange={(e) => setAddress(e.target.value)}
          />
          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading ? "Updating..." : "Update"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default Profile;
