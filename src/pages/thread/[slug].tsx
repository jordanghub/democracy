import * as Styled from 'pagesStyle/thread-show.style';
import { Nav, ThreadFull } from 'components';
import { threadSingle } from 'fixtures/thread' 
import { useRouter } from 'next/router';
const Thread = () => {
  const router = useRouter()
  const { slug } = router.query;
  return (
    <div>
      <Nav />
      <Styled.Wrapper>
        <ThreadFull
          title={threadSingle.title}
          messages={threadSingle.messages}
          categories={threadSingle.categories}
        />

      </Styled.Wrapper>
    </div>
  )
}

export default Thread; 