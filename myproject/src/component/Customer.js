import PersonalDetails from "./PersonalDetails";
import { observer } from "mobx-react";
import DataMobx from "../dataStores/DataMobx";
import { useNavigate } from "react-router-dom";
import Services from "./Services";
import { useState } from "react";
import { useEffect } from "react";

const Customer = observer(() => {
  const [masseges, setmasseges] = useState(false);
  let nav = useNavigate();
  return (
    <>
    {console.log(DataMobx.name,"dnameee")}
    {/* {DataMobx.initPost(DataMobx.data)} */}
   {/* {DataMobx.log? DataMobx.init2Post(DataMobx.business): */}
    {/* DataMobx.setlog(false)} */}
      {(DataMobx.setlist(false))}
      <PersonalDetails />
       <hr/>
      {/* <p id="pServe">Our Services:</p> */}
      <hr/>
      <Services/>
    </>
  );
});
export default Customer;
