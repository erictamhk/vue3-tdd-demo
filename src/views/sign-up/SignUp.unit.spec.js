vi.mock('axios')
import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import SignUp from './SignUp.vue'
import axios from 'axios'

describe('Sign Up', () => {
  describe('when user sets same value for password inouts', () => {
    describe('when user submit form', () => {
      it('send username, email and password to backend', async () => {
        const user = userEvent.setup()
        render(SignUp)
        const usernameInput = screen.getByLabelText('Username')
        const emailInput = screen.getByLabelText('E-mail')
        const passwordInput = screen.getByLabelText('Password')
        const passwordRepeatInput = screen.getByLabelText('Password Repeat')

        await user.type(usernameInput, 'user1')
        await user.type(emailInput, 'user1@mail.com')
        await user.type(passwordInput, 'P@sswr0d')
        await user.type(passwordRepeatInput, 'P@sswr0d')

        const button = screen.getByRole('button', { name: 'Sign Up' })
        await user.click(button)
        expect(axios.post).toHaveBeenCalledWith('/api/v1/users', {
          username: 'user1',
          email: 'user1@mail.com',
          password: 'P@sswr0d'
        })
      })
    })
  })
})
