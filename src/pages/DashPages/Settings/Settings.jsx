import stylesB from "./Settings.module.css";
import userpng from "../../../assets/user.png";
import arrowLeft from "../../../assets/arroww.png";
import lock from "../../../assets/lock-closed.png";
import bell from "../../../assets/bell-alert.png";
import sheild from "../../../assets/shield-check.png";
import lang from "../../../assets/language.png";
import share from "../../../assets/share.png";
import qestion from "../../../assets/question-mark-circle.png";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <>
      <div className={stylesB.container}>
        <div className={stylesB.topmain}>Settings</div>

        <div className={stylesB.containerTop}>
          <Link to="/dashboard/profile">
            <div className={stylesB.Top1}>
              <div className={stylesB.right}>
                <div className={stylesB.sideA}>
                  <img src={userpng} />
                  <div className={stylesB.texe}>Edit Profile</div>
                </div>
              </div>

              <div className={stylesB.left}>
                <img src={arrowLeft} />
              </div>
            </div>
          </Link>

          <div className={stylesB.Top2}>
            <div className={stylesB.right}>
              <div className={stylesB.sideA}>
                <img src={lock} />
                <div className={stylesB.texe1}>Change Password</div>
              </div>
            </div>

            <div className={stylesB.left}>
              <img src={arrowLeft} />
            </div>
          </div>

          <div className={stylesB.Top2}>
            <div className={stylesB.right}>
              <div className={stylesB.sideA}>
                <img src={bell} />
                <div className={stylesB.texe}>Notification</div>
              </div>
            </div>

            <div className={stylesB.left}>
              <Link to="/NotificationSettings">
                <img src={arrowLeft} />
              </Link>
            </div>
          </div>

          <div className={stylesB.Top2}>
            <div className={stylesB.right}>
              <div className={stylesB.sideA}>
                <img src={sheild} />
                <div className={stylesB.texe}>Security</div>
              </div>
            </div>

            <div className={stylesB.left}>
              <img src={arrowLeft} />
            </div>
          </div>

          <div className={stylesB.Top2}>
            <div className={stylesB.right}>
              <div className={stylesB.sideA}>
                <img src={lang} />
                <div className={stylesB.texe}>Language</div>
              </div>
            </div>

            <div className={stylesB.left}>
              <img src={arrowLeft} />
            </div>
          </div>

          <div className={stylesB.Top2}>
            <div className={stylesB.right}>
              <div className={stylesB.sideA}>
                <img src={share} />
                <div className={stylesB.texe}>Invite</div>
              </div>
            </div>

            <div className={stylesB.left}>
              <img src={arrowLeft} />
            </div>
          </div>

          <div className={stylesB.Top2}>
            <div className={stylesB.right}>
              <div className={stylesB.sideA}>
                <img src={qestion} />
                <div className={stylesB.texe}>Help</div>
              </div>
            </div>

            <div className={stylesB.left}>
              <img src={arrowLeft} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
