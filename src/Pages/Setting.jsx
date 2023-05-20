import React from "react";
import { Link } from "react-router-dom";
const Setting = () => {
  return (
    <div className="p-2">
      <h5>Genral Profile Settings</h5>
      <hr />
      <table className="table table-hover">
        <tbody>
          <tr className="border-bottom">
            <td className="h6">Name </td>
            <td>
              {localStorage.getItem("firstname") +
                " " +
                localStorage.getItem("lastname")}
            </td>
          </tr>
          <tr className="border-bottom">
            <td className="h6">Username </td>
            <td>
              {localStorage.getItem("firstname") +
                localStorage.getItem("lastname")}
            </td>
          </tr>
          <tr className="border-bottom">
            <td className="h6">Memorialization settings</td>
            <td>
              Edit Decide what happens to your main profile after you pass away.
            </td>
          </tr>
        </tbody>
      </table>
      <h5 className="pt-5">Privacy Settings & Tools</h5>
      <hr />
      <table className=" table table-hover">
        <tbody>
          <tr rowSpan="3">
            <th>Privacy shortcuts</th>
            <td className="border-bottom">
              Check a few important settings <br />
              <small>
                Quickly review some important settings to make sure you're
                sharing with the people you want.
              </small>
            </td>
          </tr>
          <tr>
            <th></th>
            <td className="border-bottom">
              Check a few important settings <br />
              <small>
                Quickly review some important settings to make sure you're
                sharing with the people you want.
              </small>
            </td>
          </tr>
          <tr>
            <th></th>
            <td className="border-bottom">
              Check a few important settings <br />
              <small>
                Quickly review some important settings to make sure you're
                sharing with the people you want.
              </small>
            </td>
          </tr>
        </tbody>
      </table>
      <table className=" table table-hover">
        <tbody>
          <tr rowSpan="3">
            <th>Your Activity</th>
            <td className="border-bottom">Who can see your future posts?</td>
            <td>
              <strong>Friends?</strong>
            </td>
            <td>
              <Link rel="stylesheet" href="#">
                Edit
              </Link>
            </td>
          </tr>
          <tr>
            <th></th>
            <td className="border-bottom">
              Review all your posts and things you're tagged in
            </td>
            <td></td>
            <td>
              <Link rel="stylesheet" href="#">
                Use Activity Log
              </Link>
            </td>
          </tr>
          <tr>
            <th></th>
            <td className="border-bottom">
              Limit the audience for posts you've shared with friends of friends
              or Public?
            </td>
            <td></td>
            <td>
              <Link rel="stylesheet" href="#">
                Limit Past Post
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Setting;
