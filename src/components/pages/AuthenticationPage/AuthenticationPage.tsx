import { Button, Checkbox, ConfigProvider } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';

import { fetchPostLoginUser, fetchPostNewUser, fetchPutEditProfile } from '../../../shared/api/api';
import { IUser } from '../../../interfaces';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks';

import * as Styles from './AuthenticationPage.styles'
import { IAuthenticationPageProps } from './interfaces';

export default function AuthenticationPage (props: IAuthenticationPageProps) {
    const { type = '' } = props;

    const userState = useAppSelector((state) => state.localReducer.user)

    const { register,
        handleSubmit,
        formState: { errors },
        watch,
        control,
    } = useForm({
        defaultValues: {
            userName: userState.username as string || '',
            emailAddress: userState.email as string || '',
            password: '',
            repeatPassword: '',
            agreeToTerms: false,
            avatar: '',
        } })

    const dispatch = useAppDispatch()

    const password = watch('password')
    const history = useHistory()

    const onSubmitSignUp = (data: IUser) => {
        fetchPostNewUser(data)()
            .then(() => {
                history.push('/articles/');
            })
            .catch((error) => {
                console.error('Ошибка регистрации', error);
            });
    }

    const onSubmitEdit = (data: IUser) => {
        dispatch(fetchPutEditProfile(data))
            .then((response) => {
                try {
                    if (response && response.status === 200) {
                        history.push('/articles/');
                    }
                } catch (e) {
                    console.error('Ошибка редактирования профиля', e);
                }
            })
            .catch((error) => {
                console.error('Ошибка редактирования профиля', error);
            })
    }

    const onSubmitSignIn = (data: IUser) => {
        dispatch(fetchPostLoginUser(data))
        .then((response) => {
            try {
                if (response.status === 200) {
                    history.push('/articles/');
                }
            } catch (e) {
                console.error('Ошибка входа', e);
            }
        })
        .catch((error) => {
            console.error('Ошибка входа', error);
        })
    }

    return (
            <Styles.AuthenticationPage type={type}>
                <Styles.Title>
                    {type === 'signUp' ? 'Create new account' : type === 'edit' ? 'Edit Profile' : 'Sign In'}
                </Styles.Title>
                <form onSubmit={type === 'signUp' ? handleSubmit(onSubmitSignUp) : type === 'edit' ? handleSubmit(onSubmitEdit) : handleSubmit(onSubmitSignIn)}>
                    {(type === 'signUp' || type === 'edit') && (
                        <>
                            Username
                            <Styles.Input
                              {...register('userName', {
                                required: 'This is required.',
                                minLength: {
                                    value: 3,
                                    message: 'Your username needs to be 3 characters long',
                                },
                                  maxLength: {
                                    value: 20,
                                      message: 'Your username must be no more than 20 characters',
                                },
                                })}
                              type="text"
                              placeholder="Username"
                            />
                            <Styles.ErrorMessage>{errors.userName?.message}</Styles.ErrorMessage>
                        </>
                    )}
                    Email address
                    <Styles.Input
                      {...register('emailAddress', {
                          required: 'This is required.',
                      })}
                      type="email"
                      placeholder="Email address"
                    />
                    {(type === 'signUp' || type === 'signIn') && (
                       <>
                           Password
                           <Styles.Input
                             {...register('password', {
                                   required: 'This is required.',
                                   minLength: {
                                       value: 6,
                                       message: 'Your username needs to be 6 characters long',
                                   },
                                   maxLength: {
                                       value: 40,
                                       message: 'Your username must be no more than 40 characters',
                                   },
                               })}
                             type="password"
                             placeholder="Password"
                             className={errors.password ? 'error' : ''}
                           />
                           <Styles.ErrorMessage>{errors.password?.message}</Styles.ErrorMessage>
                       </>
                    )}
                    {type === 'edit' && (
                        <>
                            New Password
                            <Styles.Input
                              type="password"
                              placeholder="New Password"
                            />
                        </>
                    )}
                    {type === 'signUp' && (
                        <>
                            Repeat password
                            <Styles.Input
                              {...register('repeatPassword', {
                                  required: 'This is required.',
                                  validate: (value) => value === password || 'Password must match',
                              })}
                              type="password"
                              placeholder="Password"
                              className={errors.password ? 'error' : ''}
                            />
                            <Styles.ErrorMessage>{errors.repeatPassword?.message}</Styles.ErrorMessage>
                            <Styles.Divider />
                            <ConfigProvider
                              theme={{
                                    token: {
                                        fontFamily: 'RobotoRegular',
                                        fontSize: 14,
                                        // lineHeight: 22,
                                        colorText: '#595959',
                                    },
                                }}
                            >
                                <Controller
                                  name="agreeToTerms"
                                  control={control}
                                  rules={{ required: 'This is required.' }}
                                  render={({ field }) => (
                                      <Checkbox
                                        checked={field.value}
                                        onChange={(e) => field.onChange(e.target.checked)}
                                      />
                                  )}
                                />
                                    I agree to the processing of my personal information
                                <Styles.ErrorMessage>{errors.agreeToTerms?.message}</Styles.ErrorMessage>
                            </ConfigProvider>
                        </>
                    )}
                    {type === 'edit' && (
                        <>
                            Avatar image (url)
                            <Styles.Input
                              {...register('avatar', {
                                    required: false,
                                })}
                              type="text"
                              placeholder="Avatar Image"
                            />
                        </>
                    )}
                    <Styles.PositionButton>
                        <Button
                          type="primary"
                          block
                          size="large"
                          htmlType="submit"
                        >
                            {type === 'signUp' ? 'Create' : type === 'edit' ? 'Save' : 'Login'}
                        </Button>
                    </Styles.PositionButton>
                </form>
                {(type === 'signUp' || type === 'signIn') && (
                    <Styles.FooterWrapper>
                        <Styles.Text>
                            {type === 'signUp' ? 'Already have an account?' : 'Dont have an account?'}
                        </Styles.Text>
                        <Styles.SignHref>
                            <Link to={type === 'signUp' ? '/sign-in' : '/sign-up'}>
                                {type === 'signUp' ? 'Sign In.' : 'Sign Up.'}
                            </Link>
                        </Styles.SignHref>
                    </Styles.FooterWrapper>
                )}
            </Styles.AuthenticationPage>
    )
}