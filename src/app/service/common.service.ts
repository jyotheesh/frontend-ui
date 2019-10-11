import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getLoginUrl(value: any) {
    return this.http.post('http://10.117.189.108:4433/mortgageapp/auth/login', value);
  }

  getPaymentSchedule() {
    let url = 'http://10.117.189.108:4433/mortgageapp/api/loan?userId=455';
    let token = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzdXJlc2giLCJleHAiOjE1NzE2MzkwMjR9.RlgX-sMSoTx8w2wML1dU2Jm9ybyXM1hL2z4k_Cc29MmQGlIAJsoNLCqJDo8kE8mu6ScgmYpEynvyY4S_wKIjOA";

    const headers = new HttpHeaders().append('token', token);
    return this.http.get(url, { headers: headers });

  }
}
