import "./Profile.css";
import EditIcon from "../../../assets/edit.svg";
import EditImage from "../../../assets/dash_Avatar.png";

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
    </>
  );
};

export default UserProfile;
