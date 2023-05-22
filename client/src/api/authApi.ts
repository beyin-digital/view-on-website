import { GenericResponse, ILoginResponse, IUserResponse } from '@/types/user'
import axios from 'axios'
const BASE_URL = process.env.NEXT_PUBLIC_API_URL

export const authApi = axios.create({
  baseURL: BASE_URL,
  // withCredentials: true,
})

authApi.defaults.headers.common['Content-Type'] = 'application/json'

export const refreshAccessTokenFn = async () => {
  const response = await authApi.get<ILoginResponse>('auth/refresh')
  return response.data
}

authApi.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const originalRequest = error.config
    const errMessage = error.response.data.message as string
    if (errMessage.includes('not logged in') && !originalRequest._retry) {
      originalRequest._retry = true
      await refreshAccessTokenFn()
      return authApi(originalRequest)
    }
    return Promise.reject(error)
  }
)

export const signUpUserFn = async (user: any) => {
  const response = await authApi.post<GenericResponse>(
    'auth/email/register',
    user
  )
  return response.data
}

export const loginUserFn = async (user: any) => {
  const response = await authApi.post<ILoginResponse>('auth/email/login', user)
  return response.data
}

export const verifyEmailFn = async (otp: string) => {
  const response = await authApi.post<GenericResponse>('auth/email/confirm', {
    otp,
  })
  return response.data
}

export const getMeFn = async () => {
  const response = await authApi.get<IUserResponse>('auth/me')
  return response.data
}
