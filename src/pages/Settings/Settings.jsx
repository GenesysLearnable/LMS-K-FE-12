import React from 'react'
import styles from '../../pages/Settings/Settings.module.css'
import SettingClick from '../../components/settingClick/SettingClick'


const Settings = () => {
  return (
    <div className={styles.containerMain} >
        <div className={styles.toptext}>Notification Settings</div>
        <div className={styles.content}>

          <div className={styles.sideA}>
    
            <div className={styles.right}>
                <div className={styles.general}>General Notification</div>
                <div className={styles.toggle1}>Toggle all Notifications</div>
            </div>

            <div className={styles.left}>
             <SettingClick/>
            </div>

          </div>  


          <div className={styles.sideB}>
    
            <div className={styles.right}>
                <div className={styles.general}>Questions & Answers</div>
                <div className={styles.toggle1}>Questions you ask in Q&A</div>
            </div>

            <div className={styles.left}>
             <SettingClick/>
            </div>

          </div>  


          <div className={styles.sideB}>
    
            <div className={styles.right}>
                <div className={styles.general}>Kidera Offers</div>
                <div className={styles.toggle1}>Get Notified on special offers</div>
            </div>

            <div className={styles.left}>
             <SettingClick/>
            </div>

          </div> 

          <div className={styles.sideB}>
    
            <div className={styles.right}>
                <div className={styles.general}>Set Learning Reminder</div>
                <div className={styles.toggle1}>Set Frequency </div>
            </div>

            <div className={styles.left}>
             <SettingClick/>
            </div>

          </div> 



        </div>

        
        </div>
  )
}

export default Settings