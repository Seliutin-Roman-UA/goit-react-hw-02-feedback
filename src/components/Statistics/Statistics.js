export function Statistics({ statsList, total, positivePercentage }) {
  return (
    <div className="statistic">
      {statsList.map(([key, value]) => (
        <p key={key}>
          {key}: {value}
        </p>
      ))}

      <p>total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
}