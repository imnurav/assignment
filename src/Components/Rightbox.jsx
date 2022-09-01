import React from "react";

const Rightbox = () => {
  return (
    <>
      <table className="table mt-4 w-75  " style={{borderRadius:'10px',margin:'auto'}}>
        <tbody>
          <tr className="text-center">
            <td colSpan={2}>
              <a href=""> Billing Cycle</a>
            </td>
          </tr>
          <tr>
            <td className="bold">Billing period FROM | To</td>
            <td>01 Nov 2021 | 30 Nov 2021</td>
          </tr>
          <tr>
            <td className="bold">Bill due date</td>
            <td>01 Jan 2022 | 01 Jan 2022</td>
          </tr>
          <tr>
            <td className="bold">Consider Payment To</td>
            <td>30 Nov 2021</td>
          </tr>
          <tr>
            <td className="bold">Consider meter reading FROM | TO</td>
            <td>01 Nov 2021 | 30 Nov 2021</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Rightbox;
