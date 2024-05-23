import styles from './Sidedash.module.css'

const SideDash = () => {

    const getCurrentGreeting = () => {
    const now = new Date();
    const hours = now.getHours();

    if (hours >= 0 && hours < 12) {
      return "Morning";
    } else if (hours >= 12 && hours < 18) {
      return "Afternoon";
    } else {
      return "Evening";
    }
  }

  const Greeting = getCurrentGreeting();

  return (

    <>
      <div className={styles.container} style={{ fontSize: "3rem" }}>
        <p>{Greeting}, User!</p>
      </div>
    </>
  );
};

export default SideDash;
