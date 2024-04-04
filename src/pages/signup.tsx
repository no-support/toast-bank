import { SubmitHandler, useForm } from 'react-hook-form'

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log('signup.tsx - data: ', data)
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
            {...register('email', { required: true })}
          />

          <div className="h-8">
            {errors.email && (
              <span className="text-xs text-red-600">
                이메일 형식이 잘못되었어요.
              </span>
            )}
          </div>
        </div>

        {/* 패스워드 */}
        <div className="flex flex-col">
          <label htmlFor="pw" className="text-sm mb-1.5">
            패스워드
          </label>
          <input {...register('pw', { required: true })} />
          <div className="h-8">
            {errors.pw && (
              <span className="text-xs text-red-600">
                패스워드 형식이 잘못되었어요.
              </span>
            )}
          </div>
        </div>

        {/* 패스워드 확인 */}
        <div className="flex flex-col">
          <label htmlFor="pwCheck" className="text-sm mb-1.5">
            패스워드 확인
          </label>
          <input {...register('pwCheck', { required: true })} />
          <div className="h-8">
            {errors.pwCheck && (
              <span className="text-xs text-red-600">
                패스워드가 일치하지 않아요.
              </span>
            )}
          </div>
        </div>

        {/* 이름 */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm mb-1.5">
            이름
          </label>
          <input {...register('name', { required: true })} />
          <div className="h-8">
            {errors.name && (
              <span className="text-xs text-red-600">
                적절하지 않은 이름이네요!
              </span>
            )}
          </div>
        </div>

        <div className="h-8"></div>
        <button
          className="w-full p-2 bg-toast-blue rounded-md text-white"
          type="submit"
        >
          회원 가입
        </button>
      </form>

      <div className="h-3"></div>
    </div>
  )
}

export default Signup

type Inputs = {
  email: string
  pw: string
  pwCheck: string
  name: string
}
