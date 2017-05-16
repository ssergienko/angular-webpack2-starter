import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Email } from '../models';

@Injectable()
export class EmailService {
    constructor (private http: Http) {}
    getEmails(): Observable<Email[]> {
        return this.http.request('./emails.json').map(res => res.json());
    }
}
