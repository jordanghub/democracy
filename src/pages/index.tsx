import { NextPage, NextPageContext } from 'next';
import { useDispatch, useSelector } from 'react-redux'
import { Store } from 'redux'
import { Typography } from '@material-ui/core'

import { ThreadHomepage as ThreadHomepageType } from 'types/thread'
import { TState } from 'types/state'

import * as Styled from 'pagesStyle/index.style'

import { ThreadHomepage } from 'components'
import { fetchLatestThreads } from 'store/actions'

import { BaseLayout } from 'containers/Layouts'


interface HomepageProps {
  threads?: ThreadHomepageType[];
}

const Homepage: NextPage<HomepageProps> = () => {
  
  const threads  = useSelector((state: TState) => state.thread.latestThreads);

  const threadList = threads?.map((thread) => (
    <ThreadHomepage 
      key={thread.id}
      id={thread.id}
      title={thread.title}
      author={thread.author}
      date={thread.createdAt}
      categories={thread.categories}
      messageType="thread"
    />
     
  ))
  
  return (
    <BaseLayout>
      <Styled.Wrapper>
          <Styled.LatestThreads>
            <Typography variant="h4" component="h2">Les derniers threads</Typography>
            {threadList}
          </Styled.LatestThreads>
        </Styled.Wrapper>
    </BaseLayout>
  )
}

Homepage.getInitialProps = async (ctx: NextPageContext & { store: Store, isServer: boolean }) => {
  const { store } = ctx;
 
  store.dispatch(fetchLatestThreads());  

  return {};
  
}

export default Homepage