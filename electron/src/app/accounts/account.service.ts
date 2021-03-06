import { Injectable } from '@angular/core';

import { Account } from './account';
import { ArrayService } from '../db/array.service';

@Injectable()
export class AccountService extends ArrayService<Account> {
    protected keyDB = "CashFlow-accounts";

    getInstanceFromStandardObject(obj) {
        return new Account().fromStandardObject(obj);
    }
}
