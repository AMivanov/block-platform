import styled from 'styled-components';

export const Article = styled.li`
  font-family: 'InterRegular', sans-serif;
  border: 1px solid #DFE5EC;
  border-radius: 7px;
  box-shadow:
          rgba(0, 0, 0, 0.16) 0 10px 36px 0,
          rgba(0, 0, 0, 0.06) 0 0 0 1px;
  width: 938px;
  height: 140px;
  position: relative;
  padding: 15px 16px 15px 16px;
  margin-bottom: 22px;
  grid-gap: 3px;
  display: flex;
  flex-direction: column;
`

export const WrapperArticle = styled.div`
  display: flex;
  padding: 0;
  align-items: center;
`

export const Title = styled.h2`
  font-size: 20px;
  line-height: 28px;
  color: #1890FF;
  margin: 0 15px 0 0;
`

export const LikesCount = styled.div`
  font-size: 12px;
  line-height: 22px;
  color: #00000080;
  margin-left: 5px;
`

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  grid-gap: 10px;
  padding: 0;
`

export const Tag = styled.li`
  list-style: none;
  font-size: 12px;
  color: #00000080;
  line-height: 14.52px;
  border: 1px solid #00000080;
  border-radius: 2px;
  padding: 3px;
`

export const Content = styled.p`
  font-size: 12px;
  line-height: 22px;
  color: #00000080;
  margin: 0;
`

export const UserInfo = styled.div`
  position: absolute;
  right: 80px;
  display: flex;
  flex-direction: column;
`

export const UserName = styled.div`
  font-size: 18px;
  line-height: 28px;
`

export const PublicationDate = styled.div`
  font-size: 12px;
  line-height: 22px;
  color: #00000080;
  margin: 0 0 0 auto;
`

export const Avatar = styled.div`
  position: absolute;
  width: 46px;
  height: 46px;
  right: 16px;
`
