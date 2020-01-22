import * as Styled from 'pagesStyle/thread-show.style';
import { Nav, ThreadFull } from 'components';
import { threadSingle } from 'fixtures/thread' 
import { useRouter } from 'next/router';
import { BaseLayout } from 'components/Layouts';
const Thread = () => {
  const router = useRouter()
  const { slug } = router.query;
  return (
    <BaseLayout>
      <Styled.Wrapper>
        <ThreadFull
          title={threadSingle.title}
          messages={threadSingle.messages}
          categories={threadSingle.categories}
        />
      </Styled.Wrapper>
    </BaseLayout>
  )
}

export default Thread; 