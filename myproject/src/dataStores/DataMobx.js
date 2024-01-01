
import {
  observable,
  action,
  makeObservable,
} from "mobx";
import axios from 'axios';
class DataMobx {
  list = true;
  servicess = "Not set";
  good = false;
  log=true;
  person="";

  constructor() {
    makeObservable(this, {
      list: observable, 
      servicess: observable,
      good: observable,
      person:observable,
      log: observable,
      setlog:action,
      setgood:action,
      setservicess:action,
      setperson:action,
      initPost:action,
      init2Post:action,
      setlist:action,
    });
  }

  setgood(good1)
  {
    this.good=good1
  }
  setservicess(servicess1)
  {
    this.servicess=servicess1
  }
  setlog(log1)
  {
    this.log=log1
  }
  setlist(l)
  {
    this.list=l
  }
  setperson(per)
  {
    this.person=per
  }

  initPost(data)
  {
  axios.post(`http://localhost:8787/service`, data)
  .then(res => 
  console.log(res.data)
 ).catch(err=>
  console.log(err.response.data)
  )
}
init2Post(business)
  {
  axios.post(`http://localhost:8787/businessData`, business)
  .then(res => 
  console.log(res.data)
 )
  
}
}
export default new DataMobx();
