import { Logo } from "./components/Logo";
import styles from "./App.module.css";
import { Main } from "./components/Main";

function App() {
  return (
    <div className={styles.app}>
      <Logo />
      <main className={styles.content}>
        <Main />
      </main>
    </div>
  );
}

export default App;
