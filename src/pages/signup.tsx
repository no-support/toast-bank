import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { FaEye } from 'react-icons/fa'
import { FaEyeSlash } from 'react-icons/fa'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const SignUpPage = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isDirty, isValid },
  } = useForm<Inputs>({
    mode: 'onTouched',
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordChk, setShowPasswordChk] = useState(false)

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    try {
      const { data } = await axios.post('/api/auth/signup', formData)
      router.push('/congrats')
    } catch {
      toast.error('문제가 발생했습니다. 관리자에게 문의해주세요.')
    }
  }
  return (
    <div className="flex flex-col p-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* 이메일 */}
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-sm mb-1.5 after:content-['*'] after:ml-0.5 after:text-red-500"
          >
            이메일
          </label>
          <input
            placeholder="user1@email.com"
            {...register('email', {
              required: '이메일을 입력해주세요.',
              pattern: {
                value:
                  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
                message: '이메일 형식이 아니에요',
              },
            })}
            id="email"
          />
          <div className="h-8">
            {errors.email && (
              <span className="text-xs text-red-600">
                {errors.email.message}
              </span>
            )}
          </div>
        </div>

        {/* 패스워드 */}
        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="text-sm mb-1.5 after:content-['*'] after:ml-0.5 after:text-red-500"
          >
            패스워드
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              {...register('password', {
                required: '비밀번호를 입력해주세요',
                minLength: {
                  value: 8,
                  message: '비밀번호는 8자 이상이어야 해요.',
                },
              })}
            />
            <button
              type="button"
              className="absolute top-1/2 right-2 transform -translate-y-1/2 focus:outline-none"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="h-8">
            {errors.password && (
              <span className="text-xs text-red-600">
                {errors.password.message}
              </span>
            )}
          </div>
        </div>

        {/* 패스워드 확인 */}
        <div className="flex flex-col">
          <label
            htmlFor="passwordChk"
            className="text-sm mb-1.5 after:content-['*'] after:ml-0.5 after:text-red-500"
          >
            패스워드 확인
          </label>

          <div className="relative">
            <input
              id="passwordChk"
              type={showPasswordChk ? 'text' : 'password'}
              {...register('passwordChk', {
                required: '패스워드 확인을 입력해주세요',
                validate: (value) => {
                  const { password } = getValues()
                  return value === password || '패스워드가 일치하지 않아요.'
                },
              })}
            />
            <button
              type="button"
              className="absolute top-1/2 right-2 transform -translate-y-1/2 focus:outline-none"
              onClick={() => setShowPasswordChk(!showPasswordChk)}
            >
              {showPasswordChk ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="h-8">
            {errors.passwordChk && (
              <span className="text-xs text-red-600">
                {errors.passwordChk.message}
              </span>
            )}
          </div>
        </div>

        {/* 이름 */}
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="text-sm mb-1.5 after:content-['*'] after:ml-0.5 after:text-red-500"
          >
            이름
          </label>
          <input
            {...register('name', { required: '이름을 입력해주세요.' })}
            id="name"
          />
          <div className="h-8">
            {errors.name && (
              <span className="text-xs text-red-600">
                {errors.name.message}
              </span>
            )}
          </div>
        </div>

        <div className="h-8"></div>
        <button
          className={`w-full p-2 bg-primary-color rounded-md text-white disabled:opacity-50 disabled:cursor-not-allowed `}
          type="submit"
          disabled={!isDirty || !isValid}
        >
          회원 가입
        </button>
      </form>

      <div className="h-3"></div>
    </div>
  )
}

export default SignUpPage

type Inputs = {
  email: string
  password: string
  passwordChk: string
  name: string
}
