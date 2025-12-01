'use client';
import React, { useState } from 'react';
import { Fugaz_One } from 'next/font/google';
import Button from './Button';
import { useAuth } from '@/context/AuthContext';

const fugaz = Fugaz_One({ subsets: ['latin'], weight: ['400'] });

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [authenticating, setAuthenticating] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetMessage, setResetMessage] = useState('');
  const [isResettingPassword, setIsResettingPassword] = useState(false);

  const { signup, login, resetPassword } = useAuth();

  async function handleSubmit() {
    if (!email || !password || password.length < 6) return;

    setAuthenticating(true);
    try {
      if (isRegister) {
        console.log('Signing up a new user');
        await signup(email, password);
      } else {
        console.log('Logging in an existing user');
        await login(email, password);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setAuthenticating(false);
    }
  }

  async function handleResetPassword(e) {
    e.preventDefault();
    try {
      await resetPassword(resetEmail);
      setResetMessage(
        'Password reset email has been sent. Please check your inbox.'
      );
    } catch (error) {
      setResetMessage(error.message);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4 flex-1">
      <h3 className={`text-4xl sm:text-5xl md:text-6xl ${fugaz.className}`}>
        {isRegister ? 'Register' : 'Log In'}
      </h3>
      <p>You&#39;re one step away!</p>
      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="email"
        className="max-w-[400px] w-full mx-auto px-3 py-2 sm:py-3 border border-solid border-amber-500 rounded-full outline-none hover:border-amber-700 focus:border-amber-700 duration-200"
        placeholder="Email"
      />
      <input
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        className="max-w-[400px] w-full mx-auto px-3 py-2 sm:py-3 border border-solid border-amber-500 rounded-full outline-none hover:border-amber-700 focus:border-amber-700 duration-200"
        placeholder="Password"
      />
      <div className="max-w-[400px] w-full mx-auto cursor-pointer">
        <Button
          clickHandler={handleSubmit}
          text={authenticating ? 'Submitting' : 'Submit'}
          full
        />
      </div>
      <div className="register-container max-w-[400px] w-full mx-auto text-xs">
        {!isResettingPassword ? (
          <>
            <div className="signin-signup flex gap-x-1">
              <p>
                {isRegister
                  ? 'Already have an account?'
                  : "Don't have an account?"}
              </p>
              <button
                onClick={() => setIsRegister(!isRegister)}
                className="text-amber-700 hover:opacity-60 duration-200 cursor-pointer"
              >
                <p>{isRegister ? 'Sign in' : 'Sign up'}</p>
              </button>
            </div>
            <div className="reset-password flex gap-x-1">
              <p>{isRegister ? '' : 'Forget your password?'}</p>
              <button
                onClick={() => setIsResettingPassword(true)}
                className="text-amber-700 hover:opacity-60 duration-200 cursor-pointer"
              >
                <p>{isRegister ? '' : 'Reset your Password'}</p>
              </button>
            </div>
          </>
        ) : (
          <>
            <hr className="text-amber-700/40" />
            {!resetMessage ? (
              <form
                onSubmit={handleResetPassword}
                className="reset-password-form w-full flex gap-x-2 mt-3"
              >
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  required
                  className="flex-2 px-3 py-2 sm:py-3 border border-solid border-amber-500 rounded-full outline-none hover:border-amber-700 focus:border-amber-700 focus:placeholder:opacity-0 duration-200"
                />
                <button
                  type="submit"
                  className="flex-1 rounded-full overflow-hidden text-amber-700 border-2 border-solid border-amber-700 hover:opacity-60 duration-200 cursor-pointer"
                >
                  <p
                    className={`whitespace-nowrap py-2 sm:py-3 ${fugaz.className}`}
                  >
                    Send Reset Link
                  </p>
                </button>
              </form>
            ) : (
              <p className="reset-message mt-4 text-center">{resetMessage}</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
