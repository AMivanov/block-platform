import { Input, Button, ConfigProvider } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

import { IUserArticle } from '../../../interfaces';
import { fetchPostCreateArticle, fetchPutEditArticle } from '../../../shared/api/api';
import { useAppSelector } from '../../../shared/hooks';

import * as Styles from './ArticleCreate.styles'
import { IArticleCreateProps } from './ArticleCreate.intefaces';

const { TextArea } = Input;
export default function ArticleCreate (props: IArticleCreateProps) {
    const { slug = '' } = props

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
    const articles = useAppSelector((state) => state.localReducer.articles)
    const currentArticle = articles.find((article) => article.slug === slug)

    useEffect(() => {
        if (slug && currentArticle) {
            setValue('title', currentArticle.title)
            setValue('description', currentArticle.description)
            setValue('body', currentArticle.body)
            setValue('tags', currentArticle.tagList)
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

    return (
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
                    <Controller
                      name="tags"
                      control={control}
                      render={({ field }) => (
                            <Input
                              {...field}
                              placeholder="Tag"
                              style={{ width: 300 }}
                            />
                        )}
                    />
                    <Button danger size="large">Delete</Button>
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
                        <Button size="large">Add tag</Button>
                    </ConfigProvider>
                    <br />
                    <br />
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
}