import _axios from 'axios';
import objectToFormData from 'utils/objectToFormData';

const axios = _axios.create({
  withCredentials: true
});

const baseURL = `${process.env.SERVER_URL}/api`;

const requests = {
  get: (url, config)=>
    axios.get(`${baseURL}${url}`, config),
    
  postJSON: (url, data, config)=>
    axios.post(`${baseURL}${url}`, data, {...config, 
    headers: {"Content-Type": "application/json"}}),

  postFormData: async (url, data, config)=>
    await axios.post(`${baseURL}${url}`, await objectToFormData(data), {...config,
    headers: {"Content-Type": "multipart/form-data"}}),

  postUrlencoded: (url, data, config)=>
    axios.post(`${baseURL}${url}`, data, {...config,
    headers: {"Content-Type": "application/x-www-form-urlencoded"}}),

  putJSON: (url, data, config)=>
    axios.put(`${baseURL}${url}`, data, {...config, 
    headers: {"Content-Type": "application/json"}}),

  putFormData: async (url, data, config)=>
    await axios.put(`${baseURL}${url}`, await objectToFormData(data), {...config,
    headers: {"Content-Type": "multipart/form-data"}}),

  putUrlencoded: (url, data, config)=>
    axios.put(`${baseURL}${url}`, data, {...config,
    headers: {"Content-Type": "application/x-www-form-urlencoded"}}),

  delete: (url, config)=>
    axios.delete(`${baseURL}${url}`, config)
};

const Child = {
  login: ({code})=>
    requests.postJSON("/child/login", {code}),

  logout: ()=>
    requests.get("/child/logout"),

  current: (config)=>
    requests.get("/child/current", config),

  racesHistory: ()=>
    requests.get("/child/racesHistory")
};

const Parent = {
  login: ({email, password})=>
    requests.postJSON("/parent/login", {email, password}),

  logout: ()=>
    requests.get("/parent/logout"),

  create: ({name, email, password})=>
    requests.postJSON("/parent/create", {name, email, password}),

  current: (config)=>
    requests.get("/parent/current", config),

  createChild: ({name, image})=>
    requests.postFormData("/parent/createChild", {name, image}),

  deleteChild: (childId)=>
    requests.postJSON("/parent/deleteChild", {childId}),

  generateChildCode: (childId)=>
    requests.postJSON("/parent/generateChildCode", {childId}),

  getChildList: ()=>
    requests.get("/parent/childList")
};

const Race = {
  start: ({time})=> 
    requests.postJSON("/race/start", {time}),

  end: ({winned})=>
    requests.postJSON("/race/end", {winned})
};

export default {
  Child,
  Parent,
  Race
}