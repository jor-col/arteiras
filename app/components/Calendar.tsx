const Calendar = () => {
  return (
    <div
      style={{
        width: "1300px",
        height: "790px",
      }}
    >
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&src=YXJ0ZWlyYXNnYWxsZXJ5QGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679"
        style={{
          border: "solid 1px #777",
          width: "1300px",
          height: "790px",
        }}
      ></iframe>
    </div>
  );
};

export default Calendar;
