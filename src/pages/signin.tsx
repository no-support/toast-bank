import Link from 'next/link'
import { useForm, SubmitHandler } from 'react-hook-form'

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log('signin.tsx - data: ', data)
  }

  return (
    <div className="flex flex-col p-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* 이메일 */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm mb-1.5">
            이메일
          </label>
          <input placeholder="user1@email.com" {...register('email')} />
          {errors.email && <span></span>}
        </div>

        <div className="h-4"></div>

        {/* 패스워드 */}
        <div className="flex flex-col">
          <label htmlFor="pw" className="text-sm mb-1.5">
            패스워드
          </label>
          <input {...register('pw', { required: true })} />
          {errors.pw && <span></span>}
        </div>
        <div className="h-8"></div>
        <button
          className="w-full p-2 bg-toast-blue rounded-md text-white  "
          type="submit"
        >
          로그인
        </button>
      </form>

      <div className="h-3"></div>
      <Link href={'/signup'} className="text-center">
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
