import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { getCsrfToken, signIn, useSession } from 'next-auth/react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm, SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'

const SignInPage = ({
  csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter()

  const { status } = useSession()
  if (status === 'authenticated') {
    router.push('/')
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    try {
      const res = await signIn('credentials', { ...formData, redirect: false })
      if (res?.error) throw new Error(res.error)
    } catch (e) {
      toast.error('이메일과 비밀번호를 확인해주세요.')
    }
  }

  return (
    <>
      <Head>
        <title>토스트뱅크 | 로그인</title>
        <meta property="og:title" content="토스트뱅크" />
        <meta
          property="og:description"
          content="완전히 새로운 은행을 만나보세요"
        />
        <meta property="og:image" content="/thumbnail.png" />
      </Head>
      <div className="flex flex-col p-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          {/* 이메일 */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm mb-1.5 text-text">
              이메일
            </label>
            <input
              id="email"
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
            <label htmlFor="password" className="text-sm mb-1.5 text-text">
              패스워드
            </label>
            <input
              id="password"
              type="password"
              {...register('password', { required: true, minLength: 8 })}
              className={errors.password && 'border-red-500'}
            />
          </div>
          <div className="h-8"></div>
          <button
            className={`w-full p-2 bg-primary rounded-md text-white ${
              !isDirty || !isValid ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            type="submit"
            disabled={!isDirty || !isValid}
          >
            로그인
          </button>
        </form>

        <div className="h-3"></div>
        <Link href={'/signup'} className="text-center text-primary">
          아직 계정이 없으신가요?
        </Link>
      </div>
    </>
  )
}
export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  }
}
export default SignInPage

type Inputs = {
  email: string
  password: string
}
