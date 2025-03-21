import { AppState } from '../AppState.js'
import { Account } from '../models/Account.js'
import { logger } from '../utils/Logger.js'
import { api } from './AxiosService.js'

class AccountService {
  async updateAccount(accountData) {
    const res = await api.put('/account', accountData)
    logger.log('updated account', res.data)
  }
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = new Account(res.data)
      logger.log(res)
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }
}

export const accountService = new AccountService()
