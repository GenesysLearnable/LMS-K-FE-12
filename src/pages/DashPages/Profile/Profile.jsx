import "./Profile.css";
import EditIcon from "../../../assets/edit.svg";
import EditImage from "../../../assets/dash_Avatar.png";
import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    <>
      <section className="edit-password--container">
        <div className="edit--actions">
          <p className="edit-text">Edit Profile</p>
          <p className="cancel-edit">Cancel</p>
        </div>

        <div className="edit-header--container">
          <p className="edit--header">Edit Profile</p>
          <div className="header-box">
            <div className="edit--profile">
              <img className="edit-user--image" src={EditImage} alt="" />
              <img className="edit--icon" src={EditIcon} alt="" />
            </div>
            <div className="edit-cta--buttons">
              <button className="upload">Upload</button>
              <button className="del">Delete</button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <form action="">
          <div className="edit-form--row">
            <EditForm label="First Name" type="text" placeholder="Chujac" />
            <EditForm label="Last Name" type="text" placeholder="Kingsley" />
          </div>
          <div className="edit-form--row">
            <EditForm
              label="Date of Birth"
              type="date"
              placeholder="7th March, 2020"
            />
            <RadioForm label="Gender" />
          </div>
          <div className="edit-form--row">
            <EditForm label="Grade" type="text" placeholder="Nursery" />
            <EditForm
              label="Lcation"
              type="text"
              placeholder="Lagos, Nigeria"
            />
          </div>

          <div className="edit-form-btn--container">
            <Link to="">
              <button className="edit-form--button">Save Changes</button>
            </Link>
          </div>
        </form>
      </section>
    </>
  );
};

const EditForm = ({ label, type, placeholder }) => {
  return (
    <>
      <div className="edit-form--container">
        <label htmlFor="">{label}</label>
        <input type={type} placeholder={placeholder} />
      </div>
    </>
  );
};

const RadioForm = ({ label }) => {
  return (
    <>
      <div className="edit-form--container">
        <label htmlFor="">{label}</label>
        <select>
          <option value="male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
    </>
  );
};

export default UserProfile;
