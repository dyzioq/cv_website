import Table from "react-bootstrap/Table";

export default function WorkTable() {
  return (
    <table className="table-borderless experience-table">
      <tbody>
        <tr>
          <th>Position</th>
          <th></th>
          <th></th>
          <th></th>
          <th>Company</th>
        </tr>
        <tr>
          <td>Warehouse Worker</td>
          <td>November 2021</td>
          <td> - </td>
          <td>May 2023</td>
          <td>Decathlon</td>
        </tr>

        <tr>
          <td>Steward at the match</td>
          <td>October 2020</td>
          <td> - </td>
          <td>August 2021</td>
          <td>Jagiellonia Białystok</td>
        </tr>
        <tr>
          <td>Call Center</td>
          <td>Jule 2021</td>
          <td> - </td>
          <td>August 2021</td>
          <td>Delta Contact</td>
        </tr>
        <tr>
          <td>Shop Assistant</td>
          <td>June 2020</td>
          <td> - </td>
          <td>August 2020</td>
          <td>Piekarnia Okruszek</td>
        </tr>
      </tbody>
    </table>
  );
}
