import { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { User } from '@/types/user'
import { api } from '@/utils/api'

export const UserContext = createContext<any>({})

export const UserProvider = ({ children }: any) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  const router = useRouter()
  const [values, setValues] = useState({
    identifier: '',
    email: '',
    fullName: '',
    password: '',
    confirmPassword: '',
  })

  const [token, setToken] = useState<string | null>(null)
  const [refreshToken, setRefreshToken] = useState<string | null>(null)

  const [user, setUser] = useState<User | null>(null)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  // Login Function
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent default pge reload after form submission
    e.preventDefault()
    try {
      // initial login request to get token and refresh token
      const response = await fetch(`${apiUrl}/auth/email/login`, {
        method: 'POST',
        body: JSON.stringify({
          identifier: values.identifier,
          password: values.password,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      //  check request response status
      if (!response.ok) {
        //  throw error to catch block
        throw new Error('Error logging in')
      }
      //  get data from response
      const data = await response.json()
      //   get token and refresh token from data
      const { token, refreshToken } = data
      //   set token and refresh token in local storage
      localStorage.setItem('token', token)
      localStorage.setItem('refreshToken', refreshToken)
      //   set token and refresh token in state
      setToken(token)
      setRefreshToken(refreshToken)
      // Redirect user to dashboard page
      router.push('/dashboard')
    } catch (error) {
      console.log(error)
      //   show toast if error
      toast.error('Error logging in. Please check credentials and try again.', {
        position: 'top-right',
        autoClose: 5000,
      })
    }
  }

  //   Login with google function
  const handleGoogleAuth = async (idToken: string) => {
    try {
      // initial login request to get token and refresh token from google
      const response = await fetch(`${apiUrl}/auth/google/login`, {
        method: 'POST',
        body: JSON.stringify({ idToken }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      //   check request response status
      if (!response.ok) {
        // throw error to catch block
        throw new Error('Error logging in')
      }
      //   get data from response
      const data = await response.json()
      //   get token and refresh token from data
      const { token, refreshToken } = data
      //   set token and refresh token in local storage
      localStorage.setItem('token', token)
      localStorage.setItem('refreshToken', refreshToken)
      //   set token and refresh token in state
      setToken(token)
      setRefreshToken(refreshToken)
    } catch (error) {
      //   show toast if error
      toast.error('Error logging in. Please try again.', {
        position: 'top-right',
        autoClose: 5000,
      })
    }
  }

  const handleVerifyOtp = async (otp: string) => {
    try {
      // Send OTP to server for verification
      const response = await fetch(`${apiUrl}/auth/email/confirm`, {
        method: 'POST',
        body: JSON.stringify({ otp }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      // Check response status
      if (!response.ok) {
        throw new Error('Error verifying otp')
      }
      // Get data from response
      const data = await response.json()
      // Get token and refresh token from data
      const { token, refreshToken } = data
      // Set token and refresh token in local storage
      localStorage.setItem('token', token)
      localStorage.setItem('refreshToken', refreshToken)
      // Set token and refresh token in state
      setToken(token)
      setRefreshToken(refreshToken)
      // Redirect user to dashboard page
      router.push('/dashboard')
    } catch (error) {}
  }

  const checkEmail = async (email: string) => {
    try {
      const response = await fetch(`${apiUrl}/auth/email/check`, {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (!response.ok) {
        throw new Error('Error checking email')
      }
      const data = await response.json()
      console.log(data)

      return data
    } catch (error) {
      toast.error('Error checking email. Please try again.', {
        position: 'top-right',
        autoClose: 5000,
      })
    }
  }

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    //Prevent default pge reload after form submission
    e.preventDefault()
    try {
      // initial login request to get token and refresh token
      const response = await fetch(`${apiUrl}/auth/email/register`, {
        method: 'POST',
        body: JSON.stringify({
          email: values.email,
          fullName: values.fullName,
          password: values.password,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (!response.ok) {
        throw new Error('Error signing up')
      }
      router.push('/verification?email=' + values.email)
    } catch (error) {
      toast.error('Error signing up. Please try again.', {
        position: 'top-right',
        autoClose: 5000,
      })
    }
  }

  const handleRefreshToken = async () => {
    try {
      // Initiate token refresh request
      const response = await fetch(`${apiUrl}/auth/refresh`, {
        method: 'POST',
        body: JSON.stringify({
          refreshToken,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (!response.ok) {
        throw new Error('Error refreshing access token')
      }
      // Get data from response
      const data = await response.json()
      // Get token and refresh token from data
      const { token, refreshToken: newRefreshToken } = data
      // Set token and refresh token in local storage
      localStorage.setItem('token', token)
      localStorage.setItem('refreshToken', newRefreshToken)
      // Set token and refresh token in state
      setToken(token)
      setRefreshToken(newRefreshToken)
      // Redirect user to dashboard page
      router.push('/dashboard')
    } catch (error) {
      // Redirect to login page if error
      router.push('/login')
    }
  }

  const forgotPassword = async (identifier: string) => {
    try {
      // Initiate request to send password reset link
      const response = await fetch(`${apiUrl}/auth/forgot/password`, {
        method: 'POST',
        body: JSON.stringify({
          identifier,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      // Check response status
      if (!response.ok) {
        throw new Error('Error sending password reset link')
      }
      toast.success('Password reset link sent successfully', {
        position: 'top-right',
        autoClose: 5000,
      })
    } catch (err) {
      toast.error(
        'Error sending password reset link. Perhaps you need to create an account or use social login',
        {
          position: 'top-right',
          autoClose: 5000,
        }
      )
    }
  }

  const resetPassword = async (password: string, hash: string) => {
    try {
      // Send new password request to server
      const response = await fetch(`${apiUrl}/auth/reset/password`, {
        method: 'POST',
        body: JSON.stringify({
          password,
          hash,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      // Check response status
      if (!response.ok) {
        throw new Error('Error resetting password')
      }
      toast.success('Password reset successfully', {
        position: 'top-right',
        autoClose: 5000,
      })

      router.push('/login')
    } catch (error) {
      toast.error('Error resetting password', {
        position: 'top-right',
        autoClose: 5000,
      })
    }
  }

  const logout = () => {
    //  remove token and refresh token from local storage
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
    // set token and refresh token to null
    setToken(null)
    setRefreshToken(null)
  }

  const updateUser = async (values: any) => {
    try {
      const response = await fetch(`${apiUrl}/auth/me`, {
        method: 'PATCH',
        body: JSON.stringify({
          fullName: values.fullName,
          email: values.email,
          country: values.country,
          organisation: values.organisation,
          twoFactorAuthEnabled: values.twoFactorAuthEnabled,
          password: values.password,
          oldPassword: values.oldPassword,
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      if (!response.ok) {
        throw new Error('Error updating user')
      }
      toast.success('User updated successfully', {
        position: 'top-right',
        autoClose: 5000,
      })
      handleGetUserDetails()
    } catch (error) {
      toast.error('Error updating user', {
        position: 'top-right',
        autoClose: 5000,
      })
    }
  }

  const resendOTP = async (email: string) => {
    try {
      const response = await fetch(`${apiUrl}/auth/email/resend-otp`, {
        method: 'POST',
        body: JSON.stringify({
          email,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (!response.ok) {
        throw new Error('Error resending OTP')
      }
      toast.success('OTP sent successfully', {
        position: 'top-right',
        autoClose: 5000,
      })
      router.push('/verification?email=' + email + '&resend=true')
    } catch (error) {
      toast.error('Error resending OTP', {
        position: 'top-right',
        autoClose: 5000,
      })
    }
  }

  const handleDeleteUser = async () => {
    try {
      const response = await fetch(`${apiUrl}/auth/me`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      if (!response.ok) {
        throw new Error('Error deleting user')
      }
      toast.success('User deleted successfully', {
        position: 'top-right',
        autoClose: 5000,
      })

      router.push('/login')
    } catch (error) {
      toast.error('Error deleting user', {
        position: 'top-right',
        autoClose: 5000,
      })
    }
  }

  const handleGetUserDetails = async () => {
    if (token) {
      try {
        const response = await fetch(`${apiUrl}/auth/me`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        if (!response.ok) {
          throw new Error('Error getting user details')
        }
        const data = await response.json()
        setUser(data)
      } catch (error) {
        toast.error('Error getting user details', {
          position: 'top-right',
          autoClose: 5000,
        })
      }
    }
  }

  useEffect(() => {
    const savedToken = localStorage.getItem('token')
    const savedRefreshToken = localStorage.getItem('refreshToken')
    if (savedToken && savedRefreshToken) {
      setToken(savedToken)
      setRefreshToken(savedRefreshToken)
      handleGetUserDetails()
    }
  }, [token])

  return (
    <UserContext.Provider
      value={{
        token,
        refreshToken,
        user,
        values,
        handleChange,
        handleLogin,
        checkEmail,
        handleSignup,
        updateUser,
        resendOTP,
        logout,
        handleVerifyOtp,
        handleGoogleAuth,
        handleRefreshToken,
        forgotPassword,
        resetPassword,
        handleDeleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
