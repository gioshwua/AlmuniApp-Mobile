import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class RequestlibService {
  // private vars for data retrieval
  private uri: string = null;
  private old_id: number = null;
  private new_id: number = null;

  // default adjustable callbacks
  public accepted_callback = (response) => null;
  public rejected_callback = (error) => null;

  constructor() { }

  //////////////////////
  //  Helper methods  //
  //////////////////////
  // trim uri string for path control
  setURI(target_uri: string) {
    this.uri = target_uri;
    if (this.uri.charAt(this.uri.length - 1) == '/')
      this.uri = this.uri.substring(0, this.uri.length - 1);

    console.log('[+] Uri set as: ', target_uri);
  }

  // checks for needed parameters if set
  checkParams(): boolean {
    if (this.old_id == null || this.new_id == null)
      return false;
    return true;
  }

  // checks for validity of token
  checkToken(): boolean {
    if (!this.checkParams())
      return false;

    // sends post request for verifying token
    axios.post(this.uri + '')
  }

  // POST request design
  request_POST(params: Object, path: string, accept=this.accepted_callback, reject=this.rejected_callback) {
    // inject these params for validation
    params['old_id'] = this.old_id;
    params['new_id'] = this.new_id;

    const keys = Object.keys(params);
    const format = new URLSearchParams();

    keys.forEach(key => {
      format.append(key, params[key]);
    });

    // proceed to request
    const axios_promise = axios.post(this.uri + path, format);
    axios_promise.then(accept);
    axios_promise.catch(reject);
  }

  // GET request design
  request_GET(path: string, accept=this.accepted_callback, reject=this.rejected_callback) {
    // proceed to request
    const axios_promise = axios.get(this.uri + path);
    axios_promise.then(accept);
    axios_promise.catch(reject);
  }

  //////////////////////////////
  //  Different API requests  //
  //////////////////////////////
  // generates token by logging in
  generateToken(credentails: Object, accept=this.accepted_callback, reject=this.rejected_callback) {
    this.request_POST(credentails, '/api/login.php', accept, reject);
  }

  // gets the alumni (with filter)
  getAlumni(name: string, accept=this.accepted_callback, reject=this.rejected_callback) {
    this.request_POST({'name': name}, '/api/alumni.php', accept, reject);
  }
}
