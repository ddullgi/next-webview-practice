"use client";

import styles from "./page.module.css";

export default function Home() {
  const sendToRN = () => {
    if (window.ReactNativeWebView) {
      // RN에서 데이터는 반드시 문자열로 받을 수 있기 때문에
      // JSON.stringify를 사용합니다.
      window.ReactNativeWebView.postMessage(JSON.stringify({ data: "hello" }));
    } else {
      // --
    }
  };

  return (
    <main className={styles.main}>
      <button onClick={sendToRN}>통신하기</button>
    </main>
  );
}
