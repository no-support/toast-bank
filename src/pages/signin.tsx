import Link from 'next/link'
import { useForm, SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'
const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // TODO 로그인 작업
    console.log('signin.tsx - data: ', data)
    try {
      throw new Error()
    } catch {
      toast.error('입력값을 확인해주세요.')
    }
  }

  return (
    <div className="flex flex-col p-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* 이메일 */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm mb-1.5">
            이메일
          </label>
          <input
            placeholder="user1@email.com"
            {...register('email', {
              required: true,
              pattern:
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
            })}
          />
        </div>

        <div className="h-4"></div>

        {/* 패스워드 */}
        <div className="flex flex-col">
          <label htmlFor="pw" className="text-sm mb-1.5">
            패스워드
          </label>
          <input
            {...register('pw', { required: true, minLength: 8 })}
            className={errors.pw && 'border-red-500'}
          />
        </div>
        <div className="h-8"></div>
        <button
          className={`w-full p-2 bg-primary-color rounded-md text-white ${
            !isDirty || !isValid ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          type="submit"
          disabled={!isDirty || !isValid}
        >
          로그인
        </button>
      </form>

      <div className="h-3"></div>
      <Link href={'/signup'} className="text-center text-primary-color">
        아직 계정이 없으신가요?
      </Link>
    </div>
  )
}

export default Signin

type Inputs = {
  email: string
  pw: string
}
