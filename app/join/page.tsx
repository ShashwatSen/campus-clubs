export default function JoinPage() {
  return (
    <div>
      <h2>Join a club</h2>

      {/* TODO (Task 3a): build the join form here */}
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" placeholder="Enter your name" required />
      
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" placeholder="Enter your email" required />

      <input type="radio" id="days1" name="days" value="wednesday" />
      <label htmlFor="days1">Wednesday</label>
      <input type="radio" id="days2" name="days" value="friday" />
      <label htmlFor="days2">Friday</label>
      <input type="checkbox" id="permission" name="permission" value="yes" />
      <label htmlFor="permission">I accept the club rules</label>
      <button type="submit">Send request</button>
      
      {/* TODO (Task 3a): build the meeting schedule table here */}
      <table> 
        <caption>Weekly meeting schedule</caption>
        <thead>
          <tr>
            <th scope="col">Club</th>
            <th scope="col">Day</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
                Sports Club
            </th>
            <td>
                Wednesday
            </td>
          </tr>
          <tr>
            <th scope="row">
                Arts Club
            </th>
            <td>
                Tuesday
            </td>
          </tr>
          <tr>
            <th scope="row">
                Tech Club
            </th>
            <td>
                Friday
            </td>
          </tr>
        </tbody>
      </table>
    </form>
      
    </div>
  );
}
