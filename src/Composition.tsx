
import { useState } from "react";
import { AbsoluteFill, Img } from "remotion";
import styles from "./styles.module.css";

// Weeks start on Sunday in the GitHub API response
const NUMBER_TO_WEEKDAY = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const MyComposition = () => {
  const [data, setData] = useState<any>(null);

  return (
    <>
      <AbsoluteFill className={styles.background} />

      <AbsoluteFill>
        <div className={styles.contributionsWrapper}>
          <h1 className={styles.contributionsTitle}>My Contributions</h1>
          <p className={styles.contributionsSubtitle}>
            🗓 Week of {data?.contributionsByDay[0]?.date}
          </p>

          <ul className={styles.contributionItems}>
            {data?.contributionsByDay.map((day: any, i: number) => (
              <li key={day.date} className={styles.contributionItem}>
                <div className={styles.contributionWeekday}>
                  {NUMBER_TO_WEEKDAY[day.weekday]}
                </div>
                <div
                  className={styles.contributionBadge}
                  style={{ backgroundColor: day.color }}
                >
                  {day.contributionCount}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <AbsoluteFill>
          <div className={styles.username}>{data?.username}</div>

          <Img src={data?.avatarUrl} className={styles.avatar} />
        </AbsoluteFill>
      </AbsoluteFill>
    </>
  );
};

export default MyComposition