import { Input, Button, ConfigProvider } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { Redirect, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { IUserArticle } from '../../../interfaces';
import { fetchPostCreateArticle, fetchPutEditArticle } from '../../../shared/api/api';
import { useAppSelector } from '../../../shared/hooks';

import * as Styles from './ArticleCreate.styles'
import { IArticleCreateProps, ITagId } from './ArticleCreate.intefaces';

const { TextArea } = Input;
export default function ArticleCreate (props: IArticleCreateProps) {
    const { slug = '' } = props
    const articles = useAppSelector((state) => state.localReducer.articles)

    const auth = useAppSelector((state) => state.localReducer.user)
    const currentArticle = articles.find((article) => article.slug === slug)

    const [tags, setTags] = useState(currentArticle ? currentArticle.tagList.map((elem: string, index: number) => ({ id: index })) : [])
    const [count, setCount] = useState(0)

    const { handleSubmit,
        control,
        setValue,
    } = useForm({
        defaultValues: {
            title: '',
            description: '',
            body: '',
            tags: [],
        },
    })

    const history = useHistory()

    useEffect(() => {
        if (slug && currentArticle) {
            setValue('title', currentArticle.title)
            setValue('description', currentArticle.description)
            setValue('body', currentArticle.body)
            setValue('tags', currentArticle.tagList)
            setTags(currentArticle.tagList.map((elem: string, index: number) => ({ id: index })));
            } else {
                setValue('tags', [])
                setTags([{ id: 0 }])
            }
    }, [slug, currentArticle, setValue]);

    const onSubmitCreateArticle = (data: IUserArticle) => {
        fetchPostCreateArticle(data)()
            .then(() => {
                history.push('/articles/');
            })
            .catch((error) => {
                console.error('Ошибка создания статьи', error);
            });
    }

    const onSubmitEditArticle = (data: IUserArticle) => {
        fetchPutEditArticle(data)()
            .then(() => {
                history.push('/articles/');
            })
            .catch((error) => {
                console.error('Ошибка редактирования статьи', error);
            });
    }

    useEffect(() => {
        setCount((prev) => prev + 1)
    }, [tags])

    const handleAddTag = () => {
        const tagList = currentArticle ? currentArticle.tagList : [];
        const newTag = {
            id: tagList.length + count,
        }
        setTags([...tags, newTag])
    }

    const handleDeleteTag = (event: any) => {
        setTags([...tags.slice(0, event.currentTarget.dataset.testId), ...tags.slice(+event.currentTarget.dataset.testId + 1)])
    }
    const elementsTags = tags.map((tag: ITagId, index: number) => {
        return (
           <Styles.AddWrapperTags key={tag.id}>
               <Controller
                   // @ts-ignore
                 name={`tags.${tag.id}`}
                 control={control}
                 render={({ field }) => (
                       <Input
                         {...field}
                         placeholder="Tag"
                         style={{ width: 300 }}
                       />
                   )}
               />
               <Button danger size="large" onClick={handleDeleteTag} data-test-id={index}>Delete</Button>
           </Styles.AddWrapperTags>
        )
    })

    return (
            auth.token
                ? (
                    <Styles.ArticlesCreate>
                    <Styles.Title>
                        {slug ? 'Edit article' : 'Create new article' }
                    </Styles.Title>
                        <form onSubmit={slug ? handleSubmit(onSubmitEditArticle) : handleSubmit(onSubmitCreateArticle)}>
                            Title
                            <Controller
                              name="title"
                              control={control}
                              rules={{ required: true }}
                              render={({ field }) => (
                                    <Input {...field} placeholder="Title" />
                                )}
                            />
                            <br />
                            <br />
                            Short description
                            <Controller
                              name="description"
                              control={control}
                              rules={{ required: true }}
                              render={({ field }) => (
                                    <Input {...field} placeholder="Description" />
                                )}
                            />
                            <br />
                            <br />
                            Text
                            <Controller
                              name="body"
                              control={control}
                              rules={{ required: true }}
                              render={({ field }) => (
                                    <TextArea
                                      {...field}
                                      rows={7}
                                      placeholder="Text"
                                      maxLength={10000}
                                    />
                                )}
                            />
                            <br />
                            <br />
                            Tags
                            <Styles.WrapperTags>
                                {elementsTags}
                                <Styles.BtnAdd>
                                    <ConfigProvider
                                      theme={{
                                            components: {
                                                Button: {
                                                    defaultBorderColor: '#1890FF',
                                                    defaultColor: '#1890FF',
                                                },
                                            },
                                        }}
                                    >
                                        <Button size="large" onClick={handleAddTag}>Add tag</Button>
                                    </ConfigProvider>
                                </Styles.BtnAdd>
                            </Styles.WrapperTags>
                            <Button
                              type="primary"
                              size="large"
                              style={{ width: 320 }}
                              htmlType="submit"
                            >
                                Send
                            </Button>
                        </form>
                    </Styles.ArticlesCreate>
                )
                : (
                    <Redirect to="/sign-in/" />
                )
    )
}